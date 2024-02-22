const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
    fruits.forEach(appendIndex);
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
const nums = [0,10,20,30,40,50];
function app(num) {
    return num > 20;
}
nums.filter(app);
nums.filter( function(num) {
    return num > 10;
})
    nums.map( function(num) {
    return num / 10;
})