import { getProducts } from '../JS/delete.js';

const submit = document.getElementById('submit');
const added = document.getElementById('addType');
const form = document.getElementById('form');

async function addProduct(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const type = document.getElementById('type').value;
  const price = document.getElementById('price').value;
  const amount = document.getElementById('amount').value + document.getElementById('amount-type').value;

  try {
    const response = await fetch('http://localhost:8080/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, type, price, amount})
    });

    const data = await response.json();
    alert(data.message);

    getProducts();
    form.reset();
  } catch (error) {
    console.log(error);
  }
}

function addType() {
  const type = document.getElementById('type');
  const addType = document.getElementById('add-type');
  const input = addType.value;
  const option = document.createElement('option');
  option.value = input;
  option.innerText = input;
  type.append(option);
  addType.value = '';
}

submit.addEventListener('click', addProduct);
added.addEventListener('click', addType);