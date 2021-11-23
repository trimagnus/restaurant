const template = `
<div class="carousel">
  <nav>
    <div class="carouselArrow carouselLeftArrow">&larr;</div>
    <div class="carouselIndicators"></div>
    <div class="carouselArrow carouselRightArrow">&#8594;</div>
  </nav>
  <img class="carouselImage">
  <p class="carouselDescription">
</div>
`;

const FILLED_CIRCLE = '&#9673;';
const EMPTY_CIRCLE = '&#9678;';

//Data format
//[ {url,caption,description} ]
export default function makeCarousel(data) {
  const sleepTime = 5000;
  const MAX_FRAME = data.length-1;
  let currentFrame = 0;
  let looping = true;

  const forwardFrame = () => {
    moveFrame(1);
    looping = false;
  };

  const backFrame = () => {
    moveFrame(-1);
    looping = false;
  };

  const moveFrame = (i) => {
    currentFrame += i;
    if(currentFrame > MAX_FRAME) {
      currentFrame = 0;
    } else if (currentFrame < 0) {
      currentFrame = MAX_FRAME;
    }
    setCurrentFrameData();
  };

  const setCurrentFrameData = () => {
    const {url,caption,description} = data[currentFrame];
    //Set indicator
    for(let i of indicators.childNodes.keys()) {
      if(i === currentFrame) {
        indicators.childNodes[i].innerHTML = FILLED_CIRCLE;
      } else {
        indicators.childNodes[i].innerHTML = EMPTY_CIRCLE;
      }
    }
    //Set image
    imageElement.src = url;
    imageElement.caption = caption;
    //Set description
    descriptionElement.innerText = description;
  };

  const populateIndicators = () => {
    let indicatorText = '';
    for(const i in data) {
      indicatorText += `<div class="carouselIndicator">${EMPTY_CIRCLE}</div>`;
    }
    indicators.innerHTML = indicatorText;
  };

  const timer = () => {
    if(looping) {
      moveFrame(1);
      setTimeout(timer, sleepTime);
    }
  };

  const carousel = document.createElement('div');
  carousel.innerHTML = template;

  const lArrow = carousel.querySelector('.carouselLeftArrow');
  const rArrow = carousel.querySelector('.carouselRightArrow');
  const indicators = carousel.querySelector('.carouselIndicators');
  const imageElement = carousel.querySelector('.carouselImage');
  const descriptionElement = carousel.querySelector('.carouselDescription');

  populateIndicators();
  setCurrentFrameData();
  setTimeout(timer, sleepTime);

  lArrow.addEventListener('click', backFrame);
  rArrow.addEventListener('click', forwardFrame);

  return carousel;
}