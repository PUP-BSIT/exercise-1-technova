var Department;
(function (Department) {
    Department["HR"] = "Human Resources";
    Department["IT"] = "Information Technology";
    Department["SALES"] = "Sales";
    Department["MARKETING"] = "Marketing";
    Department["FINANCE"] = "Finance";
})(Department || (Department = {}));
// TODO (Andaya, Gener)
const barcelos = {
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
        console.log(`Salary: $${this.salary}`);
    },
};
const gomez = {
    id: 3,
    name: "Gomez, Ashley Hermione",
    age: 20,
    department: Department.SALES,
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
const relente = {
    id: 4,
    name: "Relente, Patricia Joy",
    age: 21,
    department: Department.MARKETING,
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
const uy = {
    id: 5,
    name: "Uy, Angelica Joy",
    age: 20,
    department: Department.IT,
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
barcelos.print();
gomez.print();
relente.print();
uy.print();
export {};
//# sourceMappingURL=script.js.map