var contador = 0;
<<<<<<< HEAD
var tentativas = 3;

=======
var tentativas = 2;
document.getElementById("resposta").innerHTML =
	"Você possui " + (tentativas + 1) + " tentativas";
>>>>>>> 9e15e20b0a7c54e6b1386f4cbf28b14731cddd7a
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
<<<<<<< HEAD
		var numeroTentativas = "Você possui mais " + (tentativas-1) + " tentativas";
		resultadoTentativas.innerHTML = numeroTentativas;
		updateTentativas(--tentativas);
	}

}

function updateTentativas(tent) {
	 if (tent == 0 ) {
=======
		var numeroTentativas = "Você possui mais " + tentativas + " tentativas";
		resultadoTentativas.innerHTML = numeroTentativas;
	}
	updateTentativas(--tentativas);
}

function updateTentativas(tent) {
	if (tent + 1 == 0) {
>>>>>>> 9e15e20b0a7c54e6b1386f4cbf28b14731cddd7a
		document.getElementById("botao").disabled = true;
		document.getElementById("resposta").innerHTML =
			"Voce não possui mais tentativas";
	}
}
