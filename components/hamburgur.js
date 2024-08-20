const hamMunu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");


hamMunu.addEventListener('click',()=>{
  hamMunu.classList.toggle('active');
  offScreenMenu.classList.toggle("active")
})
