const cocktailsList = document.getElementById("cocktailsList");
const searchBar = document.getElementById("searchBar");
let newCocktails;

searchBar.addEventListener("keyup", (e) => {
  console.log(newCocktails, "Drew");
  const searchString = e.target.value.toLowerCase();

  const filteredCocktails = newCocktails.drinks.filter((drinks) => {
    return drinks.strDrink.toLowerCase().includes(searchString);
  });
  displayCocktails(filteredCocktails);
});

const loadCocktails = async () => {
  try {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
    newCocktails = await res.json();
    console.log(newCocktails.drinks);
    displayCocktails(newCocktails.drinks);
  } catch (err) {
    console.error(err);
  }
};

const displayCocktails = (cocktails) => {
  const htmlString = cocktails
    // .slice(0, 10)
    .map((drinks) => {
      return `
            <li class="cocktail" style="background-image: url('${drinks.strDrinkThumb}');">
                <div class="shadow"></div>
                <h2>${drinks.strDrink}</h2>
            </li>
        `;
    })
    .join("");
  cocktailsList.innerHTML = htmlString;
};

loadCocktails();

//<p>Drink: ${drinks.idDrink}</p>
