// Write an interface named Student that accepts the following elements:
// firstName(string), lastName(string), age(number), and location(string)

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string

}

// Creating two students
const student1: Student = {
    firstName: 'Felix',
    lastName: 'Opuge',
    age: 25,
    location: 'Nairobi'
}

const student2: Student = {
    firstName: 'Roy',
    lastName: 'Aloo',
    age: 24,
    location: 'Kisumu'
}

// Creating the two arrays containing students 1 and 2
const studentsList: Student[] = [student1, student2]

// Function to render the table
function renderTable(): void {

    //Get body element
    const body = document.getElementById('body')

    // Create a table element
    const table = document.createElement('table')

    // Create the table header row
    const headerRow = document.createElement('tr')

    // Define the table headers
    const headers = ['First Name', 'Location'];

    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header)
    });

    //Append the header row to the table
    table.appendChild(headerRow)

    //Append a row for each student with only first name and location
    studentsList.forEach(student => {
        const row = document.createElement('tr');

        // Create cells for first name and location
        const fNameCell = document.createElement('td');
        fNameCell.textContent = student.firstName;
        row.appendChild(fNameCell);

        const locCell = document.createElement('td');
        locCell.textContent = student.location;
        row.appendChild(locCell);

        // Append the row to the table
        table.appendChild(row)
    })

    //Append table to the body
    body.appendChild(table)
}