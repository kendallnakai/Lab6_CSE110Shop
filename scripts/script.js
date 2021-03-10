// Script.js

/********************************************************
1. fetching data from an endpoint to get product items. 
2. Once you have fetched this array, add it to local storage 
*/

// fires when webpage is ready
window.addEventListener('DOMContentLoaded', () => {
    // check before initial fetch request to see if it is in local storage
    if(window.localStorage.getItem('data') === null || window.localStorage.getItem('data') === undefined) {
      // create a fetch request
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      // .then(data => console.log(data));
      // url return array of js obj - only stores strings so watch out
      .then(data => {
        window.localStorage.setItem('data', JSON.stringify(data));
        let item = JSON.parse(window.localStorage.getItem('data'));
        let product = new Array(item.length).fill(0);
        window.localStorage.setItem('product', JSON.stringify(product));
      })
    }
    else {
      let item = JSON.parse(window.localStorage.getItem('data'));
      let list = document.getElementById('product-list');
      for (numProducts = 0; numProducts < item.length; numProducts++){
        list.appendChild(new ProductItem(item[numProducts]));
      }
    }
});

