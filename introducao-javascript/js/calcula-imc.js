var pacients = document.querySelectorAll(".paciente")

pacients.forEach(paciente => {
    let peso = paciente.querySelector(".info-peso").textContent
    let altura = paciente.querySelector(".info-altura").textContent   
    let imc = paciente.querySelector(".info-imc")
    
    let pesoEhValido = validaPeso(peso)
    let alturaEhValida = validaAltura(altura)

    if (!pesoEhValido) {
        console.log("Peso inválido!")
        paciente.classList.add("paciente-invalido");
        imc.textContent = "Peso inválido"        
    }
    else if (!alturaEhValida) {
        console.log("Altura inválida!")
        paciente.classList.add("paciente-invalido");       
        imc.textContent = "Altura inválida"
    }
    else{
        let imcPaulo = calculaImc(peso, altura)
        imc.textContent = imcPaulo;           
    }
});

function validaPeso(peso){
    if(peso >= 0 && peso < 1000) {
        return true;
    }
    return false;
}

function validaAltura(altura){
    if (altura > 0 && altura < 3){
        return true;
    }
    return false;
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2)
}

