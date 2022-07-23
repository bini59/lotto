-- Create Database
/*
User
    +----------+-------------+------+-----+---------+----------------+
    | Field    | Type        | Null | Key | Default | Extra          |
    +----------+-------------+------+-----+---------+----------------+
    | no       | int         | NO   | PRI | NULL    | auto_increment |
    | id       | varchar(20) | NO   | UNI | NULL    |                |
    | password | varchar(30) | NO   |     | NULL    |                |
    | name     | varchar(20) | NO   | UNI | NULL    |                |
    | email    | varchar(20) | YES  | UNI | NULL    |                |
    | phone    | varchar(20) | YES  | UNI | NULL    |                |
    | order    | int         | NO   |     | NULL    |                |
    +----------+-------------+------+-----+---------+----------------+

Numbers
    +-------+------+------+-----+---------+----------------+
    | Field | Type | Null | Key | Default | Extra          |
    +-------+------+------+-----+---------+----------------+
    | no    | int  | NO   | PRI | NULL    | auto_increment |
    | n_1   | int  | NO   |     | NULL    |                |
    | n_2   | int  | NO   |     | NULL    |                |
    | n_3   | int  | NO   |     | NULL    |                |
    | n_4   | int  | NO   |     | NULL    |                |
    | n_5   | int  | NO   |     | NULL    |                |
    | n_6   | int  | NO   |     | NULL    |                |
    +-------+------+------+-----+---------+----------------+
*/

Create table user(
    `no` integer not null AUTO_INCREMENT primary key unique,
    `id` varchar(20) not null,
    `password` varchar(30) not null,
    `name` varchar(30) not null,
    `email` varchar(50),
    `phone` varchar(20),
    `order` integer
);

Create table numbers(
    `no` integer not null AUTO_INCREMENT primary key,
    `n_1` integer not null,
    `n_2` integer not null,
    `n_3` integer not null,
    `n_4` integer not null,
    `n_5` integer not null,
    `n_6` integer not null
);

desc user;
desc numbers;