//Navbar - MOBILE

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

//SCROLL Animation
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true){
            entry.target.classList.add('show');
        }

        else{
            entry.target.classList.remove('show');
        }
    });

});

const elements = document.querySelectorAll('.hidden, .hidden_right, .hidden_left');

elements.forEach((element) => myObserver.observe(element));
