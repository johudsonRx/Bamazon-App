var mysql = require('mysql');
var inquirer = require('inquirer');
var Stock;
var theProduct;
var thePrice;
var totalPrice;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "root", //Your password
    database: "bamazon"
})

connection.connect(function(err){
  if (err) throw err;
  // console.log("connected as id" + connection.threadId);
})

// inquirer.prompt({
//         name: "number",
//         message:"What is the ID number of the product that you'd like to buy?"
        
//     }).then(function(answer) {
       
//        console.log(answer);
//        })


connection.query('SELECT * FROM Products', function(err, res) {
  for(var i = 0; i < res.length; i++){
     console.log(res[i].id + " | " + res[i].ProductName + " | " + res[i].DepartmentName + " | " + res[i].Price + " | " + res[i].StockQuantity)
  }
          // var match = res[i].id;
          // console.log(match);
   // console.log(match)

// }

//  console.log("================================================");
// })

})



   inquirer.prompt({
        name: "number",
        message:"What is the ID number of the product that you'd like to buy?"
        
       }).then(function(answer) {

   
connection.query('SELECT * FROM Products WHERE id=?', [answer.number], function(err, res) {
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].ProductName + " | " + res[i].DepartmentName + " | " + res[i].Price + " | " + res[i].StockQuantity);
        Stock = res[i].StockQuantity;
        theProduct = res[i].ProductName;
        thePrice = res[i].Price;
        


        inquirer.prompt({
        name: "quantity",
        message:"How many units of the product would you like to purchase?"
        
       }).then(function(answer) {
    
      var data = answer.quantity;
      var totalPrice = thePrice * data;
      // console.log(Stock);
      // console.log(data);

          if(data > Stock){
                  console.log("Leave some product for everyone else geez!")
          }
          else{
            console.log(" Boom! " + data + " " + theProduct + " coming your way." )
            console.log("Your total is $" + totalPrice);

          }

           })
    }

    // console.log(answer);

})

           })


    // inquirer.prompt({
    //     name: "quantity",
    //     message:"How many units of the product would you like to purchase?"
        
    //    }).then(function(answer) {

          

    //        })


 

 

