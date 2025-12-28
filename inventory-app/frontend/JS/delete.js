export async function getProducts() {
  try {
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json();
    console.log(data);

    const list = document.querySelector('.listItems');
    list.innerHTML = '';

    data.forEach(value => {
      const container = document.createElement('div');
      container.className = 'card';
      const itemName = document.createElement('p');
      itemName.innerText = value.name;
      const itemType = document.createElement('p');
      itemType.innerText = value.type;
      const itemPrice = document.createElement('p');
      itemPrice.innerText = value.price;
      const itemAmount = document.createElement('p');
      itemAmount.innerText = value.amount;
      const itemId = document.createElement('button');
      itemId.id = value.id;
      itemId.className = 'delete-btn';
      itemId.innerText = 'Delete';

      itemId.addEventListener('click', () => deleteProduct(value.id));

      container.append(itemName, itemType, itemPrice, itemAmount, itemId);
      list.append(container);
    });
  } catch (error) {
    console.log(error);
  }
};
getProducts();

async function deleteProduct(productId) {
  try {
    const response = await fetch(`http://localhost:8080/products/${productId}`, { method: 'DELETE'});
    const data = await response.json();
    alert(data.deleted);
    getProducts();
  } catch (error) {
    console.log(error);
  }
};