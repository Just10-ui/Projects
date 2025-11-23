const container = document.querySelector('.container');
const add = document.getElementById('add');

add.addEventListener('click', CreateItem);

function CreateItem() {
  let product = document.createElement('div'); 
  product.className = 'product';
  let image = document.createElement('div');
  image.id = 'img';
  let productName = document.createElement('p');
  productName.innerText = 'Product Name';
  let price = document.createElement('p');
  price.innerText = 'Price';

  container.append(product);
  product.append(image, productName, price);
}