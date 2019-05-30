import { ExampleClass } from './classes/index'

const example: ExampleClass = new ExampleClass('Jake', 18);

function greeting(name: string, age?: number) {
    return 'Hello, ' + name;
};

greeting('Jake');
