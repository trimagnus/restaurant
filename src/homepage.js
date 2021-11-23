import makeCarousel from "./carousel";

export default function makeHomePage() {
  const home = document.createElement('div');
  let homePageText = '';

  homePageText += `<h2 class="homeHeader">The best food and atmosphere on the planet!</h2>`;

  const imageData = [
    { url: "./img/alexander-schimmeck-6bykmLxy-3Y-unsplash.jpg",
      caption: "A bunch of fresh vegetables.",
      description: "We use seasonal vegetables along with a hand selection of locally sourced meat and fish."},
    { url: "./img/mick-haupt-Spjvmx7MJGs-unsplash.jpg",
      caption: "A brick gateway.",
      description: "Come and enjoy the atmosphere while gazing upon the breathtaking views of the valley."},
    { url: "./img/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg",
      caption: "A smiling woman who is eating.",
      description: "We treat our guests like family here at Restaurant."},
  ];

  home.innerHTML = homePageText;
  home.appendChild(makeCarousel(imageData));
  return home;
}


//We use a variety of fresh seasonal fruits and vegetables as well as locally sourced meats.