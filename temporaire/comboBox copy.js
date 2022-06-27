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

let input = document.getElementById("input1");

//Exécuter la fonction sur keyup
input.addEventListener("keyup", (e) => {
  //boucle dans le tableau ci-dessus
  /*Supprimez initialement tous les éléments
   (donc si l'utilisateur efface une lettre ou ajoute une nouvelle lettre, nettoyez les sorties précédentes)*/
  removeElements();

  for (let i of sortedIngredients) {
    //convertir l'entrée en minuscules et comparer avec chaque chaîne de caractères
   // tronc commun à l'appli combo
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //Création d'un élément li
      let listItem = document.createElement("li");
      //Ajout d'une classe, d'un cursor pointer et de l'affichage au clic dans un tag
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayTags('" + i + "')");

      //Afficher la partie correspondante en gras
      let word =
        "<b style='color: #ff1248'>" +
        i.substring(0, input.value.length) +
        "</b>";
      word += i.substring(input.value.length);

      //afficher la valeur dans le tableau
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});



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
  listTags.innerHTML = value;
  input.value = "";
  let closeTags = document.createElement("img");
  closeTags.src = "img/times-circle-regular.svg";
  closeTags.classList.add("closedtag");
  closeTags.style.cursor = "pointer";
  listTags.appendChild(closeTags);
  closeTags.addEventListener('click', () => {
  listTags.remove()
  });
  removeElements();
}

//localStorage.setItem();
//localStorage.clear();
