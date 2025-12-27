const form = document.getElementById('addProducts');
const menu = document.getElementById('menu');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', () => {
  menu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
});

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const productName = document.getElementById('name').value;
  const productPrice = document.getElementById('price').value;

  try {
    const response = await fetch('http://localhost:8080/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productName, productPrice })
    });

    const result = await response.json();
    alert(result.message);
    showProducts();
  } catch (error) {
    alert(error);
  }

  form.reset();
});

async function showProducts() {
  try {
    const response = await fetch('http://localhost:8080/products');
    const products = await response.json();
    const list = document.querySelector('.listItems');
    list.innerHTML = '';

    products.forEach(items => {
      const p = document.createElement('p');
      p.innerText = `name: ${items.product_name} - price: $${items.product_price}`;
      list.append(p);
    });
  } catch (error) {
    alert(error);
  }
};
showProducts();