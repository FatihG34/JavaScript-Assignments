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