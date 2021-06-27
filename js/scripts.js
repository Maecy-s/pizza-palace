$(document).ready(function(){
    $("#order-details").hide();
    $("#deliver").hide();

    //business logic

    var totalPriceArray= [];
    function order(size, crust, toppings, amount) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.extra = extra;
        this.pizzaPrice = 0;
        this.amount = amount;
    }

    order.prototype.pizzaCost = function() {
        if (this.size ==="size-1") {
            this.pizzaPrice += 300;
        }
        else if (this.size ==="size-2") {
            this.pizzaPrice += 600;
        }
        else if (this.size ==="size-3") {
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
        else if (this.crust === "stuffed") {
            this.pizzaPrice += 230;
        }
        else if (this.crust === "glutten") {
            this.pizzaPrice += 120;
        }
        else if (this.crust === "custom") {
            this.pizzaPrice += 280;
        }
        else if (this.crust === "flat") {
            this.pizzaPrice += "150"
        }

        if (this.toppings === "top-1") {
            this.pizzaPrice += 100;
        }
        else if (this.toppings === "top-2") {
            this.pizzaPrice += 150;
        }
        else if (this.toppings === "top-3"){
            this.pizzaPrice += 60;
        }
        else if (this.toppings === "top-4") {
            this.pizzaPrice += 100;
        }
        else if (this.toppings === "top-5") {
            this.pizzaPrice += 200;
        }
        else if (this.toppings === "top-6") {
            this.pizzaPrice += 250;
        }
        else if (this.toppings === "top-7") {
            this.pizzaPrice += 100;
        }
        else if (this.toppings === "top-8") {
            this.pizzaPrice += 100;
        }
        else if (this.toppings === "top-9") {
            this.pizzaPrice += 130;
        }
        else if(this.toppings === "top-10") {
            this.pizzaPrice += 100;
        }
        else if (this.toppings === "top-11") {
            this.pizzaPrice += 120;
        }
        else if (this.toppings === "top-12") {
            this.pizzaPrice += 150;
        }
        else if (this.toppings === "top-13") {
            this.pizzaPrice += 120;
        }
        else if (this.toppings === "top-14") {
            this.pizzaPrice += 150;
        }


        if (this.extra === "xtra") {
            this.pizzaPrice += 80;
        }   
    };

    //business logic

    function Address(address) {
        this.address = address;
        this.deliveryAddress = (address);
    }

    order.prototype.finalCost = function() {
        var cartTotalPrice = [];
        for (var arrayElement = 0; arrayElemnt < totalPriceArray.length; arrayElement++) {
            cartTotalPrice += totalPriceArray[arrayElement];
        }
        return cartTotalPrice;
    };

    $("form#custom-pizza").submit(function(event) {
        event.preventDefault();
        var size = $("checkbox#size").val();
        var crust = $("select#crust").val();
        var toppings = $("checkbox#toppings").val();
        var extra = $("checkbox#extra").val();
        var pizzaDetails = (size + " - " + crust + " - " + toppings + " - " + extra);
        var newPizzaOrder = new Order(size, crust, toppings, extra);
        newPizzaOrder.pizzaCost();
        totalPriceArray.push(newPizzaOrder.pizzaPrice);
        // $("#pizza-details").hide();
        $("#final-cost").text(newPizzaOrder.finalCost());
        $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
        // $("#size, #crust, #toppings,").val("");
      });

      $("#submit-pizza").click(function() {
        $("#deliver").toggle();
      });

      $("#checkout-btn").click(function() {
        $("#order-details").toggle();
      });

      $("form#address-form").submit(function(event) {
        $(".address-form").toggle();
        event.preventDefault();
        var address = $("input#location").val();
        var newAddress = new Address(address);
        $("#delivery-option").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
      });
})