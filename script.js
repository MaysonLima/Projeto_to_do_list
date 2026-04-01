/*
A fazer:

[X] Botão funcionar
[X] Pegar conteudo do input e criar li
[X] Apagar conteudo
[] Marcar como concluida
[] Adicionar filtros
[] Salvar no Local Storage

Anotação para mim mesmo: É uma auto-referência curiosa fazer uma lista de tarefas dentro de uma lista de tarefas...


*/

function adicionarTarefa(){
    let input = document.querySelector("input").value
    let li = document.createElement("li")
    li.innerHTML = input + "<span onclick = 'deletarTarefa(this)'>🗑️</span>"

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ''
}

function deletarTarefa(li){
    li.parentElement.remove()
}

