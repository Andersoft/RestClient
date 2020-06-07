"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultDiscriminator_1 = require("../ResultDiscriminator");
var rxjs_1 = require("rxjs");
function either(success, failure) {
    this.subscribe({
        next: function (result) {
            switch (result.type) {
                case ResultDiscriminator_1.ResultDiscriminator.Success:
                    success(result.value);
                    break;
                default:
                    failure(result);
                    break;
            }
        }
    });
}
rxjs_1.Observable.prototype.either = either;
//# sourceMappingURL=observable.extensions.js.map