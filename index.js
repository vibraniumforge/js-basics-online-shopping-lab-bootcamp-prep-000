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
    } else if (getCart().length >1){
      ans.push(`In your cart, you have`);
      for (let i=0; i< getCart().length-1; i++) {
        ans.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice},`);
      }
        ans.push(`and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}.`)
    } else {
      return "Your shopping cart is empty.";
    }
    return ans.join(" ");
  }


function total() {
  let total=0;
  for (let i=0; i< getCart().length; i++) {
    total+= getCart()[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
