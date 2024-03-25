const addBook = document.getElementById('button-submit');
const stocks = document.getElementById('stock');
const deleteElement = document.getElementsByTagName('i');
const hrTag = document.getElementsByName('hr');

addBook.addEventListener('click', e => {
    e.preventDefault();
    const titleInput = document.querySelector("input[id='book-title-input']");
    const imageInput = document.querySelector("input[id='book-image-url']");
    const authorInput = document.querySelector("input[id='book-author-input']");
    const priceInput = document.querySelector("input[id='book-price-input']");
    
    const article = document.createElement('article');
          article.setAttribute('class', 'booktory__book');
        
    const articleImage = document.createElement('div');
          articleImage.setAttribute('class', 'booktory__book__book-image');
          articleImage.appendChild(document.createElement('img')).setAttribute('src', imageInput.value);
                    // imageDiv.appendChild(document.createElement('img')).setAttribute('src', imageInput.value);

    const articleInfo = document.createElement('div');
          articleInfo.setAttribute('class', 'booktory__book__book-info');

      const titleText = document.createElement('h2');
            titleText.innerText = titleInput.value;
      const authorText = document.createElement('h3');
            authorText.innerText = authorInput.value;
      const buttonText = document.createElement('button');
            buttonText.innerText = 'In Stock';
      const priceText = document.createElement('h1');
            priceText.innerText = priceInput.value;

            articleInfo.appendChild(titleText);
            articleInfo.appendChild(authorText);
            articleInfo.appendChild(buttonText);
            articleInfo.appendChild(priceText);

    const deleteDiv = document.createElement('div');
          deleteDiv.setAttribute('class', 'booktory__book__book-delete');
      
    const deleteText = document.createElement('i');
          deleteText.setAttribute('id', 'delete-button');
          deleteText.innerText = 'delete';
      
          deleteDiv.appendChild(deleteText);

    const newHr = document.createElement('hr');

          article.append(articleImage);
          article.append(articleInfo);
          article.append(deleteDiv);
          
          
          document.getElementById('main').appendChild(article);
          main.append(newHr);

    const deleteButton = document.getElementById('delete-button');

            deleteButton.addEventListener('click', e => {
                   articleImage.remove();
                   articleInfo.remove();
                   deleteDiv.remove();
                   newHr.remove();
            });


});

const books = document.getElementsByClassName('booktory__book');

for (let i = 0; i < deleteElement.length; i++){
       deleteElement[i].addEventListener('click', (e) => {
       e.preventDefault();
       main.removeChild(books[i]);
       main.removeChild(hrTag[i]);
            });
      };

// for (let stock of stocks){
//       stock.addEventListener('click', e => {
//       e.preventDefault();
//       if (stock.innerText === 'In Stock')
//             stock.innerText = 'Out of Stock';
//       else if (stock.innerText === 'Out of Stock')
//             stock.innerText = 'In Stock';
//       else
//            return;

//       });
// };

