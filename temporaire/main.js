
class Recipes {
  constructor(
    id,
    name,
    servings,
    ingredients,
    ingredient,
    quantity,
    unit,
    time,
    description,
    appliance,
    ustensils
  )
   {
    this.id = id;
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
    this.ingredient = ingredient;
    this.quantity = quantity;
    this.unit = unit;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }

  //Faire un get Methods qui permet de récupérer (exemple:) fullId comme une propriété
  //Appelé aussi flash methods
  get fullId() {
      return this.makeFullId()
  }

//Methods
makeFullId() {
    return this.id + ", " + this.name + ", " + this.servings
}

//Methods static (Method executable sans avoir besoin de créer une instance "new")
static makeTotal() {
    return " 28, John"
}

static get total() {
    return "My name is Bond !"
}

}
//Création d'un new Recipes appelé recipe
let recipe = new Recipes(28, "John", "Tarte à l'oignon")

//methods avec makeFullId() (besoin d'un objet new)
console.log(recipe.makeFullId());
//Methods devenu propriété "fullId" (besoin d'un objet)
console.log(recipe.fullId);

//Methods static (sans création d'objet new)
console.log(Recipes.makeTotal());
//Methods static devenu propriété "total" (sans création d'objet new)
console.log(Recipes.total);





//Ingredients récupèrera toutes les methodes de recipes avec la class extends
class Ingredients extends Recipes {

//Création d'un nouveau constructor
  constructor(ingredient, quantity, unit, email) {
//Réutilisation du constructor de Recipes avec "super"
  super(ingredient, quantity, unit);
  this.email = email;
  }
}
let ingredient = new Ingredients('Sucre', 2, 'C. à soupe', 'tontondubled@gmail.com')
console.log(ingredient);