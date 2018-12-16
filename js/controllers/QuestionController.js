var myApp=angular.module('myApp');
myApp.controller('QuestionController', function($scope) {


    var text = angular.element(document.querySelector("p"));
    var but = angular.element(document.querySelector(".button"));

      var arrs = text.text().split(" ");

      angular.forEach(arrs, function(arrs){

        /*arrs.on("click", function (){
          console.log(arrs);
        });*/



      });



    but.css('display', 'block');

    $scope.bold = function (){

      text.toggleClass("bold");
    };

    $scope.italic = function (){

      text.toggleClass("ital");
    };

    $scope.decoration = function (){

      text.toggleClass("decor");
    };

});
