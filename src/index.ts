let num: number = 10; // Assigning a num variable type of number

let numbers: number[] = []; // Assigning array with type number 

let user: [number, string] = [1, "Mike"] // Assigning a tuple, option to create a pair with predifined types

// Annotation for function params and return values

// Function is returning a number

function calculateTax(income: number): number {
    return 1
}

// Function is not returning anything

function calculateTax(income: number): void {
}

// Function with default value in param, which make this argument also an optional

function calculateTax(income: number, taxYear = 2022): void {
}

// ? sign after varialbe name makes it optional 

// Annonation of the object with optional param

// readonly makes variable not possible to reassing 

let employee: {
    readonly id: number,
    name?: string
} = { id = 1 }

employee.name = 'Mike'

// Custom types or type allias

type Employee = {
    readonly id: number,
    name: string,
    date: Date,
    method: (data: string[]) => void
}

let new_employee: Employee = {
    id: 2,
    name: "Viktor",
    date: new Date('December 17, 1995 03:24:00'),
    method: (data: string[]) => {
        console.log("Hello new day")
    }
}

// Union types 
// Need for provide multiple types 

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        weight += 10
        return weight
    } else {
        return parseInt(weight)
    }
}

// Combining types (Intersection) = Type 1 & Type 2

// Literal (exact, specific) value, in this example varialbes with type Quantity can be only 50 or 100. 

type Quantity = 50 | 100;

let quantity: Quantity = 100;

// Optianal call 

let log: any = null;
log?.('a')
