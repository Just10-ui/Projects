const nav = document.querySelectorAll('.nav');

nav.forEach(items => {
  items.addEventListener('click', Active);
})

function Active(event) {
  nav.forEach(items => {
    items.classList.remove('active');
  })
  event.currentTarget.classList.add('active');
}