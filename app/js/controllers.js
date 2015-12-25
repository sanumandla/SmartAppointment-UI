'use strict';

/* Controllers */

angular.module('smartApp.controllers', [])
  .controller('homeController', ['$scope', function($scope) {
    $scope.message = 'I am on home page';
  }])
  .controller('aboutController', ['$scope', function($scope) {
    $scope.message = 'I am in about page';
  }])
  .controller('contactController', ['$scope', function($scope) {
    $scope.message = 'I am in contact page';
  }])
  .controller('CarouselDemoCtrl', ['$scope', function($scope) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            var newWidth = 600 + slides.length;
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/300',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }
  }]);