define(['angular'], function('angular'){
    var driverMod = angular.module('DriverModule', []);

    driverMod.controller = ('DriverController', ['$scope', function($scope) {

        $scope.driverName= 'The Driver';
        $scope.companyName= 'The Company';


    }]);
});
