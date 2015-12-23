angular.module('FestivalModule').controller('FestivalController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){
  // $scope.festivals = {};
  // $scope.featuredFestivals = {};

  function loadFestivals(){
    $http.get('/getFestivals')
    .then(function success(response){
      $scope.festivals = response.data;
    }, function error(response){
      console.log("we failed guyz");
    });
  }

  function loadFeaturedFestivals(){
    $http.get('/getFeaturedFestivals')
    .then(function success(response){
      $scope.featuredFestivals = response.data;
    }, function error(response){
      console.log("featured festival ui failed")
    });
  }

  loadFeaturedFestivals();
  loadFestivals();
}]);
