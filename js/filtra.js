var filtro = document.querySelector("#filtrar-tabela");
filtro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value != "") {
        pacientes.forEach(element => {
            var expressão = new RegExp(this.value, "i")
            var nome = (element.querySelector(".info-nome").textContent);

            if (!expressão.test(nome)) {
                element.classList.add("esconde");
            } else {
                element.classList.remove("esconde");
            }
        })
    } else {
        pacientes.forEach(element => {
            element.classList.remove("esconde");
        })
    }


})