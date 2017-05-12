/*Mysql database schema*/


CREATE DATABASE IF NOT EXISTS borrowMine_db;
USE borrowMine_db;

/* Seller Table*/
CREATE TABLE IF NOT EXISTS seller_tbl(
	id int NOT NULL AUTO_INCREMENT,
	seller_name varchar(50) NOT NULL,
	rental_name varchar(100) NOT NULL,
	rental_description varchar(500) NOT NULL, 
	rental_start timestamp,
	rental_end timestamp,
	rental_cost int NOT NULL 
	PRIMARY KEY (id)

/*Borrower Table*/
CREATE TABLE IF NOT EXISTS borrower_tbl(
	id int NOT NULL AUTO_INCREMENT,
	borrower_name varchar(50) NOT NULL,
	borrower_email varchar(50) NOT NULL,
	borrower_phone integer (10) NOT NULL,  
	borrower_start timestamp,
	borrower_end timestamp,
	PRIMARY KEY (id)
);

/*create listing table and user table(name email phone user id)


owned by user to fetch all posts for a certain user