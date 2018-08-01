function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

var recipeForm = document.getElementById("recipe-form").innerHTML

function loadRcipes() {
  
  var result = recipeForm(recipes)
  document.getElementsByTagName("form")[0].innerHTML += result;
}
