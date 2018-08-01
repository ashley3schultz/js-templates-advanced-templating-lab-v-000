function init() {
  createRecipe()
  //put any page initialization/handlebars initialization here
}

var recipeForm = document.getElementById("recipe-form")

function createRecipe(){
  const recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: []
  }

    let ingredients = document.getElementsByName("ingredients");

  for (let i=0; i < ingredients.length; i++) {
    if (ingredients[i]) {
      recipe['ingredients'].push(ingredients[i].value);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
