type Currency = "EUR" | "RSD";
type nameFormat = `${string} ${string}`;

/**
 * Nase pravilo: ExactlyTwoWords
 * <S extends string>: S = Nasledjuje pravila stringa
 * S extends `${infer First} ${infer Second}`: Podelili smo validaciju u dva dela, First, Second [string, string]
 * Second extends `${string} ${string} -> Da li drugi deo (Marko Markovic) sadrzi nesto posle drugog stringa
 *  First extends `${string} ${string}` -> Da li prvi deo ima razmak, ako ima - never, ako nema onda S validacija...
 */

type ExactlyTwoWords<S extends string> =
    S extends `${infer First} ${infer Second}`
        ? Second extends `${string} ${string}`
        ? never
        :
        First extends `${string} ${string}`
            ? never
            : S
        : never;

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