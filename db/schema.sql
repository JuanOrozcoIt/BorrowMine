/*Mysql database schema*/


CREATE DATABASE IF NOT EXISTS borrowMine_db;
USE borrowMine_db;

CREATE TABLE IF NOT EXISTS user_tbl(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(50) NOT NULL,
	user_email varchar(100) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS post_tbl(
	id int NOT NULL AUTO_INCREMENT,
	description varchar(50) NOT NULL,
	price int(10) NOT NULL, 
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS rental_tbl(
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
);




/*owned by user to fetch all posts for a certain user