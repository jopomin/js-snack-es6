var bikes = [
    {
        "name": "Rossa",
        "weight": 745
    },
    {
    "name": "Bianca",
    "weight": 720
    },
    {
    "name": "Nera",
    "weight": 815
    },
    {
    "name": "Argento",
    "weight": 780
    },
    {
    "name": "Oro",
    "weight": 835
    },
    {
    "name": "Platino",
    "weight": 795
    },
];

bikes.sort(function(bike1, bike2) {
    if (bike1.weight < bike2.weight) return -1;
    else if (bike1.weight > bike2.weight) return 1;
    else return 0;
});

var {name, weight} = bikes[0];
console.log(`
la bici più leggera è ${bikes[0].name} dal peso di ${bikes[0].weight} grammi.
`);