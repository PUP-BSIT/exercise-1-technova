enum Department {
    HR = "Human Resources",
    IT = "Information Technology",
    SALES = "Sales",
    MARKETING = "Marketing",
    FINANCE = "Finance",
}

type Employee = {
    id: number;
    name: string;
    age?: number;
    department: Department;
    salary: number;
    print: () => void;
};

// TODO (Andaya, Gener)
const barcelos: Employee = {
    id: 2,
    name: "Barcelos, Kevin Joseph V.",
    age: 20,
    department: Department.FINANCE,
    salary: 20000,
    print() {
        console.log(`-----Employee-----`);
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: ${this.salary}`);
    },
}

// TODO (Gomez, Hermione)
// TODO (Relente, Patricia Joy)
// TODO (Uy, Angelica Joy)

barcelos.print();