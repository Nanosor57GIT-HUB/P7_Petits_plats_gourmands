const array = recipes;

let cardRecipe = "";

array.forEach((el) => {
  //récupération éléments 1er niveau
  (id = el.id),
    (title = el.name),
    (time = el.time),
    (description = el.description),
    (appareils = el.appliance),
    (ingreds = el.ingredients),
    (usts = el.ustensils);
 
  console.log(description);
//  console.log(ingreds);
  


 //récupération de chaque objet ingrédient
  for (let ele of ingreds) {
    // console.log(ele);
    (ingredient = ele.ingredient), (quantity = ele.quantity), (unit = ele.unit);

    //conditions sur undefined
    if (quantity == undefined) {
      quantity = "";
    }
    if (unit == undefined) {
      unit = "";
    }

   //récupération de chaque ingredient, quantity, unit (total de 254)
  console.log(ingredient, quantity, unit);
 };
  return  cardRecipe += `
          
            <div class="card">

              <div class="photosPlats">
              <img src="logo_lespetitsplats.png" class="photoPlat" />
              </div>  

              <div class="titleTime">
                <h3 class="title">${title}</h3>
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

           
          </div>`;
          



});
 

  let card = (document.querySelector(".containerCards").innerHTML = cardRecipe);


 

//   const testli = (document.createElement(
//     "li"
//   ).innerHTML = ` <li><span class="ingredients-details">${ingredient}  </span> (${quantity} ${unit})</li>`);
// console.log(testli);

// const parentUl = document.getElementById("list-ingredients");
// parentUl.appendChild(testli)
// console.log(parentUl)


 /* function myFunction() {
    let node = document.createElement("li");
    let textnode = document.createTextNode(
      `<span class="ingredients-details">${ingredient}  </span> (${quantity} ${unit})`
    );
    node.appendChild(textnode);
    document.querySelector(".list-ingredients").appendChild(node);
  }*/

  /* <li><span class="ingredients-details">${ingredient}  </span> (${quantity} ${unit})</li>*/