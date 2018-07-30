var CATS_ARRAY = [
  {name: "Boby", description: "The developer cat", image: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"},
  {name: "Kitty", description: "The cutiest cat", image: "https://media.giphy.com/media/MWSRkVoNaC30A/giphy.gif"},
  {name: "Juno", description: "A typical which cat", image: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"},
  {name: "Raul", description: "The musician cat", image: "https://media.giphy.com/media/5scVaYq4hKA7u/giphy.gif"},
  {name: "Max", description: "The perfect cleaning assitant", image: "https://media.giphy.com/media/tkM2AQZpPCDhC/giphy.gif"},
  {name: "Jack", description: "The aristocratic cat", image: "https://akns-images.eonline.com/eol_images/Entire_Site/201478/rs_500x313-140808101821-tumblr_n2hjfcZqym1s3hp12o1_400.gif?fit=inside|900:auto&output-quality=90"},
  {name: "Jonny", description: "Inception cat!", image: "https://akns-images.eonline.com/eol_images/Entire_Site/201478/rs_500x313-140808102736-tumblr_n9v7otl9rr1tidluxo1_400.gif?fit=inside|900:auto&output-quality=90"},
  {name: "Betsy", description: "The Chinese cat of luck", image: "https://akns-images.eonline.com/eol_images/Entire_Site/201478/rs_500x281-140808102730-cutest-cat-gifs-please.gif?fit=inside|900:auto&output-quality=90"},
  {name: "Rossie", description: "Thai Cat Massage Master", image: "https://akns-images.eonline.com/eol_images/Entire_Site/201414/rs_500x313-140204131700-tumblr_inline_n0a1jw1w0k1rs0w6q.gif?fit=inside|900:auto&output-quality=90"}
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
