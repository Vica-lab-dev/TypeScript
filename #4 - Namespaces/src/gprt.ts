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
};

type Fields = "username" | "email" | "password";

const updateFields: Partial<Record<Fields, any>>  = {
    email: 5,
    password: "test123"
};



// KeyOf - const A je kljuc iz nekog drugog podatka (interface A)

interface UserInfo {
    email: string,
    name: string,
    age: number
}

//Nesto keyof UserInfo -> "Nesto je ustvari neki kljuc is UserInfo"
type UserKey = keyof UserInfo; // UserKey = "email" | "name" | "age";


const userData: UserInfo = {
    email: "vica@gmail.com",
    name: "Vica P",
    age: 28
}

function getUserKeyValue<UserInfo, K extends keyof UserInfo>(data: UserInfo, key: K): UserInfo[K] {
    return data[key];
}

getUserKeyValue(userData, "email")



//Required -> Svaki podatak je obavezan

interface Bank {
    amount: number,
    accountName: string,
    blocked?: boolean // ? -> opcionalan
}

const myAccount: Required<Bank> = {
    amount: 5000,
    accountName: "Devise",
    blocked: true,
}