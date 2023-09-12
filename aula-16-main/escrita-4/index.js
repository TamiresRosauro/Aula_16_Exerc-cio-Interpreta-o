
/**
 * 
 * Considere a situa��o
 * 
 * Voc� vai ao cinema com um amigo ou amiga, por�m ele/ela s� assistir� a um filme com voc� se ele for do g�nero 
 * fantasia e se o ingresso custar menos de 15 reais.
 * 
 * Fa�a um c�digo que pergunta ao usu�rio qual o g�nero de filme que v�o assistir e outra pergunta sobre 
 * o pre�o do ingresso, ent�o verifique se seu amigo ou amiga vai topar assistir o filme.
 * 
 * Caso positivo, imprima no console a mensagem: "Bom filme!", caso contr�rio, imprima "Escolha outro filme :(".
 * 
**/


let generoFilme = prompt("Qual é o gênero do filme?")
let precoIngresso = prompt("Qual é preço do ingresso?")

if (generoFilme === "fantasia" && precoIngresso < 15){
       console.log("Bom filme :)")
}
    else {      
        console.log("Escolha outro filme :(")          
}
