// common patterns for us
// dont mutate the original array
// use map, filter, reduce, spread operator
// use the callback function


const shoppingCart = [
  {id: 1, product: "Pancake", price : 200},
  {id: 2, product: "Egg", price : 10},
  {id: 3, product: "Bread", price : 50},
];

// adding in array
[...shoppingCart, {id: 4, product: "Milk", price: 20}];

// removing from array
shoppingCart.filter((item) => item.id !== 2);

//update all elements in array
shoppingCart.map((item) =>{
  return {
    ...item,
    product : item.product.toLowerCase()
  };
});

// update one element in array
shoppingCart.map((item) => {
  if(item.id == 2) return {...item, price: 15};
  else return item;
});