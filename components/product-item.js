// product-item.js
/* 3. This will likely be the trickiest part. You will be creating the custom component <product-item> for the card. We’ve given you a small start in product-item.js, but make sure to read up on web components using the resources below. Thankfully, as far as the HTML goes we’ve already given you a sample <li> that you can just copy and modify. Make sure to change the img src, img alt, and the inner text of both p elements. Since you will also need the styles for the card since the page styles won’t work in the Shadow DOM, if you look in the styles.css file we’ve marked out the start and end of all the CSS you will need to include.
*/
class ProductItem extends HTMLElement {
  constructor(e) {
    // Always call super first in constructor
    super();

    // Create a shadow root
    this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'

    // create li wrapper product
    const li = document.createElement('li');
    li.setAttribute('class','product');

    // create img
    const img = li.appendChild(document.createElement('img'));
    img.setAttribute('class','img');
    img.src = this.getAttribute('image');
    img.alt = this.getAttribute('title');
    img.width = 200;
    /*
    img.setAttribute('src', null);
    img.setAttribute('alt', null);
    img.setAttribute('width', 200);
    */

    // create title 
    const title = li.appendChild(document.createElement('p'));
    title.setAttribute('class','title');
    title.textContent = this.getAttribute('title');

    // create price 
    const price = li.appendChild(document.createElement('p'));
    price.setAttribute('class','price'); 
    price.textContent = this.getAttribute('price');

    // create button and it's functionality 
    const button = li.appendChild(document.createElement('button'));
    title.setAttribute('class','button');
    button.textContent = 'Add to Cart';
    button.addEventListener('click', function(e) {
      e.preventDefault(); 
      let numItems = document.querySelector("#cart-count");
      if(button.textContent == 'Add to Cart') {
        //addToCart();
        document.getElementById('cart-count').textContent = Number(numItems.innerText) + 1
        button.textContent = 'Remove from Cart';
      }
      else {
        //removeFromCart(); 
        document.getElementById('cart-count').textContent = Number(numItems.innerText) - 1;
        button.textContent = 'Add to Cart';
      }
    });
    



    // Take attribute content and put it inside the info span
    //info.textContent = this.getAttribute('data-text');

    /*
    // link in styles.css
    let style = document.createElement('style');  
    // set the attributes for link element 
    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    link.href = '../styles/styles.css';
    // Get HTML head element to append  
    // link element to it  
    document.getElementsByTagName('HEAD')[0].appendChild(style); 
    */

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    style.textContent = `
      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }

      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
        max-height: 300px;
      }
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }`;

  this.shadowRoot.append(style, li);
  }
/*
  const addToCart = () => {
    document.getElementById("cart-count").textContent = Number(cartCount.innerText) + 1;
  };
  */
}

customElements.define('product-item', ProductItem);