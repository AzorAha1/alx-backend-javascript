interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}
let student1: Student = {
    firstName: 'Erling',
    lastName: 'Haaland',
    age: 23,
    location: 'Norway'
}

let student2: Student = {
    firstName: 'Jude',
    lastName: 'Bellingham',
    age: 20,
    location: 'England'
}

let studentsList: Student[] = [student1, student2]

let table = document.createElement('table')

for (let student of studentsList){
    let row = table.insertRow()

    let firstNamecell = row.insertCell()
    firstNamecell.textContent = student.firstName

    let locationcell = row.insertCell()
    locationcell.textContent = student.location
}
document.body.append(table)