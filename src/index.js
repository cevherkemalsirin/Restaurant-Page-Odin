import "./styles.css";

import {LoadHomePage} from "./home.js";
import {LoadContactPage} from "./Contact.js";

const homeButton = document.getElementById("HomeButton");
const menuButton = document.getElementById("MenuButton");
const contactButton = document.getElementById("ContactButton");

if(homeButton) {
    homeButton.addEventListener("click", LoadHomePage);
}

if(contactButton) {
    contactButton.addEventListener("click", LoadContactPage);
}

if(menuButton) {
    menuButton.addEventListener("click", ()=>alert("Menu has not been finished")); 
}
LoadHomePage();