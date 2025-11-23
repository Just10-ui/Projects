const container = document.querySelector('.container');
const add = document.getElementById('add');

add.addEventListener('click', CreateItem);

function CreateItem() {
  const product = document.createElement('div'); 
  product.className = 'product';
  const image = document.createElement('div');
  image.id = 'img';
  const productName = document.createElement('p');
  productName.innerText = 'Product Name';
  const price = document.createElement('p');
  price.innerText = 'Price';

  ProductId(product);

  container.append(product);
  product.append(image, productName, price);
};

function ProductId(product) {
  const productLength = document.querySelectorAll('.product');
  const id = 1;

  if (productLength.length === 0) {
    return product.id = 'product-' + id;
  } else {
    return product.id = 'product-' + (productLength.length + id);
  }
}