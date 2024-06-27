//Calculadora de Partidas Rankeadas:

let victNumber //Quantidade de vitórias
let loseNumber //Quantidade de derrotas
let rank //Ranks possíveis

let resultMatches = calcMatches(45, 10); //Calculando Pontuação
let playerRank = defineRank(rank); //Definindo o Rank do jogador.

function calcMatches(victNumber, loseNumber){ //Calcular Quantidade de Vitorias - Derrotas
    let matchesResult= victNumber - loseNumber
    return matchesResult
}

function defineRank(rank){ //Definir o rank do Herói
    if (resultMatches < 10){
        rank = "Ferro"
    } else if (resultMatches > 10 && resultMatches < 20){
        rank = "Bronze"
    } else if (resultMatches > 20 && resultMatches < 50){
        rank = "Prata"
    } else if (resultMatches > 50 && resultMatches < 80){
        rank = "Ouro"
    } else if (resultMatches > 80 && resultMatches < 90){
        rank = "Diamante"
    } else if (resultMatches > 90 && resultMatches < 100){
        rank = "Lendário"
    } else {
        rank = "Imortal"
    }
    return rank
}
//Exibindo o a mensagem e incluindo um laço de repetição:
do{   
    console.log("O Herói tem de saldo de " +resultMatches+ " e está no nível "+playerRank)
} while (resultMatches != resultMatches)
