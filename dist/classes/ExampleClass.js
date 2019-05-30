"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExampleClass = /** @class */ (function () {
    // private name: string = null;
    // private age: number;
    function ExampleClass(name, age) {
        this.name = name;
        this.age = age;
    }
    ExampleClass.prototype.getName = function () {
        return this.name;
    };
    ExampleClass.prototype.getAge = function () {
        return this.age;
    };
    return ExampleClass;
}());
exports.ExampleClass = ExampleClass;
