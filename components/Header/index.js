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

const headerContainerComponent = document.querySelector('.header-container');

function Header() {

    const createDiv = document.createElement('div');
    const createSpan = document.createElement('span');
    const createH1 = document.createElement('h1');
    const createSpan2 = document.createElement('span');

    createDiv.classList.add('header');
    
    createSpan.textContent ="SMARCH 28, 2019";
    createH1.textContent ='Lambda Times';
    createSpan2.textContent='98°';

    createDiv.appendChild(createSpan);
    createDiv.appendChild(createH1);
    createDiv.appendChild(createSpan2);

    console.log(createDiv);

    return createDiv;
}

headerContainerComponent.appendChild(Header());


