const add = document.getElementById('add');
const popUp = document.getElementById('pop-up');
const overlay = document.querySelector('.overlay');
const done = document.getElementById('done');
const cancel = document.getElementById('cancel');
const container = document.querySelector('.container');
const task = document.getElementById('task');

function AddTask () {
  const para = document.createElement('p');
  const hr = document.createElement('hr');
  const label = document.createElement('label');
  label.setAttribute('for', 'task-box');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'task-box';
  checkbox.id = 'task-box';
  let newTask = task.value;
  para.innerText = newTask;
  label.append(checkbox, para);
  container.append(label, hr);
  newTask = task.defaultValue;
  CancelTask();
}

function AddPop () {
  popUp.style.opacity = 1;
  overlay.style.opacity = 1;
  popUp.style.pointerEvents = 'auto';
}

function CancelTask () {
  popUp.style.opacity = 0;
  overlay.style.opacity = 0;
  popUp.style.pointerEvents = 'none';
}

add.addEventListener('click', AddPop);
cancel.addEventListener('click', CancelTask);
done.addEventListener('click', AddTask);



/*
Problem 1:
it adds task but only add 1 task;

Problem 2:
the input does not return empty after entering a new task
*/

