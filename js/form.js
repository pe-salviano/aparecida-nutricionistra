//adicionar um novo paciente
let botaoAdicionar = document.querySelector ("#adicionar-paciente");

//event.preventDefault  > é para tirar o evento padrão do botão ao ser submetido ao click (o botão não vai recarregar a página) 
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    //acessando o form
    let form = document.querySelector("#form-adiciona");

    // extraindo informações do paciente do form
    let paciente = obtemPacienteDoFormulario(form);
     
    

    let erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        let mensagemErro = document.querySelector("#mensagens-erro");
        mensagemErro.textContent = erros;
        return;
    }
     
    adicionaPacienteNaTabela(paciente);

    form.reset();
    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML =""
});

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    // adicionando o paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}




function exibeMensagensDeErro(erros){
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


//acessando cada input que está dentro do form
function obtemPacienteDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


function montaTr(paciente){
    //criando o Tr da tabela // createElement > permite criar qualquer tag HTML utilizando o JavaScript
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //appendChild > permite colocar "Adicionar" um elemento dentro do outro  (como neste caso da criação da tabela)
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;
}


function montaTd(dado,classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


//validação do form
function validaPaciente(paciente){

    let erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco")
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    if ( paciente.gordura.length == 0){
        erros.push(" A gordura não pode ser em branco")
    }
    
    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco")
    }
    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco")
    }

    return erros;
}