import { ExampleClass } from './classes/index';
import { sayHello } from './greet';

function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}

console.log( sayHello("TypeScript")  );

// hello('TypeScript');
var example = new ExampleClass('Jake');
console.log(example.getName());

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

setTimeout(() => {
    showHello("greeting", "TypeScript");
}, 3000);
