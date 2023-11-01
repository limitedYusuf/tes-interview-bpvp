const itemPrice = 165000;
const discount = 0.15;
const payment = 150000;
const discountedPrice = itemPrice - itemPrice * discount;
const change = payment - discountedPrice;
console.log(change);
