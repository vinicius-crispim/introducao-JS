var pacientes = document.querySelector("#tabela-pacientes");
console.log(pacientes)
pacientes.addEventListener("dblclick", function (event) {
    console.log(event);
    //Event target pega exatamente o clicado, parentNode pega o pai do alvo
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
});