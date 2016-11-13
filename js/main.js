var app = angular.module('myApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/login.html',
            controller  : 'loginCtrl'
        })

        .when('/signup', {
            templateUrl : 'pages/signup.html',
            controller  : 'signupCtrl'
        })

        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'homeCtrl'
        })

        .when('/3dPlayer', {
            templateUrl : 'pages/3dPlayer.html',
            controller  : '3dPlayerCtrl'
        })

        .when('/vrPlayer', {
            templateUrl : 'pages/vrPlayer.html',
            controller : 'vrPlayerCtrn'
        })
});


app.controller('mainCtrl', function($scope) {

});

app.controller('loginCtrl', function($scope) {
  $scope.user = {
    email: "",
    password: ""
  }
  $scope.login = function () {

  }
});

app.controller('signupCtrl', function($scope) {

});

app.controller('homeCtrl', function($scope) {

  $scope.clickBlueprint = function () {
      $('.dataOfTheRoom').css('display', 'block');
  }

  var co2levelctx = document.getElementById("co2Chart");
  var tempChart = new Chart(co2levelctx, {
      type: 'line',
      data: {
          labels: ["07.11", "08.11", "09.11", "10.11", "11.11", "12.11", "13.11"],
          datasets: [
              {
                  label: "CO2 %",
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  data: [0.043, 0.041, 0.034, 0.031, 0.036, 0.041, 0.035],
              }
          ]
      }
  });
  var tempctx = document.getElementById("tempChart");
  var tempChart = new Chart(tempctx, {
      type: 'line',
      data: {
          labels: ["07.11", "08.11", "09.11", "10.11", "11.11", "12.11", "13.11"],
          datasets: [
              {
                  label: "°C",
                  backgroundColor: "rgba(193, 75, 75, 0.4)",
                  borderColor: "rgba(193, 75, 75, 1)",
                  data: [22.7, 22.5, 23.2, 23.1, 22.2, 22.4, 22.3],
              }
          ]
      }
  });
  var moisturectx = document.getElementById("moistureChart");
  var moistureChart = new Chart(moisturectx, {
      type: 'line',
      data: {
          labels: ["07.11", "08.11", "09.11", "10.11", "11.11", "12.11", "13.11"],
          datasets: [
              {
                  label: "Moisture % ",
                  backgroundColor: "rgba(75, 97, 193, 0.4)",
                  borderColor: "rgba(75, 97, 193, 1)",
                  data: [63, 64, 65, 64, 62, 64, 62],
              }
          ]
      }
  });
  var energyctx = document.getElementById("energyChart");
  var energyChart = new Chart(energyctx, {
      type: 'line',
      data: {
          labels: ["07.11", "08.11", "09.11", "10.11", "11.11", "12.11", "13.11"],
          datasets: [
              {
                  label: "Energy kw/h ",
                  backgroundColor: "rgba(102, 193, 75, 0.4)",
                  borderColor: "rgba(102, 193, 75, 1)",
                  data: [51, 64, 54, 33, 64, 64, 62],
              }
          ]
      }
  });
});

app.controller('3dPlayerCtrl', function($scope) {
  
  var co2levelctx = document.getElementById("co2Chart");
  var tempChart = new Chart(co2levelctx, {
      type: 'line',
      data: {
          labels: ["07.11", "08.11", "09.11", "10.11", "11.11", "12.11", "13.11"],
          datasets: [
              {
                  label: "CO2 %",
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  data: [0.043, 0.041, 0.034, 0.031, 0.036, 0.041, 0.035],
              }
          ]
      }
  });
  var tempctx = document.getElementById("tempChart");
  var tempChart = new Chart(tempctx, {
      type: 'line',
      data: {
          labels: ["07.11", "08.11", "09.11", "10.11", "11.11", "12.11", "13.11"],
          datasets: [
              {
                  label: "°C",
                  backgroundColor: "rgba(193, 75, 75, 0.4)",
                  borderColor: "rgba(193, 75, 75, 1)",
                  data: [22.7, 22.5, 23.2, 23.1, 22.2, 22.4, 22.3],
              }
          ]
      }
  });
  var moisturectx = document.getElementById("moistureChart");
  var moistureChart = new Chart(moisturectx, {
      type: 'line',
      data: {
          labels: ["07.11", "08.11", "09.11", "10.11", "11.11", "12.11", "13.11"],
          datasets: [
              {
                  label: "Moisture % ",
                  backgroundColor: "rgba(75, 97, 193, 0.4)",
                  borderColor: "rgba(75, 97, 193, 1)",
                  data: [63, 64, 65, 64, 62, 64, 62],
              }
          ]
      }
  });
  var energyctx = document.getElementById("energyChart");
  var energyChart = new Chart(energyctx, {
      type: 'line',
      data: {
          labels: ["07.11", "08.11", "09.11", "10.11", "11.11", "12.11", "13.11"],
          datasets: [
              {
                  label: "Energy kw/h ",
                  backgroundColor: "rgba(102, 193, 75, 0.4)",
                  borderColor: "rgba(102, 193, 75, 1)",
                  data: [51, 64, 54, 33, 64, 64, 62],
              }
          ]
      }
  });

});

app.controller('vrPlayerCtrn', function($scope) {
  $scope.clickBlueprint = function () {
      $('.dataOfTheRoom').css('display', 'block');
  }
});
