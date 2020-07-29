const navToggle = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll('.nav__link');


navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});


navLink.forEach((nav)=>{
    nav.addEventListener('click', ()=>{
        document.body.classList.toggle("nav-open")
    })
   
})
