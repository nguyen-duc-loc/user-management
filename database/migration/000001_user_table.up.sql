CREATE TABLE `users` (
  `id` integer UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `birthdate` date NOT NULL,
  `phone` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT (now())
);

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Grady Langosh II', 'GradyLangoshII_Hermiston64@yahoo.com', STR_TO_DATE('27/01/1984', '%d/%m/%Y'), '3888300310');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Dean Bergnaum', 'DeanBergnaum_Lehner45@hotmail.com', STR_TO_DATE('09/10/1960', '%d/%m/%Y'), '2829285366');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Tamara Klocko', 'TamaraKlocko.Weissnat93@gmail.com', STR_TO_DATE('26/03/1968', '%d/%m/%Y'), '2767495865');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Olivia Schuppe', 'OliviaSchuppe_Tremblay@gmail.com', STR_TO_DATE('29/12/1985', '%d/%m/%Y'), '9928945332');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Ms. Mamie Cole', 'Ms.MamieCole.DuBuque29@yahoo.com', STR_TO_DATE('07/05/1984', '%d/%m/%Y'), '4199424685');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Sheri Ankunding', 'SheriAnkunding.Heaney@yahoo.com', STR_TO_DATE('30/05/1994', '%d/%m/%Y'), '8303796876');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Brandi Casper-Shields', 'BrandiCasper-Shields_Okuneva42@hotmail.com', STR_TO_DATE('21/03/1992', '%d/%m/%Y'), '0836405144');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Simon Stiedemann', 'SimonStiedemann_Bode19@yahoo.com', STR_TO_DATE('18/09/1995', '%d/%m/%Y'), '8040007137');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Robyn DuBuque II', 'RobynDuBuqueII_Krajcik96@hotmail.com', STR_TO_DATE('19/07/1990', '%d/%m/%Y'), '1887120474');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Joseph Sauer', 'JosephSauer_Fadel@gmail.com', STR_TO_DATE('26/10/1999', '%d/%m/%Y'), '1551647335');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Carrie Strosin IV', 'CarrieStrosinIV31@gmail.com', STR_TO_DATE('21/09/2006', '%d/%m/%Y'), '1041225362');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Charlotte Borer', 'CharlotteBorer_Ruecker@hotmail.com', STR_TO_DATE('11/07/1979', '%d/%m/%Y'), '6702882393');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Spencer Roob-Beatty', 'SpencerRoob-Beatty68@hotmail.com', STR_TO_DATE('23/07/2005', '%d/%m/%Y'), '9946357716');

INSERT INTO users(fullname, email, birthdate, phone) VALUES ('Bernice Collier', 'BerniceCollier_Effertz@yahoo.com', STR_TO_DATE('20/02/1980', '%d/%m/%Y'), '8443173669');
