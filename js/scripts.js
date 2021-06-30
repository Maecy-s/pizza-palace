$(document).ready(function() {
    $("#order-details").hide();
    $("#deliver").hide();
    // Business Logic
    var totalPriceArray = [];
    function Order(size, crust, toppings, extra, amount) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.extra = extra;
      this.pizzaPrice = 0;
      this.amount = amount;
    }
    Order.prototype.pizzaCost = function() {
      if (this.size === "small-pizza") {
        this.pizzaPrice += 500;
      } else if (this.size === "medium-pizza") {
        this.pizzaPrice += 750;
      } else if (this.size === "large-pizza") {
        this.pizzaPrice += 1000;
      }
      if (this.crust === "stuffed") {
        this.pizzaPrice += 230;
      } else if (this.crust === "thick") {
        this.pizzaPrice += 180;
      } else if (this.crust === "thin") {
        this.pizzaPrice += 100;
      } else if (this.crust === "crispy") {
        this.pizzaPrice += 100;
      }else if (this.crust === "glutten") {
        this.pizzaPrice += 120;
      } else if (this.crust === "custom") {
        this.pizzaPrice += 280;
      }else if (this.crust === "flat") {
        this.pizzaPrice += 150;
      }


      if (this.toppings === "pepperoni") {
        this.pizzaPrice += 100;
      } else if (this.toppings === "sausage") {
        this.pizzaPrice += 100;
      } else if (this.toppings === "bacon") {
        this.pizzaPrice += 200;
      } else if (this.toppings === "mushrooms") {
        this.pizzaPrice += 150;
      } else if (this.toppings === "chicken") {
        this.pizzaPrice += 150;
      }else if (this.toppings === "onions") {
        this.pizzaPrice += 60;
      }else if (this.toppings === "olives") {
        this.pizzaPrice += 250;
      }else if (this.toppings === "pineapple") {
        this.pizzaPrice += 100;
      }else if (this.toppings === "spinach") {
        this.pizzaPrice += 130;
      }else if (this.toppings === "tomato") {
        this.pizzaPrice += 100;
      }else if (this.toppings === "beef") {
        this.pizzaPrice += 120;
      }else if (this.toppings === "ham") {
        this.pizzaPrice += 120;
      }else if (this.toppings === "cheese") {
        this.pizzaPrice += 200;
      }

      if (this.extra === "xtra") {
        this.pizzaPrice += 80;
      }

    };
    //Business logic
    function Address(address) {
      this.address = address;
      this.deliveryAddress = (address);
    }
    Order.prototype.finalCost = function() {
      var cartTotalPrice = [];
      for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
        cartTotalPrice += parseInt(totalPriceArray[arrayElement]);
      }
      return cartTotalPrice;
    };
    $(".btn.check-out").click(function() {
    });
    $("form#custom-pizza").submit(function(event) {
      event.preventDefault();
      var size = $(".size:checked").val();
      var crust = $(".crust:checked").val();
      var toppings = [];
      $(".toppings:checked").each(function(){
        toppings.push($(this).val());
      });
      var extra = [];
       $(".extra:checked").each(function() {
        extra.push($(this).val());
      });
      var pizzaDetails = (size + " - " + crust + " - " + toppings + "-" + extra);
      var newPizzaOrder = new Order(size, crust, toppings, extra);
      newPizzaOrder.pizzaCost();
      totalPriceArray.push(newPizzaOrder.pizzaPrice);
      // $("#pizza-details").hide();
      console.log(size, crust, toppings, extra);
      $("#final-cost").text(newPizzaOrder.finalCost());
      $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
      $("#size, #crust, #toppings, #extra").val("");
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
  });