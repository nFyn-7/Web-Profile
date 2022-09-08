// popup

function popupToggle() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

window.onscroll = function () {
  myFunction();
};

// navbar

let navbar = document.getElementById("navbar");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("navbar").offsetHeight;

let navbarLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", (e) => {
  scrollpos = window.scrollY;
  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= scrollpos + 150 &&
      section.offsetTop + section.offsetHeight > scrollpos + 150
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Scroll

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.content',{delay:200, origin:'left'})
sr.reveal('.main,.title,.box,.gallery-image,.crd,.contact-me h3,.button-two',{delay:150, origin:'bottom'})

// Typing list

var typed = new Typed(".typing",{
  strings:["A Gamer","A Weebs","Not Yours :(","Wanna be Yours :)"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true 
})
