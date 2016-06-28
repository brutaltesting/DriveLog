"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var drivers = [
            { id: 1, name: 'Klas F', socialsec: '740909-0909' },
            { id: 2, name: 'Janne Kivi', socialsec: '740218-0909' },
            { id: 3, name: 'Koiri Kiwi', socialsec: '840218-0909' }
        ];
        return { drivers: drivers };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
