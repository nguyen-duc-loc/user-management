#!/bin/sh

set -e

touch .env.local

make migrate/up

npm run build

exec "$@"