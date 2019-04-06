### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	favorite BOOLEAN DEFAULT false,
	rating INT(3) DEFAULT 0,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    CustomerId DATETIME NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Customers
(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;