const demo = document.getElementById('demo');
const clear = document.getElementById('clear');

const display = (num) => {
  let screen = demo.innerText;

  if(num == screen && num == 0) {
    demo.innerText = 0;
  } else if (screen.length == 1 && screen == '0' && num != '.') {
    demo.innerText = num;
  } else {
    demo.innerText += num;
  }
};

clear.addEventListener('click', () => {
  const pattern = /[\+\-\/\*]/g;
  const number = demo.innerText.split(pattern);
  const operator = demo.innerText.match(pattern);
  console.log(number);
  console.log(operator);
});