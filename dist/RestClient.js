"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WellKnownMethods_1 = require("./WellKnownMethods");
var RestResponseBuilder_1 = require("./RestResponseBuilder");
var RestClient = /** @class */ (function () {
    function RestClient() {
    }
    RestClient.prototype.PostAsync = function (address, model) {
        return new RestResponseBuilder_1.RestResponseBuilder(address)
            .withBody(model)
            .withMethod(WellKnownMethods_1.WellKnownMethods.POST)
            .build();
    };
    RestClient.prototype.GetAsync = function (address) {
        return new RestResponseBuilder_1.RestResponseBuilder(address)
            .withMethod(WellKnownMethods_1.WellKnownMethods.GET)
            .build();
    };
    return RestClient;
}());
exports.RestClient = RestClient;
//# sourceMappingURL=RestClient.js.map