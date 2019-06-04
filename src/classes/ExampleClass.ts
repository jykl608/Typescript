
export class ExampleClass {

    // private name: string = null;
    // private age: number;

    constructor(
        private name: string,
        private age?: number
    ){}

    public getName() {
        return this.name;        
    }

    public getAge() {
        return this.age;
    }
}
