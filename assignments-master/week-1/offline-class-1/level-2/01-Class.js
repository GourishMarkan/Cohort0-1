class Animal {
  Animal(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  static myType() {
    console.log("Animal");
  }
  describe() {
    console.log(`${this.name} has ${this.legCount} legs`);
  }
}
let dog = new Animal("ram", "4");
dog.describe();
Animal.myType();
