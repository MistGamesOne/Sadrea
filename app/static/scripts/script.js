const header = document.getElementById("header");
const menu = document.getElementById("menu");
const companyInfo = document.getElementById("company-info");
const tournamentsInfo = document.getElementById("tournaments-info");
const tolkingInfo = document.getElementById("tolking-info");
const lecensyInfo = document.getElementById("lecensy-info");

document.getElementById("open-company-info").addEventListener("click", () => {
    header.style.display = "none";
    menu.style.display = "none";
    companyInfo.style.display = "block";
});

document.getElementById("close-company-info").addEventListener("click", () => {
    header.style.display = "block";
    menu.style.display = "block";
    companyInfo.style.display = "none";
});
document.getElementById("open-tournaments-info").addEventListener("click", () => {
    header.style.display = "none";
    menu.style.display = "none";
    companyInfo.style.display = "none";
    tournamentsInfo.style.display = "block";
});
document.getElementById("close-tournaments-info").addEventListener("click", () => {
    header.style.display = "block";
    menu.style.display = "block";
    companyInfo.style.display = "none";
    tournamentsInfo.style.display = "none";
});
document.getElementById("open-tolking-info").addEventListener("click", () => {
    header.style.display = "none";
    menu.style.display = "none";
    companyInfo.style.display = "none";
    tournamentsInfo.style.display = "none";
    tolkingInfo.style.display = "block";
});

document.getElementById("close-tolking-info").addEventListener("click", () => {
    header.style.display = "block";
    menu.style.display = "block";
    companyInfo.style.display = "none";
    tournamentsInfo.style.display = "none";
    tolkingInfo.style.display = "none";
});
document.getElementById("open-lecensy-info").addEventListener("click", () => {
    header.style.display = "none";
    menu.style.display = "none";
    companyInfo.style.display = "none";
    tournamentsInfo.style.display = "none";
    tolkingInfo.style.display = "none";
    lecensyInfo.style.display = "block";
});
document.getElementById("close-lecensy-info").addEventListener("click", () => {
    header.style.display = "block";
    menu.style.display = "block";
    companyInfo.style.display = "none";
    tournamentsInfo.style.display = "none";
    tolkingInfo.style.display = "none";
    lecensyInfo.style.display = "none";
});