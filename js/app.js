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
            //submission code
        }
    });
