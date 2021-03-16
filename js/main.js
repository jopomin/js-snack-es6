/* var bikes = [
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


 */

const COLORS = ["giallo", "verde", "blu", "acquamarina", "viola", "carminio", "beige", "senape"];

const NUMB = Math.floor(Math.random()*(COLORS.length-1)+1);
console.log(NUMB);
const NUMA = Math.floor(Math.random()*(NUMB-1));
console.log(NUMA);

/* function range(array, min, max) {
var arRange = [];
array.forEach((element, index) => {
    if (index >= min && index <= max) {
        arRange.push(element);   
    }
});
return arRange;
}

var arDiff = range(COLORS, NUMA, NUMB);
console.log(arDiff); */

function range(array, min, max) {
    var arRange = array.filter((element, index) => (index >= min && index <= max));
    return arRange;
}

var arDiff = range(COLORS, NUMA, NUMB)
console.log(arDiff);
