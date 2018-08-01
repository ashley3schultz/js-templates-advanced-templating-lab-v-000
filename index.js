function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function loadRcipes() {
  var recipeForm = Handlebars.complile(document.getElementById("recipe-form").innerHTML)
  var result = recipeForm(recipes)
  document.getElementsByTagName("main")[0].innerHTML += result;
}
