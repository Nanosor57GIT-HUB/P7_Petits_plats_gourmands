let input = document.querySelector(".inputCombo1");
let input2 = document.querySelector(".inputCombo2");
let input3 = document.querySelector(".inputCombo3");
let arrow = document.querySelector(".toggleArrow");

let component = [];
let ustensile = [];
let appareils = [];

//Récupération des datas api
function getDataCombo() {
  //Récupération des tableaux ingrédients, appareils et ustensiles
  recipes.forEach((recipe) => {
    //Récupération de chaque appareils/new array appliance
    appliance = recipe.appliance;

    appareils.push(appliance);
    appliance = [...new Set(appareils)];
 
    //Récupération de chaque ustensiles/new array cookingTools
    ustens = recipe.ustensils;

    ustens.forEach((ust) => {
      cookingTools = ust;
      ustensile.push(cookingTools);
      cookingTools = [...new Set(ustensile)];
    });

     //Récupération de chaque component/new Array ingredient
    ingredients = recipe.ingredients;
   
    ingredients.forEach((ing) => {
      ingredient = ing.ingredient;
      //Pousser les éléments dans le tableau component
      component.push(ingredient);
      //Suppression des doublons
      ingredient = [...new Set(component)];
    });
  });
}
getDataCombo(component, ustensile, appareils);

//Trier les noms des listes par ordre croissant (native)
let sortedIngredients = ingredient.sort();
let sortedUstensile = cookingTools.sort();
let sortedAppareils = appliance.sort();



// parent.innerHTML = "";
//regarder/compréhension
//event.target
//possibilité 1) //listItem.addEventListener( "click", displayTags.bind( null, i ) );
//possibilité 2) //() => displayTags( i )

const combos = [
  { input: input, list: sortedIngredients },
  { input: input2, list: sortedAppareils },
  { input: input3, list: sortedUstensile },
];

//Création des listes
function createItem(parent, listing) {
  //Création d'un élément li
  let listItem = document.createElement("li");
  listItem.classList.add("list-items");
  listItem.style.cursor = "pointer";
  listItem.addEventListener("click", displayTags.bind(null, listing));
  let word = listing;
  //afficher la valeur dans le tableau
  listItem.innerText = word;
  parent.querySelector(".ulCombo").appendChild(listItem);
  
}
/**************************************************************** */


for (let combo of combos) {
  
  combo.input.addEventListener("keyup", () => {
      removeList(parent);

    for (let listing of combo.list) {
      if (
        listing.toLowerCase().startsWith(combo.input.value.toLowerCase()) &&
        combo.input.value != ""
      ) {
        const parent = combo.input.closest("form");

        createItem(parent, listing);

        combo.input.style.borderRadius = "5px 5px 0 0";
      } 
    }
    
  });
}


//localStorage.clear();

function displayTags(value) {
  let listTags = document.createElement("li");
  listTags.classList.add("list-tags");
  const tags = document.querySelector(".tags").appendChild(listTags);
listTags.innerText = value;

//Stockage liste des tags affichés
localStorage.setItem("tags", listTags.innerText);


for (let el of combos) { 
 
//console.log(el.input.value = "");   //????
               
      if (el.list == sortedIngredients) {
        listTags.style.backgroundColor = "#3182f7";
      }
      if (el.list == sortedAppareils) {
        listTags.style.backgroundColor = "#68d9a5";
      }
      if (el.list == sortedUstensile) {
        listTags.style.backgroundColor = "#ed6454";
      }
  };
  //Récup la classe pour condition (el.classlist.contains("nom class"))  => voir includes ou === si prob
// supp for of pour install contains

  let closeTags = document.createElement("img");
  closeTags.src = "img/times-circle-regular.svg";
  closeTags.classList.add("closedtag");
  closeTags.style.cursor = "pointer";
  listTags.appendChild(closeTags);
  closeTags.addEventListener("click", () => {
    listTags.remove();
  });

  removeList();
}


//Fermeture de items (liste ingredients, ustensiles, appareils) ouvert
function removeList() {
  let items = document.querySelectorAll(".list-items"); 
  
  items.forEach((item) => { 
    item.remove();
    
     initCombo(); 
  });

}

//Réinitialisation du combo sur le click d'un autre combo
function initCombo() {
 combos.forEach((close) => (close.input.value = ""));  
  for (let combo of combos) { 
    combo.input.style.borderRadius = "5px";
    combo.input.addEventListener("click", () => {
      //combos.forEach((close) => (close.input.value = ""));

      // combo.input.value = "";  //A déplacer au bon endroit

      removeList();
    });
  }
}

//console.log(combo.list = sortedIngredients); //ressort la liste

//arrow = document.querySelector(".toggleArrow");
// arrow.classList.toggle("toggleArrow")

//réinitialisation du combo (à placer dans un click pour switcher sur les combos)

//localStorage.setItem();
//localStorage.clear();


