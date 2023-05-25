CREATE DATABASE social;
USE social

CREATE TABLE users(
    id integer PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age integer NOT NULL,
    email VARCHAR(255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users
VALUES (1, 'Subhadip Das', 23, 'subha@gmail.com');
