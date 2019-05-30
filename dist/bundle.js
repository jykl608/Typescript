(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExampleClass_1 = require("./ExampleClass");
exports.ExampleClass = ExampleClass_1.ExampleClass;

},{"./ExampleClass":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./classes/index");
var example = new index_1.ExampleClass('Jake', 18);
function greeting(name, age) {
    return 'Hello, ' + name;
}
;
greeting('Jake');

},{"./classes/index":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xhc3Nlcy9FeGFtcGxlQ2xhc3MudHMiLCJzcmMvY2xhc3Nlcy9pbmRleC50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTtJQUVJLCtCQUErQjtJQUMvQix1QkFBdUI7SUFFdkIsc0JBQ1ksSUFBWSxFQUNaLEdBQVc7UUFEWCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUNyQixDQUFDO0lBRUksOEJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG9DQUFZOzs7OztBQ0R6QiwrQ0FBOEM7QUFBckMsc0NBQUEsWUFBWSxDQUFBOzs7OztBQ0FyQix5Q0FBOEM7QUFFOUMsSUFBTSxPQUFPLEdBQWlCLElBQUksb0JBQVksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFM0QsU0FBUyxRQUFRLENBQUMsSUFBWSxFQUFFLEdBQVk7SUFDeEMsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzVCLENBQUM7QUFBQSxDQUFDO0FBRUYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5leHBvcnQgY2xhc3MgRXhhbXBsZUNsYXNzIHtcblxuICAgIC8vIHByaXZhdGUgbmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICAvLyBwcml2YXRlIGFnZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmFtZTogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIGFnZTogbnVtYmVyXG4gICAgKXt9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTsgICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFnZTtcbiAgICB9XG59XG4iLCJleHBvcnQgeyBFeGFtcGxlQ2xhc3MgfSBmcm9tICcuL0V4YW1wbGVDbGFzcyc7IiwiaW1wb3J0IHsgRXhhbXBsZUNsYXNzIH0gZnJvbSAnLi9jbGFzc2VzL2luZGV4J1xuXG5jb25zdCBleGFtcGxlOiBFeGFtcGxlQ2xhc3MgPSBuZXcgRXhhbXBsZUNsYXNzKCdKYWtlJywgMTgpO1xuXG5mdW5jdGlvbiBncmVldGluZyhuYW1lOiBzdHJpbmcsIGFnZT86IG51bWJlcikge1xuICAgIHJldHVybiAnSGVsbG8sICcgKyBuYW1lO1xufTtcblxuZ3JlZXRpbmcoJ0pha2UnKTtcbiJdfQ==
