// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios
     .get('https://lambda-times-backend.herokuapp.com/articles')

     .then(Response => {
         console.log(Response.data.articles.bootstrap);
         console.log(Response.data.articles.javascript);
         console.log(Response.data.articles.node);
         console.log(Response.data.articles.technology);
         console.log(Response.data.articles.jquery);

         function cardCreator() {

         Response.data.articles.bootstrap.forEach(element => {
         
         const createCard = document.createElement('div');
         const createHeadline = document.createElement('div');
         const createAuthor = document.createElement('div');
         const createImgContainer = document.createElement('div');
         const createImg = document.createElement('img');
         const newSpan = document.createElement('span');

         createCard.classList.add('card');
         createHeadline.classList.add('headline');
         createAuthor.classList.add('author');
         createImgContainer.classList.add('img-container');   
            
         newSpan.textContent = element.authorName;
         createImg.src = element.authorPhoto;
         createHeadline.textContent = element.headline;

         createCard.appendChild(createHeadline);
         createCard.appendChild(createAuthor);
         createAuthor.appendChild(createImgContainer);
         createImgContainer.appendChild(createImg);
         createAuthor.appendChild(newSpan);

         return createCard;
    
});
cardContainer.appendChild(cardCreator());
console.log(cardCreator());
console.log(cardContainer);
         }

     })
     .catch(error => {
         console.log(error);
     })
     