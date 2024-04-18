var student1 = {
    firstName: 'Erling',
    lastName: 'Haaland',
    age: 23,
    location: 'Norway'
};
var student2 = {
    firstName: 'Jude',
    lastName: 'Bellingham',
    age: 20,
    location: 'England'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var row = table.insertRow();
    var firstNamecell = row.insertCell();
    firstNamecell.textContent = student.firstName;
    var locationcell = row.insertCell();
    locationcell.textContent = student.location;
}
document.body.append(table);
