class Dog{
    constructor(name){
        this._name = name;
    }

    introduce(){
        console.log("This is "+ this._name + " !");
    }

    static bark(){ //static method เรียกใช้ในลักษณะ class
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();

Dog.bark();