"use strict"

// Get Elements
const modalBtn = document.getElementById("showmodal");
const tbody = document.getElementById("tbody");
const body = document.getElementById("body");
const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const date = document.getElementById("date")
const mobileNum = document.getElementById("mobile-number");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const addBtn = document.getElementById("add-btn");
console.log(addBtn);
const maleRadio = document.getElementById("male-radio");
const femaleRadio = document.getElementById("female-radio")


let selectedGender;
let obj = {};

function renderList(e) {
    console.log(e);
    e.preventDefault();
    let id = 1;
    if (maleRadio.checked) {
        selectedGender = "male";
    } else if (femaleRadio.checked) {
        selectedGender = "female";
    }
    let newTr = `<tr>
        <td class="border border-slate-500 px-6 py-3">${id}</td>
        <td class="border border-slate-500 px-6">${firstName.value}</td>
        <td class="border border-slate-500 px-6">${lastName.value}</td>
        <td class="border border-slate-500 px-6">${selectedGender}</td>
        <td class="border border-slate-500 px-6">${email.value}</td>
        <td class="border border-slate-500 px-6">${mobileNum.value}</td>
        <td class="border border-slate-500 px-6">img</td>
        <td class="border border-slate-500 px-6">
        <img src="/assets/img/Edit.svg" alt="" class="inline" id="edit">
        <img src="/assets/img/Delete.svg" alt="" class="inline" id="delete">
    </td>
    </tr>
    `
    tbody.innerHTML = newTr;
    closeModal();
    id++
}
form.addEventListener("submit", renderList)

// Modal
function showModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex")
    overlay.classList.remove("hidden");
}
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
modalBtn.addEventListener("click", showModal)
overlay.addEventListener("click", closeModal)
