USE defaultdb;

INSERT INTO novels (title, author, year, gender)
VALUES 
('Maus', 'Art Spiegelman', 1986, 'Historical'),
('Persépolis','Marjane Satrapi','2000','Biography'),
('Piruetas','Tillie Walden','2017','Biography'),
('Todo bajo el Sol', ' Ana Penyas', '2021', 'Documental');

INSERT INTO authors (name, lastname, country)
VALUES
('Artie','Spiegelman','Sweden'),
('Marjane','Satrapi','Iran'),
('Tillie','Walden','USA'),
('Ana','Penyas','Spain');
