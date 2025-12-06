const screen = document.getElementById('screen');


function AddToScreen(num) {
  const container = document.getElementById('screen-container');

  screen.innerText += num;
  container.scrollLeft = container.scrollWidth;
};

function Reset() {
  screen.innerText = '';
}

function Delete() {
  let text = screen.innerText;
  let del = text.slice(0, text.length - 1);
  screen.innerText = del;
}

function Convert() {
  const text = screen.innerText.split(/(\W)/g);
  const arr = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == '(') {
      console.log(text[i]);
      let s = '';
      while(text[i] != ')') {
        s += text[i];
        i += 1;
      }
      s += text[i];
      arr.push(s);
    } 
  
    if (text[i] != '' && text[i] != ')') {
      arr.push(text[i]);
    }
  }
  console.log(arr);

  if (arr[arr.length - 1].match(/\D/g) && !arr[arr.length - 1].match(/[()]/g)) {
    if (arr[arr.length - 2].match(/[()]/g)) {
       arr[arr.length - 2] = arr[arr.length - 2].match(/\d/g)[0];
    } else {
      arr[arr.length - 2] = `(-${arr[arr.length - 2]})`;
    }
  } else {
    if (arr[arr.length - 1].match(/[()]/g)) {
       arr[arr.length - 1] = arr[arr.length - 1].match(/\d/g)[0];
    } else {
      arr[arr.length - 1] = `(-${arr[arr.length - 1]})`;
    }
  }
  const result = arr.join('');
  screen.innerText = result;
}

function Result() {
  console.log(screen.innerText);
}