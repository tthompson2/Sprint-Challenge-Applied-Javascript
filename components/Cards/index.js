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

         function cardCreator(authorName, authorPhoto, headline) {

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
            
         newSpan.textContent = authorName;
         createImg.src = authorPhoto;
         createHeadline.textContent = headline;

         createCard.appendChild(createHeadline);
         createCard.appendChild(createAuthor);
         createAuthor.appendChild(createImgContainer);
         createImgContainer.appendChild(createImg);
         createAuthor.appendChild(newSpan);

         cardContainer.appendChild(createCard);

         return createCard;
         }

         Response.data.articles.bootstrap.forEach(element => {
            cardCreator(element.authorName, element.authorPhoto, element.headline);   
         });

         Response.data.articles.javascript.forEach(element => {
            cardCreator(element.authorName, element.authorPhoto, element.headline);
         });

         Response.data.articles.jquery.forEach(element => {
            cardCreator(element.authorName, element.authorPhoto, element.headline);
         });
         
         Response.data.articles.node.forEach(element => {
            cardCreator(element.authorName, element.authorPhoto, element.headline);
         });
         
         Response.data.articles.technology.forEach(element => {
            cardCreator(element.authorName, element.authorPhoto, element.headline);
         }); 

     })
     .catch(error => {
         console.log(error);
     })
     