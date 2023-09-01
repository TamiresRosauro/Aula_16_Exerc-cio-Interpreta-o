
// Leia o c�digo

const respostaDoUsuario = prompt("Digite o n�mero que voc� quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("N�o passou no teste.")
}

// a) Explique o que o c�digo faz. Qual o teste que ele realiza?
/** Verifica SE o número é par. Multiplica o numero por 2 se o resto for igual a zero o numero é par. 
 * Senão for igual a zero, numero não é par. 
 */

// b) Para que tipos de n�meros ele imprime no console "Passou no teste"?
/** Somente para numeros pares divisiveis por dois com resto zero.

// c) Para que tipos de n�meros a mensagem � "N�o passou no teste"?
Para números não pares com resto diferente de zero*/
