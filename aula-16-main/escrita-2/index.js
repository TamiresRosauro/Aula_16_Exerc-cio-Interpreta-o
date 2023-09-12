
/**
 * 
 * Fa�a um programa que verifica que turno do dia um aluno estuda.
 * 
 * Pe�a para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). 
 * Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".
 * 
**/


const turnoAluno = prompt("Digite o seu turno: 'M' (matutino), 'V' (vespertino), 'N' (noturno)" )

if (turnoAluno === 'M'){
    console.log("Bom Dia!")
}
else if (turnoAluno === 'V'){
    console.log("Boa Tarde!")
}
else if (turnoAluno === 'N'){
    console.log("Boa Noite!") 
}
else {
    console.log("Turno não encontrado!")
}

