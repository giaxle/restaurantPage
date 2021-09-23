import { home } from './modules/home';
import { menu } from './modules/menu';
import { contact } from './modules/contact';
import chicken from './chicken.jpg';
import './style.css';

(function mainPage() {
    // create title
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    header.classList.add('banner');
    const title = document.createElement('h1');
    title.textContent = "Jackie's Taiwanese Chicken and Boba";
    header.appendChild(title);
    content.appendChild(header);
    content.appendChild(document.createElement('hr'));

    // create navbar and nav buttons
    const navbar = document.createElement('nav');
    content.appendChild(navbar);
    const homebtn = document.createElement('button');
    homebtn.classList.add('navbtn')
    homebtn.textContent = "Home";
    const menubtn = document.createElement('button');
    menubtn.classList.add('navbtn');
    menubtn.textContent = 'Menu';
    const contactbtn = document.createElement('button');
    contactbtn.classList.add('navbtn');
    contactbtn.textContent = "Contact";
    navbar.appendChild(homebtn);
    navbar.appendChild(menubtn);
    navbar.appendChild(contactbtn);
    content.appendChild(document.createElement('hr'));

    // div to display each module info 
    const displayMod = document.createElement('div');
    displayMod.setAttribute('id', 'displayMod');
    content.appendChild(displayMod);

    // calls home function to render home page as default page on load
    home();

    // addEventListener to buttons

    homebtn.onclick = function () {
        // console.log('it works!');
        displayMod.removeChild(displayMod.firstChild);
        home();
    }

    menubtn.onclick = function () {
        // console.log("it works");
        displayMod.removeChild(displayMod.firstChild);
        menu();
    }

    contactbtn.onclick = function () {
        // console.log("it works");
        displayMod.removeChild(displayMod.firstChild);
        contact();
    }

})();
