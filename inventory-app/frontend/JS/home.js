const menu = document.getElementById('menu');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', () => {
  menu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
});

async function showProducts() {
  try {
    const response = await fetch('http://localhost:8080/products');
    const products = await response.json();
    const list = document.querySelector('.listItems');

    products.forEach(items => {
      const image = document.createElement('div');
      image.className = 'image';
      const card = document.createElement('div');
      card.className = 'product-card';
      const productName = document.createElement('h5');
      const productPrice = document.createElement('h5');
      productName.innerText = `${items.product_name}`;
      productPrice.innerText = `$${items.product_price}`;
      card.append(image, productName, productPrice);
      list.append(card);
    });
  } catch (error) {
    alert(error);
  }
};
showProducts();