/* var bikes = [
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
`); */

var teams = [
    {
        "name": "Juventus",
        "points": 0,
        "fouls": 0 
    },
    {
        "name": "Inter",
        "points": 0,
        "fouls": 0 
    },
    {
        "name": "Milan",
        "points": 0,
        "fouls": 0 
    },
    {
        "name": "Atalanta",
        "points": 0,
        "fouls": 0 
    },
    {
        "name": "Napoli",
        "points": 0,
        "fouls": 0 
    },
    {
        "name": "Roma",
        "points": 0,
        "fouls": 0 
    }
],

var numR;

function genRand(min, max) {
    var numR = Math.floor(Math.random()*(max-min+1)+min);
    return numR;
}

for(var i = 0; i < teams.length; i++) {
    teams[i].points = genRand(75,95);
    teams[i].fouls = genRand(300,400);
}

var {name, fouls} = teams;
console.log(name, fouls);