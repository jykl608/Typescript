(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var ExampleClass = function () {
    // private name: string = null;
    // private age: number;
    function ExampleClass(name, age) {
        _classCallCheck(this, ExampleClass);

        this.name = name;
        this.age = age;
    }

    _createClass(ExampleClass, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getAge",
        value: function getAge() {
            return this.age;
        }
    }]);

    return ExampleClass;
}();

exports.ExampleClass = ExampleClass;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExampleClass_1 = require("./ExampleClass");
exports.ExampleClass = ExampleClass_1.ExampleClass;

},{"./ExampleClass":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./classes/index");
var greet_1 = require("./greet");
function hello(compiler) {
    console.log("Hello from " + compiler);
}
console.log(greet_1.sayHello("TypeScript"));
// hello('TypeScript');
var example = new index_1.ExampleClass('Jake');
console.log(example.getName());
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
setTimeout(function () {
    showHello("greeting", "TypeScript");
}, 3000);

},{"./classes/index":2,"./greet":3}]},{},[4])

//# sourceMappingURL=bundle.js.map
