const hamburger = document.getElementsByClassName("hamburger")[0];
const navMenu = document.getElementsByClassName("nav-links")[0];

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


let section = document.querySelectorAll("section");
let menu = document.querySelectorAll(".navbar .nav-links a");
let menu2 = document.querySelectorAll(".dot-scrollbar a");
window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar .nav-links a[href*=" + id + "]")
          .classList.add("active");
      });
      menu2.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".dot-scrollbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function sendMail(){
   var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
  }; 

  emailjs.send("service_w0cs0x2","template_yt1t0m8",params);
  alert("Email sent!")
}

function showSlides(n){
  var activeProjectsContainer = document.getElementsByClassName('container active test');
  var projectsContainer = document.getElementById("container"+n);
  var projectDot = document.getElementById("dot"+n);
  var activeDot = document.getElementsByClassName("project-dot active");
  activeDot[0].classList.remove("active");
  projectDot.classList.add("active");
  activeProjectsContainer[0].classList.remove("active")
  projectsContainer.classList.add("active");
}
