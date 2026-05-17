export {};

interface CarInterface {
    brand: string,
    model: string,
    characteristics: string[]
}

const car: CarInterface = {
    brand: "Audi",
    model: "A6",
    characteristics: ["2000cc", "all wheel drive"]
}