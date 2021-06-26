$(document).ready(function(){
    $("#order-details").hide();
    $("#deliver").hide();

    //business logic

    var totalPriceArray= [];
    function order(size, crust, toppings, amount) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.pizzaPrice = 0;
        this.amount = amount;
    }

    order.prototype.pizzaCost = function() {
        if (this.size ==="small-pizza") {
            this.pizzaPrice += 300;
        }
        else if (this.size ==="medium-pizza") {
            this.pizzaPrice += 600;
        }
        else if (this.size ==="large-pizza") {
            this.pizzaPrice += 900;
        }
        
        if (this.crust === "thin") {
            this.pizzaPrice += 100;
        }
        else if (this.crust === "crispy") {
            this.pizzaPrice += 100;
        }
        else if (this.crust === "thick") {
            this.pizzaPrice += 180;
        }
        else if (this.crust === "cheese-stuffed") {
            this.pizzaPrice += 230;
        }
        else if (this.crust === "glutten-free") {
            this.pizzaPrice += 120;
        }
        else if (this.crust === "custom") {
            this.pizzaPrice += 280;
        }
        else if (this.crust === "flatbread") {
            this.pizzaPrice += "150"
        }
    }
})