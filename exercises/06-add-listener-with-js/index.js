window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	let greenButton = document.querySelector("#theGreen");
	greenButton.addEventListener("click", event => {
		alert("wuju");
	});
};

//the listener function here
