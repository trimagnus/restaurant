export default function makeFooter() {
  const footer = document.createElement('footer');
  const ghImgSrc = "./img/GitHub-Mark-Light-64px.png";
  footer.innerHTML = `<p>&copy 2021 Joshua Cahoon</p>`;
  footer.innerHTML += `<a href="https://github.com/trimagnus"><img width="20px" height="20px" class="ghIcon" src="${ghImgSrc}"></img></a>`
  return footer;
}