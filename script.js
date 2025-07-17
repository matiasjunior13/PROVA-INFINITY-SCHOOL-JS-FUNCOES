let tarefas = [];


const adicionarTarefa = function(descricao) {
    tarefas.push(descricao);
    alert(`Tarefa "${descricao}" adicionada!`);
};


const listarTarefas = () => {
    if (tarefas.length === 0) {
        alert("Nenhuma tarefa encontrada!");
        return;
    }
    
    let lista = "Lista de Tarefas:\n";
    tarefas.forEach((tarefa, indice) => {
        lista += `${indice + 1}. ${tarefa}\n`;
    });
    alert(lista);
};


const executarOperacao = (callback) => {
    callback();
};


const removerTarefa = () => {
    if (tarefas.length === 0) {
        alert("Não há tarefas para remover!");
        return;
    }
    
    let lista = "Tarefas disponíveis:\n";
    tarefas.forEach((tarefa, indice) => {
        lista += `${indice + 1}. ${tarefa}\n`;
    });
    
    const indice = parseInt(prompt(lista + "\nDigite o número da tarefa para remover:")) - 1;
    if (indice >= 0 && indice < tarefas.length) {
        const removida = tarefas.splice(indice, 1)[0];
        alert(`Tarefa "${removida}" removida!`);
    } else {
        alert("Número inválido!");
    }
};

const atualizarTarefa = () => {
    if (tarefas.length === 0) {
        alert("Não há tarefas para atualizar!");
        return;
    }
    
    let lista = "Tarefas disponíveis:\n";
    tarefas.forEach((tarefa, indice) => {
        lista += `${indice + 1}. ${tarefa}\n`;
    });
    
    const indice = parseInt(prompt(lista + "\nDigite o número da tarefa para atualizar:")) - 1;
    if (indice >= 0 && indice < tarefas.length) {
        const novaDescricao = prompt("Digite a nova descrição:");
        if (novaDescricao) {
            tarefas[indice] = novaDescricao;
            alert("Tarefa atualizada!");
        }
    } else {
        alert("Número inválido!");
    }
};

const concluirTarefa = () => {
    if (tarefas.length === 0) {
        alert("Não há tarefas para concluir!");
        return;
    }
    
    let lista = "Tarefas disponíveis:\n";
    tarefas.forEach((tarefa, indice) => {
        lista += `${indice + 1}. ${tarefa}\n`;
    });
    
    const indice = parseInt(prompt(lista + "\nDigite o número da tarefa para concluir:")) - 1;
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice] = tarefas[indice] + " [CONCLUÍDA]";
        alert("Tarefa concluída!");
    } else {
        alert("Número inválido!");
    }
};


const iniciarPrograma = () => {
    let continuar = true;
    
    while (continuar) {
        const menu = `
--- MENU ---
1. Adicionar tarefa
2. Listar tarefas
3. Remover tarefa
4. Atualizar tarefa
5. Concluir tarefa
6. Sair

Escolha uma opção:`;
        
        const opcao = prompt(menu);
        
        switch (opcao) {
            case "1":
                const descricao = prompt("Digite a descrição da tarefa:");
                adicionarTarefa(descricao);
                break;
            case "2":
                listarTarefas();
                break;
            case "3":
                executarOperacao(removerTarefa);
                break;
            case "4":
                executarOperacao(atualizarTarefa);
                break;
            case "5":
                executarOperacao(concluirTarefa);
                break;
            case "6":
                continuar = false;
                alert("Programa encerrado!");
                break;
            default:
                alert("Opção inválida!");
        }
    }
};


iniciarPrograma();
