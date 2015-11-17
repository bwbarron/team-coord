angular.module('SignUp', [])

    .directive("matchingPasswords", function () {
        return {
            require: "ngModel",
            link: function (scope, elem, attrs, controller) {
                controller.$validators.matchingPasswords = function (modelVal) {
                    return scope.user.pass === modelVal;
                };
            }
        };
    })
    .controller('FormController', function($scope) {
        $scope.user = {};
        $scope.submit = function() {
            $scope.submitted = true;
        };
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


