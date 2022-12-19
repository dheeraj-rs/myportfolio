// ****resize auto working***
var sidebar = document.getElementById("sidebar");
const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const isSmall = entry.contentRect.width < 699;
    sidebar.style.display = isSmall ? "none" : "block";
    sidebar.style.left = isSmall ? "0" : "0";
    closebar.style.display = "none";
    openbar.style.display = "block";
  });
});
observer.observe(document.getElementById("body"));

// ************************navbar open & close***
let sidebars = document.getElementById("sidebar");
let openbar = document.getElementById("open-bar");
let closebar = document.getElementById("close-bar");

function openmenu() {
  sidebars.style.left = "0";
  sidebars.style.display = "block";
  openbar.style.display = "none";
  closebar.style.display = "block";
}
function closemenu() {
  sidebars.style.left = "-500px";
  openbar.style.display = "block";
  closebar.style.display = "none";
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//  ++++++++++++++++++++++++++++++++ scroll to top +++

let mybutton = document.getElementById("scroll-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ***+++++++++++++++++++++++++++++typing Animation***
var typed = new Typed(".typing", {
  strings: ["Developer", "Designer"],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true,
});

//         // ***about****

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// +++++++++++++++++++++++++++++++ online +++
const scriptURL =
  "https://script.google.com/macros/s/AKfycbywn7Zw1QwS1cvmY56O0r8euj0RJkYD5ddHySRfGT6Jx7XjmX5E0O1Y0xLKDxuM4GGl/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// ---------------------- moving button ---

var a = 0;

function mouseOver() {
  const name = document.forms["suForm"]["name"].value;
  const email = document.forms["suForm"]["email"].value;
  const txtmsg = document.forms["suForm"]["txtmsg"].value;

  // const pass = document.forms['suForm']['pass'].value;
  // const tick = document.querySelector('#check');

  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if ((name == "" || !email.match(emailCheck) || txtmsg == "") && a == 0) {
    buttonMoveLeft();
    a = 1;
    return false;
  }

  if ((name == "" || !email.match(emailCheck) || txtmsg == "") && a == 1) {
    buttonMoveRight();
    a = 2;
    return false;
  }

  if ((name == "" || !email.match(emailCheck) || txtmsg == "") && a == 2) {
    buttonMoveLeft();
    a = 1;
    return false;
  } else {
    // document.getElementById('submit-btn').click();
    document.getElementById("submit-btn").style.cursor = "pointer";
    return false;
  }
}

function buttonMoveLeft() {
  const button = document.getElementById("submit-btn");
  button.style.transform = "translateX(-160%)";
}

function buttonMoveRight() {
  const button = document.getElementById("submit-btn");
  button.style.transform = "translateX(0%)";
}

function resetBtn() {
  const button = document.getElementById("submit-btn");
  button.style.transform = "translateX(0%)";
}

// // <!-- ***click hide navbar*** -->

var sidebar = document.getElementById("sidebar");

function dblclick() {
  // console.log("hai")
  setTimeout(function () {
    sidebar.style.left = "-330px";
    closebar.style.display = "none";
    openbar.style.display = "block";
  }, 100);
}

function oneclick() {
  sidebar.style.left = "0";
}

// <!-- ***********************Sidebar open & close time*** -->
// var sidebar = document.getElementById("sidebar");
//         if (screen.width >= 699) {
//             sidebar.style.left = "0";
//                     sidebar.style.display = "block";
//                     setTimeout(function () {
//                         sidebar.style.left = "-330px";

//                     }, 5000);

//         }

// +++++++++++++++++++++++++++++ hover time run++++++++

// $(document).ready(function () {
//     $("#leftside").hover(function () {

//     });
// });
