


const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function () {
  const input = searchInput.value;

array.forEach((recipe) => {
 
  ingredients = recipe.ingredients;
  let detailsIngredients = ""

  ingredients.forEach((ing) => {
    ingredient = ing.ingredient;
    quantity = ing.quantity;
    unit = ing.unit;

    if (quantity == undefined) {
      quantity = "";
    }
    if (unit == undefined) {
      unit = "";
    }
    
    const formatUnit = (unit) => {
    switch (unit) {
      case "gramme":
      case "grammes":
        return "Gr.";
      case "cuillères à soupe":
      case "cuillère à soupe":
        return "C à s.";
      case "cuillères à café":
      case "cuillère à café":
        return "C à c.";
      case "litres":
      case "litre":
        return "L.";
      default:
        return unit;
    }
  };
detailsIngredients += `<li><span class="ingredients-details">${ingredient} / </span> ${quantity} ${formatUnit(
  unit
)}</li>`;
  


console.log(ingredients);
})

let suggestion = "";

  array
    .filter(
      (item) =>
        item.name.toLowerCase().includes(input.toLowerCase()) ||
        item.description.toLowerCase().includes(input.toLowerCase())
    )
    .forEach(
      (r) =>
        (suggestion += `    <div class="card">

              <div class="photosPlats">
              <img src="./img/logo_lespetitsplats.png" class="photoPlat" />
              </div>  

              <div class="titleTime">
                <h3 class="title">${r.name}</h3>
                <div class="time">
                  <i class="far fa-clock"></i>
                  <span class="mn">${time} mn</span>
                </div>
              </div>

              <div class="recette">
                <div class="ingredients">
                  <ul id="list-ingredients">
                  
                  ${detailsIngredients}
                    </ul>          
                </div>
                <div class="préparation">
                  <p class="preparation-text">${r.description}</p>   
                </div>
              </div>

           
          </div>`)
    );
  document.querySelector(".containerCards").innerHTML = suggestion;
});
 });
/*
//          ALGO OPTION 1 BARRE PRINCIPALE

const barreChamp = document.getElementById("barre_champ");


function filtreBarre(){
    const inputBarre = barreChamp.value;
    let resultat = [];

    if (inputBarre.length >= 3){    //filtre des recettes en relation avec les 3 caractères tapés

        resultat = recettes.filter(recette => recette.name.toLowerCase().includes(inputBarre.toLowerCase())  recette.description.toLowerCase().includes(inputBarre.toLowerCase())  recette.ingredients.some ((ingredient) => ingredient.ingredient.toLowerCase().includes(inputBarre.toLowerCase())));

        recettes = resultat; 

    }else{      //sinon affiche toutes les recettes avec un filtre correspondant aux tags selectionnes

        recettes = recipes;
        filtreTag();
        resultat = recettes;

    }
    if (resultat.length == 0){  //si il n'y a aucune correspondance, affiche un message

        pasDeRecette();

    }else{

        displayRecette(resultat);   //j'affiche le resultat de ce filtre au niveau des recettes
    }

    displayListe(resultat);     //j'affiche le resultat de ce filtre au niveau des listes btn

}

barreChamp.addEventListener("input", filtreBarre);
*/

//https://github.com/Christelle74/ChristellePhilippe_7_08032022/blob/master/scripts/index.js
