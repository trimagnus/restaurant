import makeCarousel from "./carousel";

export default function makeHomePage() {
  const home = document.createElement('div');
  let homePageText = '';

  homePageText += `<h2>The best food and atmosphere on the planet!`;

  const imageData = [
    { url: "./img/alexander-schimmeck-6bykmLxy-3Y-unsplash.jpg",
      caption: "A caption",
      description: "A description"},
    { url: "./img/mick-haupt-Spjvmx7MJGs-unsplash.jpg",
      caption: "A caption",
      description: "A description"},
    { url: "./img/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg",
      caption: "A caption",
      description: "A description"},
  ];


  // homePageText += `<div class="homePictureSpread">
  //   <div class="pictureCard">
  //     <img width="250" height="200" src="./img/alexander-schimmeck-6bykmLxy-3Y-unsplash.jpg">
  //     <p>Caption for img</p>
  //   </div>
  //   <div class="pictureCard">
  //     <img width="250" height="200" src="./img/mick-haupt-Spjvmx7MJGs-unsplash.jpg">
  //     <p>Caption for img</p>
  //   </div>
  //   <div class="pictureCard">
  //     <img width="250" height="200" src="./img/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg">
  //     <p>Caption for img</p>
  //   </div>
  // </div>`;

  home.innerHTML = homePageText;
  home.appendChild(makeCarousel(imageData));
  return home;
}


//We use a variety of fresh seasonal fruits and vegetables as well as locally sourced meats.