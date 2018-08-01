function init() {
  //put any page initialization/handlebars initialization here
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createPartials() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
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
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let recipeResult = recipeTemplate(recipe);
  console.log(recipeResult)
  document.getElementsByTagName("main")[0].innerHTML += recipeResult;
}
