const container = document.querySelector('.container');
const done = document.getElementById('done');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('price');

done.addEventListener('click', CreateItem);

function CreateItem() {
  const product = document.createElement('div'); 
  product.className = 'product';
  const image = document.createElement('div');
  image.id = 'img';
  const itemName = document.createElement('p');
  const price = document.createElement('p');

  ProductId(product);
  ProductName(itemName);
  Price(price);

  container.append(product);
  product.append(image, itemName, price);
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

function ProductName(name) {
  name.innerText = productName.value;
  productName.value = '';
}

function Price(price) {
  price.innerText = productPrice.value;
  productPrice.value = '';
}