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
                controller.$validators.ageCheck = function () {
                    console.log("executing method");
                    var yr = scope.user.birthYear;
                    var day = scope.user.birthDay;
                    var month = scope.user.birthMonth;
                    console.log(yr + " " + day + " " + month);
                    var currentYr = new Date().getFullYear();
                    var currentDay = new Date().getDate();
                    var currentMonth = new Date().getMonth() + 1;
                    if (currentYr - yr >= 13) {
                        if (month <= currentMonth) {
                            if (day <= currentDay) {
                                return true;
                            }
                        }
                    } else {
                        return false;
                    }
                }
            }

        }
    });


