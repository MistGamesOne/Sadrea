const header = document.getElementById("header");
const menu = document.getElementById("menu");
const companyInfo = document.getElementById("company-info");

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