 
const array = recipes;
//console.log(array.length);
//console.log(array);




/**************************************************************** */ 
//Boucle les ingrédients quantity/unit. Si undefined, ne retourne rien
let cardRecipe = "";
recipes.forEach((recipe) => {
  for (let i = 0; i < recipe.ingredients.length; i++) {
    // console.log(array.length);
//console.log(array);
//console.log(recipe.ingredients);

//ressort tableau ingredients de chaque recette
const ingredient = recipe.ingredients
//console.log(ingredient);
 
const newIngredients = ingredient.map((ing) => {
  console.log(ing);
  return ing
})
console.log(newIngredients);
//console.log(ing);

     /*  if (ingredient.quantity == undefined) {
         ingredient.quantity = "";
       }
       if (ingredient.unit == undefined) {
         ingredient.unit = "";
       }*/
 

    return (cardRecipe += `
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
                   <li><span class="ingredients-details">${recipe.ingredients}</li>
               
                 
                   </ul>          
                </div>
                <div class="préparation">
                  <p class="preparation-text">${recipe.description}</p>   
                </div>
              </div>
            </div>
          </div>`
          );};
})

let card = (document.querySelector(".rowCard").innerHTML = cardRecipe);









