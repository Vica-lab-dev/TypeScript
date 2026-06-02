type Currency = "EUR" | "RSD";
type nameFormat = `${string} ${string}`;

interface OrderInterface {
    firstName: string,
    lastName: string,
    city: string,
    country: string,
    zip: number,
    product: string,
    amount: number,
    currency: Currency
}

function addOrder(fullName: nameFormat, cityAndCountry: string, zip: number, product: string, amount: number, currency: Currency): OrderInterface {
    const [firstName = "", lastName = ""] = fullName.split(" ");
    const [city = "", country = ""] = cityAndCountry.split(" ");

    return {
        firstName,
        lastName,
        city,
        country,
        zip,
        product,
        amount,
        currency
    };
}

const singleOrder = addOrder("Marko Markovic", "Kragujevac Serbia", 34000, "Laptop", 1, "EUR");
console.log(singleOrder);