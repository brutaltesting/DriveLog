System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InMemoryDataService;
    return {
        setters:[],
        execute: function() {
            InMemoryDataService = (function () {
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
            exports_1("InMemoryDataService", InMemoryDataService);
        }
    }
});
//# sourceMappingURL=in-memory-data.service.js.map