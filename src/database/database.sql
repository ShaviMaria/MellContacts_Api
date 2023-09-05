CREATE DATABASE IF NOT EXISTS MellContacts;

USE MellContacts;

CREATE TABLE IF NOT EXISTS User(
    Id_User BIGINT UNSIGNED AUTO_INCREMENT,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Name VARCHAR(20) NOT NULL,
    First_Surname VARCHAR(20) NOT NULL,
    Second_Surname VARCHAR(20),
    Password VARCHAR(100) NOT NULL,
    PRIMARY KEY(Id_User)
);

CREATE TABLE IF NOT EXISTS Contact(
    Id_Contact BIGINT UNSIGNED AUTO_INCREMENT,
    Name VARCHAR(20) NOT NULL,
    First_Surname VARCHAR(20),
    Second_Surname VARCHAR(20),
    Email VARCHAR(50),
    Phone_Number VARCHAR(13) NOT NULL,
    Secondary_Phone_Number VARCHAR(13),
    Company VARCHAR(20),
    Favorite INT(1),
    User BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY(Id_Contact),
    CONSTRAINT User_FK_Contact
    FOREIGN KEY(User) REFERENCES User(Id_User) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO User VALUES(
    null,
    'rodolfo.garcia@gmail.com',
    'Rodolfo',
    'Garcia',
    'Martinez',
    '$2a$12$QNkgBjzfKRTpb.uCzrBpMezaxSw7aooo/nrEa./lAChBNFmbBk.OO'
);

INSERT INTO Contact VALUES(
    null,
    'Daniel',
    'Martinez',
    null,
    'daniel.martinez@gmail.com',
    '+525534371415',
    null,
    'SCC',
    1,
    1
);