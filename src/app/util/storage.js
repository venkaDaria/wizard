"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Storage = (function () {
    function Storage() {
        this.components = [];
    }
    Storage.prototype.addIfNotExist = function (componentRef) {
        if (this.contains(componentRef))
            return;
        this.add(componentRef);
    };
    Storage.prototype.addAll = function (components) {
        components.forEach(this.addIfNotExist);
    };
    Storage.prototype.get = function (type) {
        return this.components.find(this.equals(type));
    };
    Storage.prototype.equals = function (type) {
        return function (comp) { return Storage.toType(comp) === type; };
    };
    Storage.toType = function (obj) {
        return obj.constructor.name;
    };
    Storage.prototype.contains = function (componentRef) {
        return this.components.some(this.equals(Storage.toType(componentRef)));
    };
    Storage.prototype.add = function (componentRef) {
        this.components.push(componentRef);
    };
    return Storage;
}());
exports.Storage = Storage;
exports.stepStorage = new Storage();
//# sourceMappingURL=storage.js.map