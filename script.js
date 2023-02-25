"use strict"

// Get Elements
const modalBtn = document.getElementById("showmodal");
const tbody = document.getElementById("tbody");
const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const date = document.getElementById("date")
const mobileNum = document.getElementById("mobile-number");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const addBtn = document.getElementById("add-btn")

let obj = {};



// Modal
function showModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex")
    overlay.classList.remove("hidden");
}
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    console.log(e);
}
modalBtn.addEventListener("click", showModal)
overlay.addEventListener("click", closeModal)
