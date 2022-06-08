let input = document.querySelector(".inputCombo1");
let input2 = document.querySelector(".inputCombo2");
let input3 = document.querySelector(".inputCombo3");

let component = [];
let ustensile = [];
let appareils = [];

function getDataCombo() {
  //Récupération des tableaux ingrédients, appareils et ustensiles
  recipes.forEach((recipe) => {
    //Récupération de chaque appareils/new array appliance
    appliance = recipe.appliance;

    appareils.push(appliance);
    appliance = [...new Set(appareils)];
    // localStorage.setItem("appareils", appliance);
    //console.log(appliance);

    ustens = recipe.ustensils;

    //Récupération de chaque ustensiles/new array cookingTools
    ustens.forEach((ust) => {
      cookingTools = ust;
      ustensile.push(cookingTools);
      cookingTools = [...new Set(ustensile)];
      // localStorage.setItem("ustensiles", cookingTools);
      // console.log(cookingTools);
    });
    ingredients = recipe.ingredients;
    //Récupération de chaque component/new Array ingredient
    ingredients.forEach((ing) => {
      ingredient = ing.ingredient;
      //Pousser les éléments dans le tableau component
      component.push(ingredient);
      //Suppression des doublons
      ingredient = [...new Set(component)];
      // localStorage.setItem("ingredient", ingredient);
      //  console.log(ingredient);
    });
  });
}
getDataCombo(component, ustensile, appareils);

//Trier les noms par ordre croissant (native)
let sortedIngredients = ingredient.sort();
let sortedUstensile = cookingTools.sort();
let sortedAppareils = appliance.sort();
//console.log(sortedAppareils);

function createItem(parent, listing) {
  //Création d'un élément li
  let listItem = document.createElement("li");
  listItem.classList.add("list-items");
  listItem.style.cursor = "pointer";
 // listItem.setAttribute("onclick", "displayTags('" + listing + "')");
listItem.addEventListener("click", displayTags.bind(null, listing));
  let word = listing;
  //afficher la valeur dans le tableau
  listItem.innerText = word;
  parent.querySelector(".list").appendChild(listItem);
}

//regarder/compréhension
//event.target
//possibilité 1) //listItem.addEventListener( "click", displayTags.bind( null, i ) );
//possibilité 2) //() => displayTags( i )

const combos = [
  { input: input, list: sortedIngredients },
  { input: input2, list: sortedAppareils },
  { input: input3, list: sortedUstensile },
];

for (let combo of combos) {
  combo.input.addEventListener("keyup", (e) => {
    //
    for (let listing of combo.list) {
    
      if (
        listing.toLowerCase().includes(combo.input.value.toLowerCase()) &&
        combo.input.value != ""
       
      ) {
        const parent = combo.input.closest("form");
        createItem(parent, listing);
      }
   }
  });
}
 
//Exécution la fonction sur keyup
// input.addEventListener("keyup", (e) => {
//   removeElements();
//   for (let i of sortedIngredients) {
//     if (
//       i.toLowerCase().includes(input.value.toLowerCase()) &&
//       input.value != ""
//     ) {
//       const parent = input.closest("form");
//       createItem(parent, i);
//     }
//   }
// });

// input2.addEventListener("keyup", (e) => {
//   removeElements();
//   for (let j of sortedAppareils) {
//     if (
//       j.toLowerCase().startsWith(input2.value.toLowerCase()) &&
//       input2.value != ""
//     ) {
//        const parent = input2.closest("form");
//       createItem(parent, j);
//     }
//   }
// });

// input3.addEventListener("keyup", (e) => {
//   removeElements();
//   for (let k of sortedUstensile) {
//     if (
//       k.toLowerCase().startsWith(input3.value.toLowerCase()) &&
//       input3.value != ""
//     ) {
//        const parent = input3.closest("form");
//       createItem(parent, k);
//     }
//   }
// });

function removeElements() {
  //effacer tous les items
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

function displayTags(value) {
  let listTags = document.createElement("li");
  listTags.classList.add("list-tags");
  const tags = document.querySelector(".tags").appendChild(listTags);
  listTags.innerText = value;
  //test// listTags.innerHTML = "huile d'olives";
  input.value = "";
  let closeTags = document.createElement("img");
  closeTags.src = "img/times-circle-regular.svg";
  closeTags.classList.add("closedtag");
  closeTags.style.cursor = "pointer";
  listTags.appendChild(closeTags);
  closeTags.addEventListener("click", () => {
    listTags.remove();
  });
  removeElements();
}

//arrow = document.querySelector(".arrow-down");
// arrow.style.display.transform = "rotate(180deg)"

//localStorage.setItem();
//localStorage.clear();
