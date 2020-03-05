console.log("hello")
$(document).ready(function(){

  var getAreas = "https://www.themealdb.com/api/json/v1/1/list.php?a=list&api-key=1"

  $.ajax({

    url: getAreas,
    method: "GET"
    
  }).then(function(response){

    console.log(response.meals)

    for (let index = 0; index < response.meals.length; index++) {
      $("#search-term").append("<option>"+ response.meals[index].strArea + "</option>" )
      
    }


  })




    $("#mealTypeSelection").on("click", function(event){

        var mealTypeSelection = event.target.id

        console.log(mealTypeSelection);

        window.location.href = "./insta-choice.html";
    })
    $('#answer').on('click', 'p', function(event){
        console.log("did this really work??? ", event.target.id)

        var alcohoSuggestionURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list&api-key=1"

        $.ajax({
          url: alcohoSuggestionURL,
          method: "GET"

        }).then(function(response){

            console.log(response.drinks)

        })

      //var alcoholSuggestion = 


    });
        
})




$("#btnSearch").on("click", function() {
    event.preventDefault();
    $("#answer").empty();
  
    var searchTerm = $("#search-term").val();
   
  
    var getURL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=" +
      searchTerm +
      "&api-key=1";
    
    $.ajax({
      url: getURL,
      method: "GET"
    }).then(function(response) {
      //console.log(response.meals.length)
  
      console.log(response)
  
      for (let index = 0; index < response.meals.length; index++) {
        //$("#answer").append("<p>"+response.meals[index].strMeal+"</p>")
        $("#answer").append("<p class=foodLink id="+response.meals[index].idMeal+">"+response.meals[index].strMeal +"</p>");
        //$("#answer").append("<p class=foodLink id="+response.meals[index].idMeal+"><a href=./index.html>"+response.meals[index].strMeal +"</a></p>");
        $("#answer").append("<p><img src="+response.meals[index].strMealThumb+" alt="+response.meals[index].strMeal +"></p>");
      }
    });
  });
  


  
