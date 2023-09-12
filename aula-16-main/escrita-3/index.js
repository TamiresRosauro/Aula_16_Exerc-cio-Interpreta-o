
/**
 * 
 * Repita o exerc�cio anterior, mas utilizando a estrutura de "switch/case".
 * 
 * Dica: Lembre-se que "switch/case" � como se fosse um "if", mas verifica somente igualdades estritas (===).
 * 
**/



let turnoAluno =  prompt("Digite o seu turno: 'M' (matutino), 'V' (vespertino), 'N' (noturno)" )
switch (turnoAluno){
    case 'M': 
        console.log("Bom Dia!")
        break
    case 'V': 
        console.log("Boa Tarde!")
        break
    case'N':
        console.log("Boa Noite!")
        break
    default:
        console.log("Turno não encontrado!") 
}