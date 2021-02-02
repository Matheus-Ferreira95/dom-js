var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
   event.preventDefault(); 
   
   var form = document.querySelector("#form-adiciona");

   const paciente = obtemPacienteDoFormulario(form)    
   const errosList = validaPaciente(paciente);

   if (errosList.length > 0){
       exibirMensagensDeErro(errosList);
   }
   else {  
        adicionaPacienteNaTabela(paciente)           
        form.reset()
        let ul = document.querySelector("#mensagens-erro")
        ul.innerHTML= "";
   }  
});

function adicionaPacienteNaTabela(paciente) {
    const pacienteTr = montaTr(paciente)   
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
}

function obtemPacienteDoFormulario(form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }    
  
    return paciente;
}

function exibirMensagensDeErro(erros){
    let ul = document.querySelector("#mensagens-erro")
    ul.innerHTML= "";
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    const errors = [];
    if (!validaPeso(paciente.peso)){
        errors.push("Peso inválido")
    } 
    if (!validaAltura(paciente.altura)){
        errors.push("Altura inválida")
    }
    if (paciente.nome.length == 0){
        errors.push("O nome não pode estar em branco")
    }
    if (paciente.gordura.length == 0){
        errors.push("A gordura deve ser informada")
    }
    return errors;
}