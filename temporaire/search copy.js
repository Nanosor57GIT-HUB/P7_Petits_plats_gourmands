


const searchInput = document.querySelector("#search");
function search() {
searchInput.addEventListener("keyup", function () {
  const input = searchInput.value;

  array.filter(
    (item) =>
      item.name.toLowerCase().includes(input.toLowerCase()) 
  )
})
  }
  search();

//   let cardRecipe = "";

//   results.forEach(
//     (recipe) =>
//     (cardRecipe += `  <div class="card">

//               <div class="photosPlats">
//               <img src="./img/logo_lespetitsplats.png" class="photoPlat" />
//               </div>  

//               <div class="titleTime">
//                 <h3 class="title">${title}</h3>
//                 <div class="time">
//                   <i class="far fa-clock"></i>
//                   <span class="mn">${time} mn</span>
//                 </div>
//               </div>

//               <div class="recette">
//                 <div class="ingredients">
//                   <ul class="list-ingredients">
//                    <li><span class="ingredients-details">${ingredient}  </span> (${quantity} ${unit})</li>
//                     </ul>          
//                 </div>
//                 <div class="préparation">
//                   <p class="preparation-text">${description}</p>   
//                 </div>
//               </div>

           
//           </div>
//           `)
//   );
//   document.querySelector(".containerCards").innerHTML = cardRecipe;
// });
 

          //https://mylittleneuron.com/2021/01/01/manipuler-les-tableaux-en-javascript/
//https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
//https://librecours.net/module/js/js13/pres/co/dimensions.html?mode=html
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209


