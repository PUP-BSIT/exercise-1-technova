enum Department {
    hr = "Human Resources",
    it = "Information Technology",
    sales = "Sales",
    marketing = "Marketing",
    finance = "Finance",
}

type Employee = {
    id: number;
    name: string;
    age?: number;
    department: Department;
    salary: number;
    print: () => void;
};

const andaya: Employee = {
    id: 1,
    name: "Andaya, Gener Jr., A.",
    age: 20,
    department: Department.hr,
    salary: 25000,
    print() {
        console.log(`-----Employee-----`);
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: $${this.salary}`);
    },
}

const barcelos: Employee = {
    id: 2,
    name: "Barcelos, Kevin Joseph V.",
    age: 20,
    department: Department.finance,
    salary: 20000,
    print() {
        console.log(`-----Employee-----`);
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: $${this.salary}`);
    },
};

const gomez: Employee = {
    id: 3,
    name: "Gomez, Ashley Hermione",
    age: 20,
    department: Department.sales,
    salary: 32000,
    print: function () {
        console.log(`--- Employee Profile ---`);
        console.log(`Id: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: $${this.salary}`);
    },
};

const relente: Employee = {
    id: 4,
    name: "Relente, Patricia Joy",
    age: 21,
    department: Department.marketing,
    salary: 12000,

    print: function () {
        console.log(`-----Employee-----`);
        console.log(`Id: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: $${this.salary}`);
    },
};

const uy: Employee = {
    id: 5,
    name: "Uy, Angelica Joy",
    age: 20,
    department: Department.it,
    salary: 25000,
    print: function () {
        console.log(`-----Employee-----`);
        console.log(`Id: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: $${this.salary}`);
    },
};

andaya.print();
barcelos.print();
gomez.print();
relente.print();
uy.print();