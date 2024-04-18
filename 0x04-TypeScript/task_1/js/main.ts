interface Teacher {
    readonly firstName: string,
    readonly lastName: string   
    fullTimeEmployee: boolean
    yearsOfExperience?: boolean
    location: string
    [key : string]: any
}