const botaoBuscar = document.querySelector("#buscar-pacientes")

botaoBuscar.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("load", () => {
        let erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status === 200) {
            erroAjax.classList.add("invisivel")
            const resposta = xhr.responseText;       
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(paciente => adicionaPacienteNaTabela(paciente))  
        }
        else {
            console.log(xhr.status)
            console.log(xhr.responseText)            
            erroAjax.classList.remove("invisivel")
        }
    })

});

