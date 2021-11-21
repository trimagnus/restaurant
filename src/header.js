export default function makeHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
  <h1>The Restaurant</h1>
  <button id="homeButton">Home</button>
  <button id="menuButton">Menu</button>
  <button id="contactButton">Contact</button>
  `;

  return header;
}