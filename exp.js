let array = ['item-1'];

console.log(array);

function Id(array, name) {
  let id = 1;
  let result;
  if (array == 0) {
   result = name + '-' + id;
  } else {
   result = name + '-' + (array.length + id);
  }

  return array.push(result);
};
Id(array, 'item');
console.log(array);