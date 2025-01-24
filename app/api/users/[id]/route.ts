import { format } from "date-fns";
import { NextResponse } from "next/server";

import dbConnect from "@/lib/mysql";
import { UserSchema } from "@/lib/validation";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      {
        success: false,
        data: null,
      },
      {
        status: 400,
      }
    );
  }

  try {
    const connection = await dbConnect();

    const [user] = await connection.execute(
      `SELECT id, fullname, email, birthdate, phone FROM users WHERE id = ? LIMIT 1`,
      [id]
    );

    if ((user as unknown[]).length === 0) {
      return NextResponse.json(
        {
          success: false,
          data: null,
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: (user as unknown[])[0],
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      {
        success: false,
        data: null,
      },
      {
        status: 400,
      }
    );
  }

  try {
    const connection = await dbConnect();

    const [userResult] = await connection.execute(
      `SELECT id, fullname, email, birthdate, phone FROM users WHERE id = ? LIMIT 1`,
      [id]
    );

    if ((userResult as unknown[]).length === 0) {
      return NextResponse.json(
        {
          success: false,
          data: null,
        },
        {
          status: 404,
        }
      );
    }

    const body = await request.json();

    const validatedData = UserSchema.safeParse(body);
    if (!validatedData.success) {
      throw validatedData.error;
    }

    const { fullname, email, birthdate, phone } = validatedData.data;

    await connection.execute(
      `UPDATE users SET fullname = ?, email = ?, birthdate = STR_TO_DATE(?, '%d/%m/%Y'), phone = ? WHERE id = ?`,
      [fullname, email, format(birthdate, "dd/MM/yyyy"), phone, id]
    );

    return NextResponse.json(
      {
        success: true,
        data: { id, ...validatedData.data },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      {
        success: false,
        data: null,
      },
      {
        status: 400,
      }
    );
  }

  try {
    const connection = await dbConnect();

    const [userResult] = await connection.execute(
      `SELECT id, fullname, email, birthdate, phone FROM users WHERE id = ? LIMIT 1`,
      [id]
    );

    if ((userResult as unknown[]).length === 0) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 404,
        }
      );
    }

    await connection.execute(`DELETE FROM users WHERE id = ?`, [id]);

    return new NextResponse(null, {
      status: 204,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
