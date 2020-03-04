console.log("hello")
$(document).ready(function(){


    $("#mealTypeSelection").on("click", function(event){

        var mealTypeSelection = event.target.id

        console.log(mealTypeSelection);

        window.location.href = "./insta-choice.html";

        
        })

        
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
        $("#answer").append("<p><a href=" +response.meals[index].strMealThumb +">" +response.meals[index].strMeal +"</a></p>");
        $("#answer").append("<p><img src="+response.meals[index].strMealThumb+" alt="+response.meals[index].strMeal +"></p>");
      }
    });
  });
  

