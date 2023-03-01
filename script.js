"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//append cookie bannaer in after header element
const sctionSignUp = document.querySelector(".section--sign-up");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'we use cookie for imporve our analytics <button class = "btn btn--close--cookie"> Got it" </button>';
sctionSignUp.after(message);

//delete cookie banner after header section
document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove(); //same for delete message.parentElement.removeChild(message);
  });
//styles attribute and classes
message.style.backgroundColor = "#111111f";
message.style.width = "100%";
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//Change the color property
// document.documentElement.style.setProperty("--color-primary", "violet");

//implementing scrooling 

//add evemt listner to btnScrollTo button

btnScrollTo.addEventListener("click", function (e) {
  const s1Coard = section1.getBoundingClientRect();
  console.log(s1Coard);
  console.log(e.target.getBoundingClientRect());
  //scrooling
  //   window.scrollTo({
  //     left:s1Coard.left +window.pageXOffset,
  //     top:s1Coard.top + window.pageYOffset,
  //     behavior:'smooth',

  //   }

  //   );
  section1.scrollIntoView({ behavior: "smooth" });
});

// page navigation 
// document.querySelectorAll('.nav__link').forEach((el)=>{
//     el.addEventListener('click',(e)=>{
//         e.preventDefault();
//         const id = e.target.getAttribute("href");
//         document.querySelector(id).scrollIntoView({behavior:'smooth'});
//     })
// })

//step 1 add event listner to commor parent element
// step 2 determine what element originated the event
document.querySelector(".nav__links").addEventListener('click',(e)=>{
    e.preventDefault();
    //matching startegy
    if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//event delegation 

// const randomint = (min,max) =>{
//     return Math.floor(Math.random()*(max-min +1)+min);
// }
// let randomColor = ()=>{
//     return `rgb (${randomint(0,255)},${randomint(0,255)},${randomint(0,255)})`;
// }
// const navLink = document .querySelector(".nav__link");
//   navLink.addEventListener("click", function (e) {
//     this.style.backgroundColor = 'red';
//     console.log('link:' +e.target)

//   });
// document.querySelector(".nav__links").addEventListener('click',function(e){
//     this.style.backgroundColor = 'green'
//     console.log('links :'+e.target);
// })
// document.querySelector(".nav").addEventListener('click',function(e){
//     this.style.backgroundColor = 'gray';
//     console.log('nav :' +e.target);
// })