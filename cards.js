

const array = recipes;

let cardRecipes = "";

  
array.forEach((recipe) => {
  names = recipe.name;
  time = recipe.time + " mn";
  description = recipe.description;
 const ingredients = recipe.ingredients;

let detailsIngredients = "";

getIngredient(ingredients, detailsIngredients)



  cardRecipes = `      <div class="card">

              <div class="photosPlats">
              <img src="./img/logo_lespetitsplats.png" class="photoPlat" />
              </div>  

              <div class="titleTime">
                <h3 class="title">${names}</h3>
                <div class="time">
                  <i class="far fa-clock"></i>
                  <span class="mn">${time}</span>
                </div>
              </div>

              <div class="recette">
                <div class="ingredients">
                  <ul id="list-ingredients">            
                   ${detailsIngredients}
                    </ul>          
                </div>
                <div class="préparation">
                  <p class="preparation-text">${description}</p>   
                </div>
              </div>

           
          </div>`;

  document.querySelector(".containerCards").innerHTML += cardRecipes;
  

}) 


//maquette : https://www.figma.com/file/xqeE1ZKlHUWi2Efo8r73NK

