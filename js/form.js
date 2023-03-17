var btn = document.querySelector("#adicionar-paciente");
var peso = document.querySelector("#peso");
var altura = document.querySelector("#altura");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPaciente(form);
    console.log(obtemPaciente);
    
    var erros = validaPaciente(paciente.peso, paciente.altura);
    var errosUl = document.querySelector(".lista-erros");
    if(erros.length == 0){
        transfereDados(paciente);

        removeDuplicates()
        form.reset();
    }else{
        console.log(errosUl);
        removeDuplicates();  
        erros.forEach(element => {
            var erroLi = document.createElement("li");
            erroLi.classList.add("erro");
            console.log("ELEMMENTOS:"+element)
            erroLi.textContent = element;
            errosUl.appendChild(erroLi);
        });

    }

    function removeDuplicates() {
        document.querySelectorAll(".erro").forEach(element => {
            errosUl.removeChild(element);
            console.log(document.querySelectorAll(".erro"));
        });
    }
})

function obtemPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value.toString().replace(",", "."),
        gordura: form.gordura.value,
        imc: (form.peso.value / (form.altura.value.toString().replace(",", ".") * form.altura.value.toString().replace(",", "."))).toFixed(2)
    };
    console.log(paciente);
    return paciente;
}

function transfereDados(paciente) {
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    nomeTd.textContent = paciente.nome;
    adicionaLinha(nomeTd, pesoTd, alturaTd, gorduraTd, imcTd);

}

function validaPaciente(peso, altura) {
    var erros = [];
    if (altura > 3 || altura < 0) {
        erros.push("A altura deve estar entre 0 e 3");
    }
    if (peso > 1000 || peso < 0) {
        erros.push("O peso deve estar entre 0 e 1000");
    }
    return erros;
}

function adicionaLinha(nomeTd, pesoTd, alturaTd, gorduraTd, imcTd) {
    var pacienteTr = document.createElement("tr");
    console.log(imcTd);
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
}