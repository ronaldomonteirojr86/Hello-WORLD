    let tarefas = [];    
    
    function adicionarTarefa (){
        const inputTarefa = document.getElementById("inputTarefa");
        let tarefa = inputTarefa.value.trim();

        const mensagem =  document.getElementById("mensagem");

    if (tarefa ==""){
        let mensagemErro = "Adicione uma tarefa válida!";
        mensagem.style.color = "red";
        mensagem.textContent = mensagemErro

    }else{
        let mensagemSucesso = "Tarefa adicionda com sucesso!";
        mensagem.style.color = "green";
        mensagem.textContent = mensagemSucesso;
        tarefas.push(tarefa);
        renderizarTarefas();

    }

        inputTarefa.value = "";
 
    }

    function renderizarTarefas() {
        let listaTarefas = document.getElementById("listaTarefas")
        listaTarefas.innerHTML = ""
    
    for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefas[i]
            
            let botaoRemover = document.createElement("button")
            botaoRemover.className = "remover"
            botaoRemover.textContent = "Remover"
            botaoRemover.onclick = () => removerTarefa(i)

            botaoEditar = document.createElement("button")
            botaoEditar.className = "editar"
            botaoEditar.textContent = "Editar"
            botaoEditar.onclick = () => editarTarefa(i)

            novaTarefa.appendChild(botaoEditar);
            novaTarefa.appendChild(botaoRemover);       
            listaTarefas.appendChild(novaTarefa);
        }
    }

    function removerTarefa(i) {
        tarefas.splice(i, 1)
        renderizarTarefas()
        }

    function editarTarefa(i) {
        let tarefaEditada = prompt ("Digite a nova tarefa:");
        if (tarefaEditada.trim() !== "") {
            tarefas[i] = tarefaEditada;
            renderizarTarefas();
        }

    }

    function limparLista() {
        tarefas.length = 0;
        renderizarTarefas();
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Lista limpa com sucesso!";
    }