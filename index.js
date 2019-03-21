var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newItem = {
   "itemName": item,
   "itemPrice": Math.floor(Math.random()*100)
 }
 getCart().push(newItem);
 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  let ans = [];
  if (getCart().length===1) {
    for (let i=0; i< getCart().length; i++) {
      ans.push(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`);
      }
      return ans.join(" ");
    } else if (getCart().length >1){
        ans.push(`In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`);
    } else {
      return "Your shopping cart is empty.";
    }
  }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
