const mouseCursor = document.querySelector('.cursor');
const links = document.querySelectorAll('nav li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  // console.log(mouseCursor)
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });

  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
});
