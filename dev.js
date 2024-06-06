const navBar = document.getElementById("navDropdown");
const header = document.getElementById("header");
const hero = document.getElementById("hero");
const homeAbout = document.getElementById("homeAbout");
const expertise = document.getElementById("expertise");
const mission = document.getElementById("mission");
const deliver = document.getElementById("deliver");
const footer = document.getElementById("footer");
const AboutMain = document.getElementById("AboutMain");
const ArticleMain = document.getElementById("ArticleMain");
const ServicesMain = document.getElementById("ServicesMain");
const contactMain = document.getElementById("contactMain");
const navHome = document.getElementById("navHome");

function openNav(){
    navBar.style.display = "flex"
    header.style.display = "none"
    hero.style.display = "none"
    homeAbout.style.display = "none"
    expertise.style.display = "none"
    mission.style.display = "none"
    deliver.style.display = "none"
    footer.style.display = "none"
    AboutMain.style.display = "none"
    ServicesMain.style.display = "none"
    ServicesMain.style.display = "none"
    contactMain.style.display = "none"
    navHome.style.display = "none"
}

function closeNavToHome(){
    navBar.style.display = "none"
    header.style.display = "flex"
    hero.style.display = "flex"
    homeAbout.style.display = "flex"
    expertise.style.display = "block"
    mission.style.display = "flex"
    deliver.style.display = "block"
    footer.style.display = "block"
    AboutMain.style.display = "flex"
    ServicesMain.style.display = "flex"
    ServicesMain.style.display = "flex"
    contactMain.style.display = "flex"
    navHome.style.display = "flex"
}