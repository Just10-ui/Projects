const screen = document.getElementById('screen');

document.addEventListener('keydown', function(event) {
  if (event.key === '1') {
    document.getElementById('one').click();
  } else if (event.key === '2') {
    document.getElementById('two').click();
  } else if (event.key === '3') {
    document.getElementById('three').click();
  } else if (event.key === '4') {
    document.getElementById('four').click();
  } else if (event.key === '5') {
    document.getElementById('five').click();
  } else if (event.key === '6') {
    document.getElementById('six').click();
  } else if (event.key === '7') {
    document.getElementById('seven').click();
  } else if (event.key === '8') {
    document.getElementById('eight').click();
  } else if (event.key === '9') {
    document.getElementById('nine').click();
  } else if (event.key === '0') {
    document.getElementById('zero').click();
  } else if (event.key === '-') {
    document.getElementById('minus').click();
  } else if (event.key === '=' || event.key === '+') {
    document.getElementById('add').click();
  } else if (event.key === 'x' || event.key === '*') {
    document.getElementById('times').click();
  } else if (event.key === '/') {
    document.getElementById('divide').click();
  } else if (event.key === 'Delete') {
    document.getElementById('del').click();
  } else if (event.key === 'Backspace') {
    document.getElementById('back').click();
  } else if (event.key === '.') {
    document.getElementById('point').click();
  } else if (event.key === 'Shift') {
    document.getElementById('conv').click();
  } else if (event.key === 'Enter') {
    document.getElementById('equal').click();
  }
});

function AddToScreen(num) {
  const container = document.getElementById('screen-container');
  const text = screen.innerText.split(/(\W)/g);
  const arr = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == '(') {
      console.log(text[i]);
      let s = '';
      while (text[i] != ')') {
        s += text[i];
        i += 1;
      }
      s += text[i];
      arr.push(s);
    }

    if (text[i].match(/[x]/g)) {
      const temp = text[i].split('');
      temp.forEach(a => {
        arr.push(a);
      });
    } else if (text[i] != '' && text[i] != ')') {
      arr.push(text[i]);
    }
  }

  if (arr[arr.length - 1] == '.' && num == '.') {
    console.log('true');
    screen.innerText;
  } else {
    const operator = num == '+' || num == '÷' || num == 'x' || num == '-';

  if (operator && arr[arr.length - 1].match(/[+x÷-]/g) && !arr[arr.length - 1].match(/[()]/g)) {
    arr[arr.length - 1] = num;
    screen.innerText = arr.join('');
  } else {
    screen.innerText += num;
  }
  container.scrollLeft = container.scrollWidth;
  }
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

  console.log(text);

  for (let i = 0; i < text.length; i++) {
    if (text[i] == '(') {
      console.log(text[i]);
      let s = '';
      while (text[i] != ')') {
        s += text[i];
        i += 1;
      }
      s += text[i];
      arr.push(s);
    }

    if (text[i + 1] == '.' && text[i + 2].match(/[x]/g)) {
        text[i] = `${text[i]}.${text[i + 2]}`;
        const temp = text[i].split('x');
        temp.forEach((a, i) => {
        if (i == 0) {
          arr.push(a);
          arr.push('x');
        } else {
          arr.push(a);
        }
      });
      i += 2;
    } else if (text[i + 1] == '.') {
      text[i] = `${text[i]}.${text[i + 2]}`;
      arr.push(text[i]);
      i += 2;
    } else if (text[i].match(/[x]/g)) {
      const temp = text[i].split('');
      temp.forEach(a => {
        arr.push(a);
      });
    } else if (text[i] != '' && text[i] != ')') {
      arr.push(text[i]);
    }
  }
  console.log(arr);

  if (arr[arr.length - 1] == '%') {
    screen.innerText = arr.join('');
  } else if (arr[arr.length - 1].match(/[+-x÷]/g) && !arr[arr.length - 1].match(/[()]/g) && !arr[arr.length - 1].match('.')) {

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
  const screen = document.getElementById('screen');
  const text = screen.innerText.split(/(\W)/g);
  const arr = [];

  console.log(text);

  for (let i = 0; i < text.length; i++) {
    if (text[i] == '(') {
      console.log(text[i]);
      let s = '';
      while (text[i] != ')') {
        s += text[i];
        i += 1;
      }
      s += text[i];
      arr.push(s);
    }

    if (text[i + 1] == '.' && text[i + 2].match(/[x]/g)) {
        text[i] = `${text[i]}.${text[i + 2]}`;
        const temp = text[i].split('x');
        temp.forEach((a, i) => {
        if (i == 0) {
          arr.push(a);
          arr.push('x');
        } else {
          arr.push(a);
        }
      });
      i += 2;
    } else if (text[i + 1] == '.') {
      text[i] = `${text[i]}.${text[i + 2]}`;
      arr.push(text[i]);
      i += 2;
    } else if (text[i].match(/[x]/g)) {
      const temp = text[i].split('');
      temp.forEach(a => {
        arr.push(a);
      });
    } else if (text[i] != '' && text[i] != ')') {
      arr.push(text[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '%') {
      arr[i - 1] = `${arr[i - 1]}%`
      arr.splice(i, 1);
    }
  }

  if (arr[arr.length - 1].match(/[+÷x-]/g)) {
    screen.innerText = arr.join('');
  }

  if (arr.length == 1) {
    screen.innerText;
  } else {
    let r = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].match(/[()]/g)) {
        let num = +arr[i].match(/\d/g).join('');
        arr[i] = -num
      } else if (arr[i].match('.') && arr[i].match(/[%]/g)) {
        let num = arr[i].split('.');
        num[num.length - 1] = num[num.length - 1].match(/\d/g).join('');
        let result = num.join('.');
        arr[i] = result / 100;
      } else if (arr[i].match(/[%]/g)) {
        let num = +arr[i].match(/\d/g);
        console.log(num);
        num /= 100;
        arr[i] = num;
      }
    }

    for (let i = 0; i < arr.length; i += 2) {

      if (i == 0) {
        if (arr[i + 1] == '+') {
          r = +arr[i] + +arr[i + 2];
          i += 2;
        } else if (arr[i + 1] == '-') {
          r = +arr[i] - +arr[i + 2];
          i += 2;
        } else if (arr[i + 1] == 'x') {
          r = 1;
          r = +arr[i] * +arr[i + 2];
          i += 2;
        } else if (arr[i + 1] == '÷') {
          r = +arr[i] / +arr[i + 2];
          i += 2;
        }
      } else {
        if (arr[i - 1] == '+') {
          r += +arr[i];
        } else if (arr[i - 1] == '-') {
          r -= +arr[i];
        } else if (arr[i - 1] == '÷') {
          r /= +arr[i];
        } else if (arr[i - 1] == 'x') {
          r *= +arr[i];
        }
      }
    }
    screen.innerText = r.toString().slice(0, 15);
  }
}