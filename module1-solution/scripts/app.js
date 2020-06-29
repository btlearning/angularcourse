(function () {
    'use strict';

    angular.module('LunchApp', [])
        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];

    function LunchController($scope) {
        $scope.dishes = '';
        $scope.message = '';

        $scope.checkIfTooMuch = function () {
            var inputDishes = $scope.dishes.split(',');

            var filteredDishes = [];
            inputDishes.forEach(function (dish) {
                dish = dish.trim();
                if (dish.length) {
                    filteredDishes.push(dish);
                }
            });
            var totalDishes = filteredDishes.length;

            if (totalDishes === 0) {
                $scope.message = 'Please enter data first';
            } else {
                if (totalDishes > 3) {
                    $scope.message = 'Too much!';
                } else {
                    $scope.message = 'Enjoy!';
                }
            }
        };
    }
})();
