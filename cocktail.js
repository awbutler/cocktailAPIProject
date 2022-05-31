// let ozCost = 0;

// let submitButton = Array.from(document.getElementsByClassName("submit"));

// let ingredientDiv = Array.from(document.getElementsByClassName("ingredient"));

// let totalCostDiv = Array.from(document.getElementsByClassName("totalCost"));

// let amtInputDiv = Array.from(document.getElementsByClassName("amtInput"));

// console.log(amtInputDiv);


// let currentButton = 0;
// let menuPrice = [] ;

// for (let index = 0; index < submitButton.length; index++) {
//   submitButton[index].addEventListener("click", async (submitEvent) => {
//     let ingredient = ingredientDiv[index].value;
    
//     let ingredientPrice = await getPrice(ingredient);

//     let amountInput = amtInputDiv[index].value;
//     let ozCost = ingredientPrice / 33;
//     let totalCost = ozCost * amountInput;
//     console.log(ingredientDiv[index].value);
//     menuPrice.push(totalCost);
    
//     let totalCostDisplay = document.getElementById("totalCost" + index);

//     totalCostDisplay.innerText = totalCost;
//   });
// }

// async function getPrice(ingredient) {
//   const res = await fetch("https://demo8080465.mockable.io/pricing");

//   let pricelist;
//   await res.json().then((dataResponse) => {
//     pricelist = dataResponse.pricelist;
//   });

//   let currentPrice;
//   for (let index = 0; index < pricelist.length; index++) {
//     if (ingredient == pricelist[index].spirit) {
//       currentPrice = pricelist[index].price;
//     }
//   }
//   return currentPrice;
// }
let ozCost = 0;

let submitButton = Array.from(document.getElementsByClassName("submit"));

let ingredientDiv = Array.from(document.getElementsByClassName("ingredient"));

let totalCostDiv = Array.from(document.getElementsByClassName("totalCost"));

let amtInputDiv = Array.from(document.getElementsByClassName("amtInput"));

console.log(amtInputDiv);


let currentButton = 0;
let menuPrice = [] ;

for (let index = 0; index < submitButton.length; index++) {
  submitButton[index].addEventListener("click", async (submitEvent) => {
    let ingredient = ingredientDiv[index].value;
    
    let ingredientPrice = await getPrice(ingredient);

    let amountInput = amtInputDiv[index].value;
    let ozCost = ingredientPrice / 33;
    let totalCost = ozCost * amountInput;
    console.log(ingredientDiv[index].value);
    menuPrice.push(totalCost);
    
    let totalCostDisplay = document.getElementById("totalCost" + index);

    totalCostDisplay.innerText = totalCost;
  });
}

async function getPrice(ingredient) {
  const res = await fetch("https://demo8080465.mockable.io/pricing");

  let pricelist;
  await res.json().then((dataResponse) => {
    pricelist = dataResponse.pricelist;
  });

  let currentPrice;
  for (let index = 0; index < pricelist.length; index++) {
    if (ingredient == pricelist[index].spirit) {
      currentPrice = pricelist[index].price;
    }
  }
  return currentPrice;
}




let finalResult = document.getElementById("menuButton");
let finalMenuPrice = document.getElementById("menuPrice");

finalResult.addEventListener("click", () => {
  const sum = (menuPrice.reduce((partialSum, a) => partialSum + a, 0)) * 4;
  finalMenuPrice.innerText = sum;
})




