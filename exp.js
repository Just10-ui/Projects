const names = document.getElementById('name');
const add = document.getElementById('add');

add.addEventListener('click', create);

function create() {
  const para = document.createElement('p');
  para.innerText = names.value;

  document.body.append(para);
}