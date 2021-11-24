const criarTarefaButton = document.getElementById('criar-tarefa');
criarTarefaButton.addEventListener('click', criadoraDeTarefa)

function criadoraDeTarefa () {
    let maisUmaTarefa = document.createElement('li');
    let listaDetarefas = document.getElementsByTagName('ol')[0]
    let inputTarefaText = document.getElementsByTagName('input')[0];

    listaDetarefas.appendChild(maisUmaTarefa)
    maisUmaTarefa.innerText = inputTarefaText.value;
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

function completed(evento) {
    const tarefaFeita =  document.querySelector('.acessoDinamico');
    evento.target.classList.toggle('completed')
}

let buttonEraseAll = document.querySelector('#apaga-tudo');
buttonEraseAll.addEventListener('click', eraseAll);
function eraseAll (evento){
    let deletLi = document.querySelectorAll('.acessoDinamico');
    for (let li of deletLi) {
        if (evento){
            li.outerHTML = ' '

        }
    }
    
}



