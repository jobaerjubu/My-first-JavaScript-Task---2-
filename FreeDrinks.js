/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


var burgerPrice = 550;
var cokePrice = 30;

if (burgerPrice > 500) {
    cokePrice = 0;
} else {
    cokePrice = 30;
}

var totalCost = burgerPrice + cokePrice;
console.log("Total Cost: " + totalCost + " tk");
