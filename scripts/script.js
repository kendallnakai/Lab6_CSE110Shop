// Script.js

/********************************************************
1. fetching data from an endpoint to get product items. 
2. Once you have fetched this array, add it to local storage 
*/

// fires when webpage is ready
window.addEventListener('DOMContentLoaded', () => {
    // check before initial fetch request to see if it is in local storage
    if(localStorage.getItem('itemArr') === null) {
      // create a fetch request
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      // .then(data => console.log(data));
      // url return array of js obj
      .then(data => localStorage.setItem('itemArr', JSON.stringify(data)));
    }
});
