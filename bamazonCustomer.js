
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

  connection.connect(function(err) {
    if (err) throw err;
    showTable();
  });

  function showTable() {
    console.log("Current Bamazon Inventory:\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].item_id + "\nProduct: " + res[i].product_name + "\nDepartment: " + res[i].department_name + "\nPrice ($): " + res[i].price + "\nStock Qty: " + res[i].stock_quantity + "\n----------------------------\n");
      }
      });
  }

setTimeout(
  
  function checkInventory() {
  // query the database for all items in the bamazon store
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which item they'd like to purchase and what quantity
    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "Please enter the ID number for the product you would like to purchase: ",
          validate: function(value) {
            if (isNaN(value) === false && value < 11) {
              return true;
            }
            return false;
          }
        },
        {
          name: "qty",
          type: "input",
          message: "Please enter the quantity of this item you would like to purchase: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        var reqQty;
        var currentStock;
        var newStock;
        var orderTotal;
        // console log the chosen item and quantity
        console.log("You have selected item ID# " + answer.item);
        reqQty = answer.qty;
        console.log("You have requested quantity " + reqQty + " of this item");
        
        // read the info on the requested item from the MySQL database and determine if there is enough inventory for this item to complete the order
        connection.query('SELECT stock_quantity FROM products WHERE item_id = ?', parseInt(answer.item), function(err, res) {
              if (err) throw err;

              currentStock = JSON.stringify(results[parseInt(answer.item)-1].stock_quantity);

              orderTotal = JSON.stringify(results[parseInt(answer.item)-1].price) * reqQty;

              console.log("Current qty in stock of the item you selected: " + currentStock);

              newStock = parseInt(currentStock - reqQty);
              
              // console log what the new stock quantity for this item will be if the purchase is completed
              console.log("The new stock qty for this item will be: " + newStock);
              
              // if there is enough stock to complete the request, show the user their total and update the MySQL database with the new quantity
              if (newStock >= 0) {
                connection.query(
                  "UPDATE products SET ? WHERE ?",
                  [
                    {
                      stock_quantity: newStock
                    },
                    {
                      item_id: answer.item
                    }
                  ],
                  function(error) {
                    if (error) throw err;
                    console.log("Your purchase was successful!  Your total is $" + orderTotal + " and your order will arrive in 4-6 weeks.");
                    //showTable();
                    connection.end();
                  }
                );
              }
          
              // if not, end the sale and do not update the database
              else if (newStock < 0 ) {
                // bid wasn't high enough, so apologize and start over
                console.log("Insufficient Quantity in-stock!  Please check back in a few days or take your business to one of our competitors.");
                //showTable();
                connection.end();
              }
            });
          });
   })
    
  }, 2000)