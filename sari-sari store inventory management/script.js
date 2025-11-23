const container = document.querySelector('.container');
const done = document.getElementById('done');
const card = document.getElementById('AddCard');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('price');
const demo = document.getElementById('demo');

done.addEventListener('click', CreateItem);

function CreateItem() {
  const link = document.createElement('a');
  link.href = 'productCard.html';
  link.target = '_blank';
  link.id = 'link';
  const product = document.createElement('div'); 
  product.className = 'product';
  const image = document.createElement('div');
  image.id = 'img';
  const itemName = document.createElement('p');
  itemName.id = 'itemName';
  const price = document.createElement('p');

  ProductId(product);
  ProductName(itemName);
  Price(price);

  if (price.innerText === '' || itemName.innerText === '') {
    card.showPopover();
  } else {
    container.append(link);
    link.append(product);
    product.append(image, itemName, price);
    card.hidePopover();
    productName.value = '';
    productPrice.value = '';
  }
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
}

function Price(price) {
  price.innerText = '₱' + productPrice.value;
}