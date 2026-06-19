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
}