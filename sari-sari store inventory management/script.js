const container = document.querySelector('.container');
const done = document.getElementById('done');
const card = document.getElementById('AddCard');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('price');
const edit = document.getElementById('edit');

done.addEventListener('click', CreateItem);
edit.addEventListener('click', Editable);

function CreateItem() {
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
    container.append(product);
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

function Editable() {
  const items = document.querySelectorAll('p');

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('contenteditable', 'true');
  }
}