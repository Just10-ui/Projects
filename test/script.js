const filter = document.getElementById('filter');
const num = document.getElementById('num');
const add = document.getElementById('add');

const addNumber = () => {
  const option = document.createElement('option');
  option.value = String(num.value).toLowerCase();
  option.innerText = num.value;

  filter.append(option);
  num.value = '';
};

add.addEventListener('click', addNumber);