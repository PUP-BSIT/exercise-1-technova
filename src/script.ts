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
// TODO (Barcelos, Kevin)
// TODO (Gomez, Hermione)
// TODO (Relente, Patricia Joy)
// TODO (Uy, Angelica Joy)