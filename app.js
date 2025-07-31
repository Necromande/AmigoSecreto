//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista = [];
let sorteado = "";
let texto = '';
let condicion = 1;
function mostrarLista(){
    let compo = document.querySelector('p');
    compo.innerHTML = lista.join('<br>');
}
function pegarTag(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
}

function adicionarAmigo(){
    lista.push(document.querySelector('input').value);
    console.log(lista);
    document.querySelector('input').value = '';
    mostrarLista();
}
function sortearAmigo(){
   if(condicion>0){
    let pessoas = lista.length;
    let aleatorio = parseInt(Math.random() * pessoas);
    console.log(lista[aleatorio]);
    texto = lista[aleatorio];
    pegarTag('p',texto);
    pegarTag('.button-draw','Sortear Novamente');
    condicion = 0;
}else{
    pegarTag('.button-draw','Sortear amigo secreto');
    pegarTag('p','');
    lista.length = 0;
    condicion = 1;
}
    
}
