function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() {
    if (this != "") {
      return '<li>' + this + '</li>';
    }
  })

  displayEditForm('create')
}



document.addEventListener("DOMContentLoaded", function(event) {
  init()
})



function createRecipe() {
  form()
}


function displayEditForm(arg = 'update') {
  const form = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)  //////////////
  document.getElementsByTagName("main")[0].innerHTML += form({submitAction: `${arg}Recipe()`})
}


function updateRecipe() {
  form()
}


function form(){
  const recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: []
  }
  let ingredients = document.getElementsByName("ingredients")
  for (let i=0; i < ingredients.length; i++) {
    if (ingredients[i]) {
      recipe['ingredients'].push(ingredients[i].value)
    }
  }
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let recipeResult = recipeTemplate(recipe)
  document.getElementsByTagName("main")[0].innerHTML = recipeResult
}
