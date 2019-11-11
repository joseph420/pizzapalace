//-------------------------------BUSINESS LOGIC DESIGNED AND TESTED---------------------------//

//---Declaration of a Global Variable totalOrderPrice and initialized to an empty array---//
//The final total order price will be pushed to this array
var totalOrderPrice = [];
//------Constructor Placeorder created with it's properties----//
function Placeorder(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = 0;
  // this.deliveryFee = 200;
}
//--Arrays to declare the pizzaSize,pizzaCrust and pizzaTopping to be used in the prototype CostOfPizza--//
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaTopping = ["Bacon", "Chicken", "Beef", "Vegetables"];
//-Prototype CostOfPizza created to determine the price based on the three properties i.e size,cheese,topping-//
Placeorder.prototype.costOfPizza = function() {
  if (this.size === pizzaSize[0]) {
    this.price += 300;
  } else if (this.size === pizzaSize[1]) {
    this.price += 400;
  } else if (this.size === pizzaSize[2]) {
    this.price += 500;
  }
  if (this.crust === pizzaCrust[0]) {
    this.price += 100;
  } else if (this.cheese === pizzaCrust[1]) {
    this.price += 200;
  } else if (this.cheese === pizzaCrust[2]) {
    this.price += 300;
  }
  if (this.topping === pizzaTopping[0]) {
    this.price += 100;
  } else if (this.topping === pizzaTopping[1]) {
    this.price += 200;
  } else if (this.topping === pizzaTopping[2]) {
    this.price += 300;
  } else if (this.topping === pizzaTopping[3]) {
    this.price += 50;
  }
  return this.price;
}
//----End Of the Prototype CostOfPizza---//

Placeorder.prototype.costOfDelivery = function() {
  return this.deliveryFee;
}

//---Creation of prototype totalCost to be used to compute the total cost of all the orders--//
Placeorder.prototype.totalCost = function() {
  //created a variable shoppingCartTotal and initialized it to zero
  var shoppingCartTotal = 0;
  //this for loop iterates through the total order(s) to determine the number of order(s)
  for (var order = 0; order < totalOrderPrice.length; order++) {
    //shoppingCartTotal is now assigned a new value after the order(s) is added
    shoppingCartTotal += totalOrderPrice[order];
  }
  return shoppingCartTotal;
}
//----End Of the Prototype totalCost---//

//---Created and object called ShippingAddress---//
function ShippingAddress(cityName, cityAvenueName, cityStreetName, nameOfBuilding, phoneNumber) {
  this.cityName = cityName;
  this.cityAvenueName = cityAvenueName;
  this.CityStreetName = cityStreetName;
  this.nameOfBuilding = nameOfBuilding;
  this.phoneNumber = phoneNumber;
  this.deliveryAddress = (cityStreetName + " : \n" + cityAvenueName + " : \n" + nameOfBuilding + " : \n");
}
//----End Of the Constructor ShippingAddress---//

//--------------------------- END OF BUSINESS LOGIC DESIGNED AND TESTED------------------------//
//-------------------------------------USER INTERFACE LOGIC------------------------------------//
$(document).ready(function() {
  $("form#customized-pizza").submit(function(event) {
    event.preventDefault();
    var customSize = $("select#size").val();
    var customcrust = $("select#crust").val();
    var customtopping = $("input#topping").val();
    var newPizzaOrder = new Placeorder(customSize, customcrust, customtopping);
    newPizzaOrder.costOfPizza();
    totalOrderPrice.push(newPizzaOrder.price);
    $("#pizza-size").show();
    $("#pizza-crust").show();
    $("#pizza-topping").show();
    $("#pizza-size").append("\t" + "\t" + customSize);
    $("#pizza-crust").append("\t" + "\t" + customcrust);
    $("#pizza-topping").append("\t" + "\t" + customtopping);
    $("#final-cost").text("\t" + "\t" + newPizzaOrder.totalCost());
  });
  $("#checkout-btn").click(function() {
    location.reload();
  });
});
$(document).ready(function() {
  $("#delivery-btn").click(function() {
    $("#address-form").fadeIn();
  });
  $("#address-btn").click(function() {
    $("#address-form").slideUp();
    $("#alert-success").fadeIn();
  });
});