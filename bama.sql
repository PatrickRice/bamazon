DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (6, 2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush", "Hygene", 2.00, 422);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper", "Office Supplies", 3.50, 1320);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Light Bulbs", "Home and Garden", 4.99, 324);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Sporting Goods", 22.99, 78);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Best of the '80s Vol. 3", "Music", 0.99, 422);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shovel", "Home and Garden", 23.45, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 120.98, 41);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Printer", "Electronics", 89.99, 138);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Glasses Case", "Eyewear", 2.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("10 ft. Extension Cord", "Electronics", 1.00, 377);