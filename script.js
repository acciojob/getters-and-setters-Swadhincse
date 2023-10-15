class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    study() {
        document.getElementById("output").textContent = this.name + " is studying";
    }
}

class Teacher extends Person {
    teach() {
        document.getElementById("output").textContent = this.name + " is teaching";
    }
}

// Example usage:
const student1 = new Student("Alice", 20);
const teacher1 = new Teacher("Mr. Smith", 35);

student1.study();  // Output: Alice is studying
teacher1.teach();  // Output: Mr. Smith is teaching
