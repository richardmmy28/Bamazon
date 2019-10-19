drop database if exists bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shirt', 'Clothes', 12.00, 95);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pants', 'Clothes', 39.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shorts', 'Clothes', 29.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Socks', 'Clothes', 12.99, 85);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Glove', 'Sports Gear', 48.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Basketball', 'Sports Gear', 49.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Baseball', 'Sports Gear', 9.99, 185);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Baseball Bat', 'Sports Gear', 250.00, 110);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Angels', 'Hats', 19.99, 140);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('UCLA', 'Hats', 19.99, 210);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Clippers', 'Hats', 19.99, 3);


SELECT * FROM products;















