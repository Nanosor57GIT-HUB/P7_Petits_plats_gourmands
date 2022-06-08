

const array = recipes;

let cardRecipes = "";



//début---------------------------------
array.forEach((recipe) => { 
  for (let i = 0; i < array.length; i++) {
    names = recipe.name;
    time = recipe.time + " mn";
    description = recipe.description;
    ingredients = recipe.ingredients;    
}

  //fin----------------------------------- 
   
//début********************************************************************
   ingredients.forEach((ing) => {
     //
        ingredient = ing.ingredient;
      //  console.log(ingredient);
        quantity = ing.quantity;
        unit = ing.unit;

        if (quantity == undefined) {
          quantity = "";
        }
        if (unit == undefined) {
          unit = "";
        }   
    // } 
  }) 




//fin**********************************************************************
  cardRecipes += `
 
          
            <div class="card">

              <div class="photosPlats">
              <img src="./img/logo_lespetitsplats.png" class="photoPlat" />
              </div>  

              <div class="titleTime">
                <h3 class="title">${names}</h3>
                <div class="time">
                  <i class="far fa-clock"></i>
                  <span class="mn">${time} mn</span>
                </div>
              </div>

              <div class="recette">
                <div class="ingredients">
                  <ul id="list-ingredients">
                  
                   <li><span class="ingredients-details">${ingredient}  </span> (${quantity} ${unit})</li>
                    </ul>          
                </div>
                <div class="préparation">
                  <p class="preparation-text">${description}</p>   
                </div>
              </div>

           
          </div>`

})  //array.forEach (fin)

   let card = (document.querySelector(".containerCards").innerHTML = cardRecipes);
  
//     let listIng = document.createElement("li");
//     listIng.classList.add("ingredients-details");
//     const tags = document.querySelector("#list-ingredients").appendChild(listIng);
// listIng.innerHTML = ingredient;
// console.log(listIng);



//maquette : https://www.figma.com/file/xqeE1ZKlHUWi2Efo8r73NK


// const searchInput = document.querySelector("#search");
// function search() {
//   searchInput.addEventListener("keyup", function () {
//     const input = searchInput.value;

//     array.filter(
//       (item) =>
//         item.name.toLowerCase().includes(input.toLowerCase()) ||
//         item.description.toLowerCase().includes(input.toLowerCase()) //||
//       // item.ingredient.toLowerCase().includes(input.toLowerCase())
//     );
//   });
// }
// search();
//  function displayIngredients(ingredient) {
//    let ingredientLi = document.createElement("li");
//    ingredientLi.classList.add("ingredients-details");
//    ingredientLi.innerHTML = `<li> ${ingredient} ${quantity} ${unit} </li>`;
//    console.log(ingredientLi);
//    let ul = document.getElementById("list-ingredients");
//    ul.appendChild(ingredientLi);
//  }