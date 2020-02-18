// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle(data.documentTitle);
    fnameAunt(data.firstName);
    lnameAunt(data.lastName);
    adresseAunt(data.email);
    displayArticles(data.articles);
    displayRecipes(data.recipes);
    
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function(title) {
  // Some code...
  $("#titlee").text(title);
};
//NAME AUNT LOGO
var fnameAunt = function(firstName){
  $("#prenomTante").text(firstName);
};
var lnameAunt = function(lastName){
  $("#nomTante").text(lastName);
};
var adresseAunt = function(email){
  $("#adresseSylvie").text(email);
};
//ARTICLES GET DATA!
var displayArticles = function(articles){
  $("#img1").text(articles[0].imgUrl);
  $("#a1_content").text(articles[0].content);
  $("#soustitre1").text(articles[0].subtitle);
  $("#titre1").text(articles[0].title);

  $("#img2").text(articles[1].imgUrl);
  $("#a2_content").text(articles[1].content);
  $("#soustitre2").text(articles[1].subtitle);
  $("#titre2").text(articles[1].title);

  $("#img3").text(articles[2].imgUrl);
  $("#a3_content").text(articles[2].content);
  $("#soustitre3").text(articles[2].subtitle);
  $("#titre3").text(articles[2].title);
};
//GET RECIPESSSSSS
var displayRecipes = function(recipes){
  $("#price1").text(recipes[0].price);
  $("#description1").text(recipes[0].description);
  $("#img_recipe1").text(recipes[0].imgUrl);

  $("#price2").text(recipes[1].price);
  $("#description2").text(recipes[1].description);
  $("#img_recipe2").text(recipes[1].imgUrl);

  $("#price3").text(recipes[2].price);
  $("#description3").text(recipes[2].description);
  $("#img_recipe3").text(recipes[2].imgUrl);

  $("#price4").text(recipes[3].price);
  $("#description4").text(recipes[3].description);
  $("#img_recipe4").text(recipes[3].imgUrl);

  $("#price5").text(recipes[4].price);
  $("#description5").text(recipes[4].description);
  $("#img_recipe5").text(recipes[4].imgUrl);

  $("#price6").text(recipes[5].price);
  $("#description6").text(recipes[5].description);
  $("#img_recipe6").text(recipes[5].imgUrl);

  $("#price7").text(recipes[6].price);
  $("#description7").text(recipes[6].description);
  $("#img_recipe7").text(recipes[6].imgUrl);

  $("#price8").text(recipes[7].price);
  $("#description8").text(recipes[7].description);
  $("#img_recipe8").text(recipes[7].imgUrl);

  $("#price9").text(recipes[8].price);
  $("#description9").text(recipes[8].description);
  $("#img_recipe9").text(recipes[8].imgUrl);

  $("#price10").text(recipes[9].price);
  $("#description10").text(recipes[9].description);
  $("#img_recipe10").text(recipes[9].imgUrl);

  $("#price11").text(recipes[10].price);
  $("#description11").text(recipes[10].description);
  $("#img_recipe11").text(recipes[10].imgUrl);

  $("#price12").text(recipes[11].price);
  $("#description12").text(recipes[11].description);
  $("#img_recipe12").text(recipes[11].imgUrl);

};

