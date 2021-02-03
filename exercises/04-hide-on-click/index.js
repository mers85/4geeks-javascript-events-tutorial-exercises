window.myEventListener = function myEventListener() {
	//your code here
	let myDiv = document.querySelector("div");
	myDiv.style.display = "none";

	console.log(event.target);

	//según la función dada ¿cómo hacer un forEach event para que cada vez que cliquemos el botón elimine el 1er div?
};
