function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    if (this != "") {
      return '<li>' + this + '</li>';
    }
  })

  const recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += recipeForm({submitAction: "createRecipe()"})
}



document.addEventListener("DOMContentLoaded", function(event) {
  init()
})



function createRecipe() {
  const recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: []
  }
  const ing = document.getElementsByName("ingredients")
  for (let i=0; i < ing.length; i++) {
    if (ing[i]) {
      recipe['ingredients'].push(ing[i].value)
    }
  }
  const recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  const recipeResult = recipeTemplate(recipe)
  document.getElementsByTagName("main")[0].innerHTML += recipeResult
}


function displayEditForm() {
  const editForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += editForm({submitAction: "updateRecipe()"})
}


function updateRecipe() {
  createRecipe()
}
