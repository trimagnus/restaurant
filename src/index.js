import makeHomePage from "./homepage";
import makeMenuPage from "./menu";
import makeContactPage from "./contact";
import makeHeader from "./header";
import makeFooter from "./footer";


const content = document.getElementById('content');
const main = document.createElement('main');

content.appendChild(makeHeader());
content.appendChild(main);
main.appendChild(makeHomePage());
content.appendChild(makeFooter());

const homeClicked = (e) => {
  clearMain();
  main.appendChild(makeHomePage());
};
const menuClicked = (e) => {
  clearMain();
  main.appendChild(makeMenuPage());
};
const contactClicked = (e) => {
  clearMain();
  main.appendChild(makeContactPage());
};

const clearMain = () => {
  while(main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

document.querySelector('#homeButton').addEventListener('click', homeClicked);
document.querySelector('#menuButton').addEventListener('click', menuClicked);
document.querySelector('#contactButton').addEventListener('click', contactClicked);
