window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

let ingredients = document.getElementById('ingredients');
let searchTerm= document.getElementById('search-Bar');
let searchBtn = document.getElementById('searchBtn');
let drinkInfo = document.getElementById('drinkInfo');
let ingredientList = []


searchBtn.addEventListener("click", async (e) => {
    const searchString = searchTerm.value.toLowerCase();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchString}`)
    .then((response) => response.json())
    .then((filteredIngredients) => {
        displayIngredient(filteredIngredients.drinks);
        })
    .catch((error) => {
       
     });    
        
});



function displayIngredient(drinkData){

    const ingredients = [];

   //maps over array and makes new array
   drinkInfo.innerHTML =  drinkData.map( ({strDrink, strDrinkThumb}) => { //destructuring
    
    return` <div> 
      <div class="card" style="width: 20rem;">
      <div class="card-body mx-auto">
        <h5 class="card-title">${strDrink} </h5>
       
        <img src="${strDrinkThumb}" height="175" width="175"/>
     
      </div></div>
      `;
       }).join('');
        
    drinkInfo.appendChild(drinkInfo);
}


