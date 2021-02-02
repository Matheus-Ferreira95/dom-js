var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    let pacientes = document.querySelectorAll(".paciente");
      
    pacientes.forEach(paciente => {
        let nome = paciente.querySelector(".info-nome").textContent;
        const regex = new RegExp(this.value, "i")
        if (!regex.test(nome)) {
            paciente.classList.add("invisivel");
        }
        else {
            paciente.classList.remove("invisivel")
        }
    })   
})