"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");

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
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'we use cookie for imporve our analytics <button class = "btn btn--close--cookie"> Got it" </button>';
header.after(message);

//delete cookie banner after header section
document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove(); //same for delete message.parentElement.removeChild(message);
  });
//styles attribute and classes
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//Change the color property
document.documentElement.style.setProperty("--color-primary", "violet");
