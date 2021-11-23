export default function makeHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
  <h1>Restaurant</h1>
  <nav>
    <div id="homeButton"><a class="navLink selectedNav" href="#">Home</a></div>
    <div id="menuButton"><a class="navLink" href="#">Menu</a></div>
    <div id="contactButton"><a class="navLink" href="#">Contact</a></div>
  </nav>
  `;

  return header;
}