$(document).ready(function() {
    $.urlParam = function(name) {
      var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
        window.location.href
      );
      if (results == null) {
        return null;
      }
      return decodeURI(results[1]) || 0;
    };
  //   console.log($.urlParam("mealtype"));
    var mealtype = $.urlParam("mealtype");
    var imageUrl;
  
    if (mealtype == "snacks") {
      imageUrl = "images/" + mealtype + ".png";
    } else {
      imageUrl = "images/" + mealtype + ".jpg";
    }
  //   console.log('url("' + imageUrl + '")');
    
    document.body.style.backgroundImage = 'url("' + imageUrl + '")';
  });
  
  