# bamazon

* Bamazon is a digital storefront environment which utilizes Node.js via the CLI and interfaces with MySQL to perform CRUD actions on the inventory database.

* When bamazonCustomer.js is run using Node.js, the user is presented with a display of the current bamazon inventory list from the MySQL database which includes: the product ID number, product name, department name, price, and stock quantity.

* User-prompts are then initiated within the CLI asking the user to choose which item and what quantity of that item they would like to purchase.

* When the user selects the product and quantity they would like to purchase, the total price for that order is displayed in the CLI and the MySQL database is updated to reflect the new stock quantity for that item.

* If the user tries to purchase more of an item than is available in the current inventory, a message is returned via the CLI informing the user that there is not enough quantity of that item in stock to meet their demand, the sale is terminated, and no changes to the inventory totals are made in the MySQL database. 

[link to demo](https://github.com/PatrickRice/bamazon/blob/master/bamazon%20Demo.mov)


