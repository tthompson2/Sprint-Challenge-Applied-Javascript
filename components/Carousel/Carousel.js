/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

function createCarousel() {
  
  const createDiv1 = document.createElement('div');
  const createDiv2 = document.createElement('div');
  const createImg1 = document.createElement('img');
  const createImg2 = document.createElement('img');
  const createImg3 = document.createElement('img');
  const createImg4 = document.createElement('img');
  const createImg5 = document.createElement('img');
  const createDivButton = document.createElement('div');

  createDiv1.classList.add('carousel');
  createDiv2.classList.add('left-button');
  createImg1.src = './assets/carousel/bones.jpg';
  createImg2.src = './assets/carousel/fido.jpg';
  createImg3.src = './assets/carousel/max.jpg';
  createImg4.src = './assets/carousel/puppers.jpg';
  createImg5.src = './assets/carousel/sir.jpg'
  createDivButton.classList.add('right-button');

  createDiv1.appendChild(createDiv2);
  createDiv1.appendChild(createImg1);
  createDiv1.appendChild(createImg2);
  createDiv1.appendChild(createImg3);
  createDiv1.appendChild(createImg4);
  createDiv1.appendChild(createImg5);

   return createDiv1;
}

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
