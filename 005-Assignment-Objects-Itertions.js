const kisiler = [
    {
        name: 'Ahmet',
        surname: 'Can',
        job: 'developer',
        age: 30,
    },
    {
        name: 'Mehmet',
        surname: 'Baki',
        job: 'tester',
        age: 35,
    },
    {
        name: 'Nur',
        surname: 'Ersan',
        job: 'team lead',
        age: 40,
    },
    {
        name: 'Merve',
        surname: 'Veli',
        job: 'developer',
        age: 26,
    },

    {
        name: 'Ruzgar',
        surname: 'Kuzey',
        job: 'tester',
        age: 24,
    },
];

//* Example1: Print the "job" in the kisiler array one by one.
kisiler.forEach((kisi) => console.log(kisi.job));

//* Example2: Increment the ages by one and store them in a new array.
const yaslar = kisiler.map((kisi) => kisi.age + 1);
console.log(yaslar);

//* Example3: Write the code that combines name and surnames and converts them to uppercase letters and stores it as the name key, at the same time increases the age values by 5 and stores them in the age key and returns the resulting string.

const kisilerFullIsim = kisiler.map((kisi) => ({
    fullname: kisi.name.toUpperCase() + ' ' + kisi.surname.toUpperCase(),
    age: kisi.age + 5,
}));

//! The examples above are examples that instructor noah showed and solved in class
//! on below starting to solve The Assignment:

console.log(`Example 4`);
//* Example 4: List the names(name) of people whose age(age) is younger than 33.

const nameLess33 = kisiler.filter((ageLess33) => ageLess33.age < 33).forEach((nameLessThan33) => console.log(nameLessThan33.name));

console.log(`Example 5`);
//*Example 5: Hide the names of those younger than 33 years old in the array
const nameLess33Array = kisiler.filter((ageLess33) => ageLess33.age < 33).map((nameLessThan33) => nameLessThan33.name);
console.log(nameLess33Array);

console.log(`Example 6`);
//* Example6: Save the names and ages of the developers in the new series as a new Object.

const developerObject = kisiler.filter((jop) => jop.job == "developer").map((kisi) => (
    {
        name: kisi.name,
        age: kisi.age
    }
));
console.log(developerObject);