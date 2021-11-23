const criarTarefaButton = document.getElementById('criar-tarefa');



criarTarefaButton.addEventListener('click', criadoraDeTarefa)


function criadoraDeTarefa () {
    let maisUmaTarefa = document.createElement('li');
    let listaDetarefas = document.getElementsByTagName('ol')[0]
    let inputTarefaText = document.getElementsByTagName('input')[0];

    listaDetarefas.appendChild(maisUmaTarefa)
    maisUmaTarefa.innerText = inputTarefaText.value;
    inputTarefaText.value = ""
}




