// ITERATION 1: SUBTOTAL
//Añadir un evento al boton calculate prices
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });
}

// ITERATION 2: CALCULATE ALL

// function calculateAll() {
//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.
//   let singleProduct = document.querySelector('.product');
//   updateSubtotal(singleProduct);
//   // end of test

//
//   //capturar los elementos del DOM
//   let price = document.querySelector('.price span').innerText;
//   console.log(price);

//   let quantity = document.querySelector('.quantity input').value;
//   console.log(quantity);

//
//   //calculo de subtotal
//   // let subtotal = (document.querySelector('.subtotal span').textContent =
//   //   price * quantity);
//   // console.log(subtotal);

//   const productSubtotal = price * quantity;
//   let subtotal = (document.querySelector('.subtotal span').innerText =
//     productSubtotal.toFixed(2));
//   return productSubtotal;
// }
// calculateAll();
// function updateSubtotal() {
//   const price = Number(document.querySelector('.price span').innerText);
//   const quantity = document.querySelector('.quantity input').value;
//   const subtotal = price * quantity;
//   document.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
//   return subtotal;
// }

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  let total = 0;
  const products = document.querySelector('.product');
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  const totalPlace = document.querySelector('#total-value span');
  totalPlace.innerText = total.toFixed(2);
}
// ITERATION 3: TOTAL

// ITERATION 4: REMOVE PRODUCT

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5: CREATE PRODUCT

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
