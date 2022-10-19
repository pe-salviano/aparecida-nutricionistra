const titulo = document.querySelector(".titulo__cabecalho");
titulo.textContent = "Aparecida nutricionista"

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++){
    let paciente = pacientes [i];


    let tdpeso = paciente.querySelector(".info-peso");
    let peso = tdpeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoEValido = validaPeso(peso); //true ou false
    let AlturaEValida = validaAltura(altura);

    //Validação dos dados
    if (!pesoEValido){
        console.log("Peso inválido");
        pesoEValido = false;
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido")
    }
    if (!AlturaEValida){
        console.log("altura inválida");
        AlturaEValida = false;
        tdImc.textContent = "Altura Inválido"
        paciente.classList.add("paciente-invalido")
    }
    if (AlturaEValida && pesoEValido){
        let imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}



function calculaImc(peso,altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}






