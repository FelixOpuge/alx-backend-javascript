interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Defining the Employee type that can be either Director or Teacher
type Employee = Director | Teacher;

// Implementing the createEmployee function
function createEmployee(salary: string | number): Employee {
    if (typeof salary  == "number" && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

// Implement the isDirector type predicate function
function isDirector(employee: Employee): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Employee): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

type Subjects = 'Maths' | 'History'

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Maths') {
        return 'Teaching Math'
    }
    if (todayClass === 'History') {
        return 'Teaching History'   
    }
}