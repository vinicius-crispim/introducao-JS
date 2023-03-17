var btn = document.querySelector("#importar-paciente");
btn.addEventListener("dblclick",function(){
    console.log("CLICOU");
    var request = new XMLHttpRequest();
    request.open("get","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    request.addEventListener("load",function(){
        if(request.status == 200){
            console.log(request.response);
            var pacientes = JSON.parse(request.responseText);
            console.log(pacientes);
            pacientes.forEach(element => {
                transfereDados(element);
            });
            var erromsg = document.querySelector("#erro-ajax");
            erromsg.classList.add("esconde");
        }else{
            console.log(request.status);
            console.log(request.responseText);
            var erromsg = document.querySelector("#erro-ajax");
            erromsg.classList.add("erromsg");
        }
        
        
    });
    request.send();
    
})