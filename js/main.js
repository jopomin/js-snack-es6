var bikes = [
    {
        "team": "Rossa",
        "weight": 745
    },
    {
    "team": "Bianca",
    "weight": 720
    },
    {
    "team": "Nera",
    "weight": 815
    },
    {
    "team": "Argento",
    "weight": 780
    },
    {
    "team": "Oro",
    "weight": 835
    },
    {
    "team": "Platino",
    "weight": 795
    },
];

bikes.sort(function(bike1, bike2) {
    if (bike1.weight < bike2.weight) return -1;
    else if (bike1.weight > bike2.weight) return 1;
    else return 0;
});

var {team, weight} = bikes[0];
console.log(`
la bici più leggera è ${team} dal peso di ${weight} grammi.
`);


const genRand = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

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
];


teams.forEach(team => {
    team.points = genRand(75,95);
    team.fouls = genRand(300,400);
    console.log(team.name, team.fouls);
});


