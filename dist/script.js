"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department;
(function (Department) {
    Department["HR"] = "Human Resources";
    Department["IT"] = "Information Technology";
    Department["SALES"] = "Sales";
    Department["MARKETING"] = "Marketing";
    Department["FINANCE"] = "Finance";
})(Department || (Department = {}));
// TODO (Andaya, Gener)
// TODO (Barcelos, Kevin)
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
        console.log(`Salary: ${this.salary}`);
    },
};
// TODO (Gomez, Hermione)
// TODO (Relente, Patricia Joy)
// TODO (Uy, Angelica Joy)
barcelos.print();
//# sourceMappingURL=script.js.map