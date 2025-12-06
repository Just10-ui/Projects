const str = '2+';
const r = str.split(/(\W)/g);
const arr = []

console.log(Boolean(str.match(/\D/g)));
console.log(r);

for (let i = 0; i < r.length; i++) {
  if (r[i] == '(') {
    console.log(r[i]);
    let s = '';
    while(r[i] != ')') {
      s += r[i];
      i += 1;
    }
    s += r[i];
    arr.push(s);
  } 

  if (r[i] != '' && r[i] != ')') {
    arr.push(r[i]);
  }
}
const arrs = arr.join('');

console.log(arrs);
console.log(arr);
console.log(Boolean(arr[arr.length - 1].match(/\D/g) && !arr[arr.length - 1].match(/[()]/g)));