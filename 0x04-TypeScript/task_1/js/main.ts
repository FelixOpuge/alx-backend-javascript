interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [index: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

//Define printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`
}

//Interface constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): Student
}

//Interface for the class
interface Student {
    workOnHomework(): string;
    displayName(): string
}

//Define a class named StudentClass
class StudentClass implements Student{
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    //Function to ret message about working on homework
    workOnHomework(): string {
        return 'Currently Working';
    }

    //Function to return the firs tname of the student
    displayName(): string {
        return this.firstName
    }
}

// Constructor Interface
const Student: StudentConstructor = StudentClass