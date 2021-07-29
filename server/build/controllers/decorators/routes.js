"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
var Methods_1 = require("./Methods");
require("reflect-metadata");
function routerBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routerBinder(Methods_1.Methods.get);
exports.put = routerBinder(Methods_1.Methods.put);
exports.post = routerBinder(Methods_1.Methods.post);
exports.del = routerBinder(Methods_1.Methods.del);
exports.patch = routerBinder(Methods_1.Methods.patch);
