 
const array = recipes;
//console.log(array.length);


//           const searchInput = document.querySelector("#search");

// searchInput.addEventListener("keyup", function () {
//   const input = searchInput.value;

//   const results = array.filter(
//     (item) =>
//       item.name.toLowerCase().includes(input.toLowerCase()) ||
//       item.description.toLowerCase().includes(input.toLowerCase())
//   );
// });
     
  //  results.forEach(
  //   (recipe, ingredient) =>



/**************************************************************** */ 

let cardRecipe = "";
array.forEach((recipe) => {
  for (let i = 0; i < recipe.ingredients.length; i++) {
    // console.log(array.length);
    const ingredients = recipe.ingredients;

    let ingredient = recipe.ingredients[i];
   
    
      ingredients.forEach((ing) => {
        ingredient;
      
        if (ingredient.quantity == undefined) {
          ingredient.quantity = "";
        }
        if (ingredient.unit == undefined) {
          ingredient.unit = "";
        }
        
      })

      return cardRecipe += `
          <div class="col-4 mb-4">
            <div class="card">
              <div class="photosPlats"></div>   
              <div class="titleTime">
                <h3 class="title">${recipe.name}</h3>
                <div class="time">
                  <i class="far fa-clock"></i>
                  <span class="mn">${recipe.time} mn</span>
                </div>
              </div>
              <div class="recette">
                <div class="ingredients">
                  <ul class="list-ingredients"> 
                   <li><span class="ingredients-details">${ingredient.ingredient}:</span> ${ingredient.quantity}${ingredient.unit}</li>
                   </ul>          
                </div>
                <div class="préparation">
                  <p class="preparation-text">${recipe.description}</p>   
                </div>
              </div>
            </div>
          </div>`;
        }
      
})

let card = (document.querySelector(".rowCard").innerHTML = cardRecipe);










