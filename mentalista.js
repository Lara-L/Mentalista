var contador = 0;
var tentativas = 3;

var numeroSorteado = parseInt(Math.random() * 11);
console.log(numeroSorteado);

function Chutar() {
	var numeroChutado = document.getElementById("chute").value;
	if (numeroSorteado == numeroChutado) {
		document.getElementById("resposta").innerHTML = "Parabéns, você acertou";
		document.getElementById("botao").disabled = true;
	} else if (numeroChutado > 10 || numeroChutado < 0) {
		document.getElementById("resposta").innerHTML =
			"Digite um número entre 0 e 10";
	} else {
		var resultadoTentativas = document.getElementById("resposta");
		var numeroTentativas = "Você possui mais " + (tentativas-1) + " tentativas";
		resultadoTentativas.innerHTML = numeroTentativas;
		updateTentativas(--tentativas);
	}

}

function updateTentativas(tent) {
	 if (tent == 0 ) {
		document.getElementById("botao").disabled = true;
		document.getElementById("resposta").innerHTML =
			"Voce não possui mais tentativas";
	}
}
