"use strict";
const persons = [
    {
        name: `Max Mustermann`,
        age: 25,
        occupation: `Chimney sweep`,
    },
    {
        name: `Jane Doe`,
        age: 32,
        role: `Administrator`,
    },
    {
        name: `Kate Muller`,
        age: 23,
        occupation: `Astronaut`,
    },
    {
        name: `Bruce Willis`,
        age: 64,
        role: `World saver`,
    },
];
function logPerson(person) {
    let additionalInformation;
    if ("role" in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
}
persons.forEach(logPerson);
