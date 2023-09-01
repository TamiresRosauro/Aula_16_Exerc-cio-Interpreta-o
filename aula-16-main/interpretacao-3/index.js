
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?
//Pede para o usuario digitar um numero

// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?
// Se o usuário digitar 10 aparecerá no terminal a mensagem: "Esse numero passou no teste, se o numero for -10 aparece a mensagem: is not defined "


// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Haverá um erro no console pq a variavel "mensagem" está dentro do If, ou seja, funciona apenas dentro desse bloco e quando tentar acessar fora do bloco,
// vai dar erro pq a variavel mensagem nao acessa fora do bloco do If. 
 