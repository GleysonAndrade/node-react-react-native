/**Start database in CMD */
mysql -h localhost -u root -p

/**Create database */
create database node character set utf8mb4 collate utf8mb4_unicode_ci;

/**Create table */
CREATE TABLE `users`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `email` VARCHAR(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/**Select record from database */
SELECT id, name, email FROM users;

/**Register users in the database */
INSERT INTO users (name, email) VALUES ('Gleyson', 'gleysondev@yahoo.com');

/**Limit the number of records in a select */
SELECT id, name, email FROM users LIMIT 3;

/**Limit the number of selected records in the database and indicate the beginning */
SELECT id, name, email FROM users LIMIT 2 OFFSET 4;

/**OFFSET is used to create paginations */
/**Example */
pg 1 = 1,2
pg 2 = 3,4
pg 3 = 5,6

/**Add conditions in the record search */
/**For security when viewing a record it is important to add LIMIT 1 in the query */
SELECT id, name, email FROM users WHERE email = 'gleysondev@yahoo.com' LIMIT 1;

/**Add maide of a condition in the record search */
SELECT id, name, email FROM users WHERE email = 'gleysondev@yahoo.com' AND name = 'Gleyson' LIMIT 1;
SELECT id, name, email FROM users WHERE email = 'gleysondev@yahoo.com' OR name = 'Gleyson' LIMIT 1;

/**Sort records returning from oldest database */
SELECT id, name, email FROM users ORDER BY id ASC;

/**Sort the records returning from the most recent database */
SELECT id, name, email FROM users ORDER BY id DESC;

/**Edit user information in the database */
UPDATE users SET name = 'Gleyson 3a', email = 'gleysondev3a@yahoo.com' WHERE id = 3;

/**Delete user information from database */
DELETE FROM users WHERE id = 3;