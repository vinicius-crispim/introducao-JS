document.querySelectorAll(".paciente").forEach(element => {
	var peso = element.querySelector(".info-peso").textContent;
	var altura =element.querySelector(".info-altura").textContent;
	if (peso <= 0 || peso > 1000) {
		element.querySelector(".info-imc").textContent = "Peso Inválido!";
		element.classList.add("paciente-invalido");
	}
	else if(altura<= 0 ||altura >=3 ){
		element.querySelector(".info-imc").textContent = "Altura Inválida!";
		element.classList.add("paciente-invalido");
	}
	else{
		element.querySelector(".info-imc").textContent = (element.querySelector(".info-peso").textContent / Math.pow(element.querySelector(".info-altura").textContent,2)).toFixed(2);
	}
});
