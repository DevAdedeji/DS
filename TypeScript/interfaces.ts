interface Person {
    name: string,
    age: number
}

function printName(person: Person) {
    console.log(person.name);
}

printName({ name: 'Adedeji', age: 10 })