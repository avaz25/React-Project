class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

//Sample students to register
const Neo = new Student("Neo", "neo@gmail.com", "New York");
const Trinity = new Student("Trinity", "trinity@gmail.com", "Chicago");
const Morpheus = new Student("Morpheus", "morpheus@gmail.com", "Los Angeles");

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        if (this.students.filter(duplicate => duplicate.email === studentToRegister.email).length) {
            console.log(`The email address ${studentToRegister.email} is already registered.`);
        } else {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name}."`);
        }
        return this.students;
    }
}

//Sample bootcamps
const webDevFund = new Bootcamp("Web Development Fundamentals", "Beginner");
const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced");