const criarTarefaButton = document.getElementById('criar-tarefa');
criarTarefaButton.addEventListener('click', criadoraDeTarefa)
let lista = document.getElementsByTagName('ol')[0];


function criadoraDeTarefa () {
    let maisUmaTarefa = document.createElement('li');
    let inputTarefaText = document.getElementsByTagName('input')[0];
    lista.appendChild(maisUmaTarefa)
    maisUmaTarefa.innerText = inputTarefaText.value;
    //acessoDinamico - cria acesso dinâmico às li's para manipulação pelo DOM.
    maisUmaTarefa.classList = 'acessoDinamico'
    inputTarefaText.value = ""

maisUmaTarefa.addEventListener('click', colorGrey);
maisUmaTarefa.addEventListener('dblclick', completed)

// function colorGrey (evento) {
//     if (evento.target) {
//         maisUmaTarefa.style.backgroundColor = "rgb(128,128,128)"
    
//     }
// }
function colorGrey (evento) {
    const itemDaLista = document.querySelector('.acessoDinamico');
    itemDaLista.classList.remove('acessoDinamico')
    itemDaLista.classList.remove('grayColor');
    evento.target.classList.add('grayColor');
    evento.target.classList.add('acessoDinamico')
}

}
//--------------tarefas completas -------
function completed(evento) {
    console.log(evento.target.classList.toggle('completed'))

}

//---------apaga tudo -------------------

let buttonEraseAll = document.querySelector('#apaga-tudo');
buttonEraseAll.addEventListener('click', eraseAll);
function eraseAll() {
    let listaLi  = document.querySelectorAll('.acessoDinamico')
    
    for (let index = 0; index < listaLi.length ; index +=1) {
        listaLi[index].remove()
    }
}
//-------------- Adicione botão 'remover-finalizados---
const buttonErasefinal = document.querySelector('#remover-finalizados');
buttonErasefinal.addEventListener('click', erasePart)
function erasePart (){
    let listaLi  = document.querySelectorAll('.completed')
    
    for (let index = 0; index < listaLi.length ; index +=1) {
        listaLi[index].remove()
    }
}


    




    
    
    

