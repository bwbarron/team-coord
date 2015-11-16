angular.module('SignUp', [])

    .controller('FormController', function($scope) {
        $scope.user = {};
        $scope.submit = function() {
            //submission code
        }

        $scope.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        $scope.days = [];
        for (var i = 0; i <= 30; i++) {
            $scope.days[i] = i+1;
        }
        var yr = new Date().getFullYear();
        $scope.years = [yr];
        for (var i = 1; i < 100; i++) {
            $scope.years[i] =  yr - 1;
            yr -= 1;
        }
    })

    .directive('ageCheck', function() {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, controller) {
                controller.$validators.ageCheck = function (modelValue) {
                    var bdayInfo = modelValue.split("/");
                    var month = bdayInfo[0];
                    var day = bdayInfo[1];
                    var yr = bdayInfo[2];
                    var currentYr = new Date().getFullYear();
                    var currentDay = new Date().getDate();
                    var currentMonth = new Date().getMonth() + 1;
                    if (currentYr - yr > 13) {
                        return true;
                    }
                    return currentYr - yr == 13 && month <= currentMonth && day <= currentDay;
                }
            }

        }
    });


