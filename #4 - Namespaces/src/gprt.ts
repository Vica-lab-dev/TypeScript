// Generics

function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(getFirst(numbers));

const names = ["Vica", "Marko"];
console.log(getFirst(names));

const expenses = [
    {name: "PC", amount: 2000},
    {name: "Food", amount: 20},
];
console.log(getFirst(expenses));




//Record

const userInfo: Record<string, any> = {
    name: "Vica",
    age: 28,
    roles: ["admin", "user"]
};

const students: Record<string, number> = {
    Vica: 4,
    Marko: 4,
    Toma: 5,
};

type Role = "admin" | "editor" | 'guest';

const permissions: Record<Role, boolean> = {
    admin: true,
    editor: false,
    guest: false
};



// Partial

interface Property {
    name: string;
    address: string;
    city: string;
    price: number;
}

const house: Partial<Property>[]= [
    {name: "Red House", address: "Belong 23", city: "Rio", price: 2000000},
    {name: "Blue House", address: "Dest 53", city: "Monaco"}
];


type roles = "admin" | "moderator" | "guest";

const rolesPermissions: Partial<Record<roles, boolean>> = {
    admin: true,
    guest: false
}