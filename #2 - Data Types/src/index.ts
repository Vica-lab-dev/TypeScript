/**
 * PRIMITIVE TYPES:
 * -Number
 * -String
 * -Boolean
 * -Bigint
 * -Symbol
 * -Null & unefined
 *
 * OBJECT TYPES:
 * -Objects
 * -Arrays
 * -Tuples [string, number]
 * -Enums
 *
 * SPECIAL TYPES:
 * -Any (iskljucuje proveru)
 * -Unknown
 *
 * FUNCTIONS:
 * -Void (neka funkcija koja ne vraca nista - nema return)
 * -Never (Kod koda koji se nece izvrsiti)
 *
 * -------------------------------------------------------
 * -Union Types: string|number
 * -Intersection types: spajamo tipove u jedan
 * -Literal types
 * -Interface
 */

function sayHello(message: string|number): void
{
    console.log(message);
}

sayHello("Vica");
sayHello(5);

function add(a: number, b:number): number {
    return a + b;
}

add(1, 2);

function addRide(location: string, length: number): string {
    return `Finished a ride from ${location} and it took ${length} kilometers`;
}