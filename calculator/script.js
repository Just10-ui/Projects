const screen = document.getElementById('screen');

function AddToScreen(num) {
  screen.innerText += num;
};

function Reset() {
  screen.innerText = '';
}

function Delete() {
  let text = screen.innerText;
  let del = text.slice(0, text.length - 1);
  screen.innerText = del;
}