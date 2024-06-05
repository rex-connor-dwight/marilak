const navBar = document.getElementById("navDropdown");
const header = document.getElementById("header");
const navHome = document.getElementById("navHome");

function openNav(){
    navBar.style.display = "flex"
    header.style.display = "none"
}

function closeNavToHome(){
    navBar.style.display = "none"
    header.style.display = "flex"
}