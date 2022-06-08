


const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function () {
  const input = searchInput.value;

let suggestion = "";

  array.filter(
    (item) =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.description.toLowerCase().includes(input.toLowerCase())
  ).forEach(
    (r) =>
   
      (suggestion += `    <div class="card">

              <div class="photosPlats">
              <img src="./img/logo_lespetitsplats.png" class="photoPlat" />
              </div>  

              <div class="titleTime">
                <h3 class="title">${r.name}</h3>
                <div class="time">
                  <i class="far fa-clock"></i>
                  <span class="mn">${r.time} mn</span>
                </div>
              </div>

              <div class="recette">
                <div class="ingredients">
                  <ul id="list-ingredients">
                  
                   <li><span class="ingredients-details">${ingredient}  </span> (${quantity} ${unit})</li>
                    </ul>          
                </div>
                <div class="préparation">
                  <p class="preparation-text">${r.description}</p>   
                </div>
              </div>

           
          </div>`
          )
  );
  document.querySelector(".containerCards").innerHTML = suggestion;
});
 

