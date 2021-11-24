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




