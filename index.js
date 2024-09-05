let nome = "Felipão";
let nivelDeXp = 10001;

if (nivelDeXp <= 1000) {
    console.log("ferro");
} else if (nivelDeXp >= 1001 && nivelDeXp <= 2000) {
    console.log("bronze");
} else if (nivelDeXp >= 2001 && nivelDeXp <= 5000) {
    console.log("prata");
} else if (nivelDeXp >= 5001 && nivelDeXp <= 7000) {
    console.log("ouro");
} else if (nivelDeXp >= 7001 && nivelDeXp <= 8000) {
    console.log("platina");
} else if (nivelDeXp >= 8001 && nivelDeXp <= 9000) {
    console.log("ascendente");
} else if (nivelDeXp >= 9001 && nivelDeXp <= 10000) {
    console.log("imortal");
} else if (nivelDeXp >= 10001) {
    console.log("radiante");
}

console.log("O herói de nome " + nome + " está no nível " + nivelDeXp);
