var CATS_ARRAY = [
  {name: "Boby", description: "The developer cat", image: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"},
  {name: "Kitty", description: "The cutiest and cleanest cat", image: "https://media.giphy.com/media/MWSRkVoNaC30A/giphy.gif"},
  {name: "Juno", description: "The secretary cat", image: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"}
]

var addCat = function(name, description, image){
  var catUl = createCatUl();
  var catName = addName(name);
  var catDescription = addDescription(description);
  var catImage = addImage(image);
  appendElements(catUl, catName, catDescription, catImage);
}

var createCatUl = function(){
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
}

var addName = function(name){
  var catName = document.createElement('li');
  catName.innerText = name;
  return catName;
}

var addDescription = function(description){
  var catDescription = document.createElement('li');
  catDescription.innerText = description;
  return catDescription;
}

var addImage = function(image){
  var catImage = document.createElement('li');
  var catImageUrl = document.createElement('img');
  catImageUrl.src = image;
  catImageUrl.width = "500";
  catImage.appendChild(catImageUrl);
  return catImage;
}

var appendElements = function(catUl, catName, catDescription, catImage){
  catUl.appendChild(catName);
  catUl.appendChild(catDescription);
  catUl.appendChild(catImage);
  var catSection = document.getElementById('cats');
  catSection.appendChild(catUl);
}

var app = function() {
  for(var cat of CATS_ARRAY){
    addCat(cat.name, cat.description, cat.image);
  }
};

window.onload = app;
