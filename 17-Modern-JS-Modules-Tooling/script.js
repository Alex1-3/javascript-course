// //Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // console.log(shippingCost);
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShopingCart from './shoppingCart.js';
// ShopingCart.addToCart('bread', 5);
// console.log(ShopingCart.totalPrice);

import add from './shoppingCart.js';
import { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 4);
console.log(cart);
/*
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart`);
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from suplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
shoppingCart2.addToCart('apples', 4);
shoppingCart2.addToCart('pizza', 4);
console.log(shoppingCart2);
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'bread', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const copyState = cloneDeep(state);
// copyState.user.loggedIn = false;
console.log(copyState);
console.log(state);

if (module.hot) {
  module.hot.accept();
}
