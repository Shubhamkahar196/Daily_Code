
// defining interface
interface User1 {
    name: string,
    age: number,
}

// defining types
// diference = same as interface
type User2 = {
    name: string,
    age: number
}

//unions and intersections -> work in types and not work in interface

// intersections

type Employee = { 
    employeeName: string; 
    startDate: string; 
}

type Managers = { 
    managerName: string; 
    department: string; 
}

type TeamLead = Employee & Managers;

let e: Employee = { 
    employeeName: "Shubham", 
    startDate: "01-10-2025" 
}

let m: Managers = { 
    managerName: "shubh", 
    department: "Computer", 
}

let teamLead: TeamLead = {
    employeeName: "Shubham",
    startDate: "01-10-2025",
    managerName: "shubh",
    department: "Computer",
}


// Union

type GoodUser = {
    name: string;
    gift: string;
}

type BadUser = {
    name: string;
    ip: string;
}

type User4 = GoodUser | BadUser;

const users: User4 ={
name: "SHubham",
ip: "asdasd",
gift: "12324",
}

