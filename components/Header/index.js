// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    const divCreator = document.createElement('div');
    const h1Creator = document.createElement('h1');
    const spanCreator = document.createElement('span');
    const dateCreator = document.createElement('span');

    divCreator.classList.add('header');
    spanCreator.classList.add('temp');
    dateCreator.classList.add('date');

    h1Creator.textContent = 'Lambda Times';
    spanCreator.textContent = '98';
    dateCreator.textContent = 'SMARCH 28, 2019';

    const containerOne = document.querySelector('.header-container');
    const newContainer = document.createElement('div');
    newContainer.classList.add = ('headercontainer');

    containerOne.appendChild(newContainer);
    
    //containerOne.parentNode.replaceChild(newContainer, containerOne);

    /* console.log(divCreator);
    console.log(h1Creator);
    console.log(spanCreator);
    console.log(dateCreator); */
    //console.log(containerOne);
  
    newContainer.appendChild(divCreator);
    newContainer.appendChild(dateCreator);
    newContainer.appendChild(h1Creator);
    newContainer.appendChild(spanCreator);
}

Header();
