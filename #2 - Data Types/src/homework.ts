const mainDiv: HTMLElement = document.querySelector("#orderList")!;

const orders: OrderInterface[] = [];

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

function listOrders(orderList: OrderInterface[]): void {
    orderList.forEach(item => {
        const singleOrder: HTMLDivElement = document.createElement("div");

        const singleOrderTitle: HTMLHeadingElement = document.createElement("h1");
        singleOrderTitle.textContent = item.firstName + " " + item.lastName;

        const locationParagraph: HTMLParagraphElement = document.createElement("p");
        locationParagraph.textContent = item.city + ", " + item.country;

        const productParagraph: HTMLParagraphElement = document.createElement("p");
        productParagraph.textContent = item.product;

        const priceSpan: HTMLSpanElement = document.createElement("span");
        priceSpan.textContent = `${item.amount}`;

        singleOrder.append(singleOrderTitle, locationParagraph, productParagraph, priceSpan);
        mainDiv.append(singleOrder);
    });
}

const singleOrder = addOrder("Marko Markovic", "Kragujevac Serbia", 34000, "Laptop", 1, "EUR");
const secondOrder = addOrder("Pera Prokic", "Beograd Serbia", 11000, "Monitor", 3, "RSD");
orders.push(singleOrder, secondOrder);

listOrders(orders);

function search(product: string) {
    orders.forEach(item => {
        if(item.product === product) {
            const div: HTMLDivElement = document.createElement("div");

            const productTitle: HTMLHeadingElement = document.createElement("h1");
            productTitle.textContent = item.product;

            div.append(productTitle);
            mainDiv.append(div);
        }
    });
}

search("Laptop");