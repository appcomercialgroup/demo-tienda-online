let buttonHolder = document.getElementById("buttonHolder");

// buttonHolder.addEventListener("click", function (argument) {
// 	argument.preventDefault();
// });
buttonHolder.addEventListener("click", function (argument) {
	// body...
	argument.preventDefault();
});

let codemodal = document.getElementById("codemodal");

let codemodalccion = document.querySelectorAll(".codemodalccion");

for (var i = 0; i < codemodalccion.length; i++) {

	codemodalccion[i].addEventListener("click", function (argument) {
		// body...
		argument.preventDefault();
		let testodelboton = document.querySelector(".testodelboton");
		let textoBoton = argument.target.textContent.trim();
		testodelboton.textContent = textoBoton;
		codemodal.style.display = "block";
		// block
		// console.log(argument.target.textContent.trim());
		// argument.target
	});

}
