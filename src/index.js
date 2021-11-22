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
  clearAndSet(e.target);
  main.appendChild(makeHomePage());
};
const menuClicked = (e) => {
  clearAndSet(e.target);
  main.appendChild(makeMenuPage());
};
const contactClicked = (e) => {
  clearAndSet(e.target);
  main.appendChild(makeContactPage());
};

const clearMain = () => {
  while(main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

const setCurrentTab = (target) => {
  for(const node of document.getElementsByClassName('navLink')) {
    node.classList.remove('selectedNav');
  }
  target.classList.add('selectedNav');
};

const clearAndSet = (target) => {
  clearMain();
  setCurrentTab(target);
};

document.querySelector('#homeButton').addEventListener('click', homeClicked);
document.querySelector('#menuButton').addEventListener('click', menuClicked);
document.querySelector('#contactButton').addEventListener('click', contactClicked);
