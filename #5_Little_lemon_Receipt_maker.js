// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolen) {
   for( menu of dishData)  {
        //console.log(menu) This is for testing code
       let finalPrice;
        if(taxBoolen==true){
           finalPrice = menu.price*tax;
       } else if (taxBoolen==false){
              finalPrice = menu.price;}
         else {
            console.log("You need to pass a boolean to the getPrices call!")
            return;
       }
       console.log(`Dish: ${menu.name} Price: $${finalPrice}`)
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests == 'number' && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else  {
            discount = 10;
        }
        console.log('Discount is: $' + discount);

    } else {
        console.log('The second argument must be a number between 0 and 30')
    }
}

// Call getDiscount()
getDiscount(false,10)
getDiscount(true,2)