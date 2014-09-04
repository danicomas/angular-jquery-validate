'use strict';
angular.module('angular-jquery-validate', []).factory('jqueryValidate', [function () {
    return $.validator;
}]).provider('$jqueryValidate', function () {
    return {
        setDefaults: function (options) {
            $.validator.setDefaults(options);
        },
        addMethod: function (name, func, errorText) {
            $.validator.addMethod(name, func, errorText);
        },
        $get: function () {
            return {

            }
        }
    }
}).directive('formvalidator', function () {
    return {
        restrict: 'A',
        scope: {
            formvalidatorconfig: '=',
            formvalidatorapi: '='
        },
        link: function (scope, elem, attr, ctrl) {
            scope.$watch('formvalidatorconfig', function (value) {
                if (value) {
                    elem.validate(value);
                    if (value.validateOnInit)
                        scope.formvalidatorapi.validate();
                }
            });

            scope.formvalidatorapi = {
                validate: function() {
                    elem.validate().form();
                },
                valid: function () {
                    return elem.valid();
                }
            };
        }
    };
});