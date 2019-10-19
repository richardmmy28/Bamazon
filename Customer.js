var inquirer = require('inquirer');
var mysql = require('mysql');
var table = require('console.table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'Jud43R1ch!',
    database: 'BamazonDB'
});
var itemArray = [];

function showInventory(){
    connection.query(
        "SELECT * FROM products",
        function (error, response){
            if (error){
                console.log("There was error.")
                return;
            }
            if (!error){
                for (var i = 0; i < response.length; i++){
                    itemArray.push({
                        id: response[i].item_id,
                        item: response[i].product_name,
                        price: response[i].price,
                        department: response[i].department_name
                    });
                }
                console.table(itemArray);
                askUser();
            }
        }
    )
}

function askUser(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'itemChoice',
            message: 'What are you looking to buy?'
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to buy?'
        }
    ]).then(function(answer){
        var item = parseInt(answer.itemChoice);
        var quantity = answer.quantity;
        connection.query(`SELECT * FROM products WHERE item_id = ${item}`, function (error, response){
            if (error){
                console.log("There was an error.");
                return;
            }else {
                productData = response[0];
                if (productData.stock_quantity > quantity){
                    console.log(`Good in stock ${productData.product_name} we have plenty more!`)
                    var newTotal = productData.stock_quantity - quantity
                    var price = quantity*productData.price
                    connection.query(`UPDATE products SET stock_quantity = ${newTotal} WHERE item_id = ${item}`, function(error, response){
                        if (error){
                            console.log("Sorry out of stock.");
                            return;
                        }else{
                            console.log(`The total cost will be $${price}.`)
                            var newSales = productData.product_sales + price
                            connection.query(`UPDATE products SET product_sales = ${newSales} WHERE item_id = ${item}`, function(error, response){
                                if (error){
                                    console.log("Quantity update failed.");
                                    return;
                                }else{
                                    askUser();
                                }
                            })
                         }
                    })
                }else{
                    console.log(`We do not currently have enough ${productData.stock_quantity} in stock!`)
                    askUser();
                }
            }
        })
    })
};

showInventory();