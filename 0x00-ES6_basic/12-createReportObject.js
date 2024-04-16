import createEmployeesObject from "./11-createEmployeesObject"
export default function createReportObject(employeesList) {
    return {
        allEmployees: employeesList.map((value, index) => value[createEmployeesObject.departmentName], value[createEmployeesObject.employees]),
        getNumberofDepartments(){
            return length()
        }
    }

}