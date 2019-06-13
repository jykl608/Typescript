
export class ExampleClass {

    // private name: string = null;
    // private age: number;

    private lastName: string;

    constructor(
        private name: string,
        private age?: number
    ){}

    public setLastName(lastName: string ) : void {
        this.lastName = lastName;
    }

    public getLastName() : string {
        return this.lastName;
    }

    public getName() : string {
        return this.name;        
    }

    public getAge() : number {
        return this.age;
    }
}
