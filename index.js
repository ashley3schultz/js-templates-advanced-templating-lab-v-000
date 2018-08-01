function init() {
  //put any page initialization/handlebars initialization here
}

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
