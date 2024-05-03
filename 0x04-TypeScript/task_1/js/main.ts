interface Teacher {
    readonly firstName: string,
    readonly lastName: string   
    fullTimeEmployee: boolean
    yearsOfExperience?: boolean
    location: string
    [key : string]: any
}

interface Directors extends Teacher{
    numberOfReports: number
}

function printTeacher(firstname:string, lastName: string): string {
    return `${firstname} ${lastName}`
}

interface printTeacherFucnction {
    (firstName: string, lastName: string): string
}

class StudentClass {
    constructor(firstName: string, lastName: string) {
        firstName = firstName
        lastName = lastName
    }
    workOnHomework(){
        return 'Currently working'
    }
    displayName(){
        return student
    }
}