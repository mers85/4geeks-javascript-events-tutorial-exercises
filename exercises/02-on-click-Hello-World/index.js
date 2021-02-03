//Declare your function here

document.getElementById("hello").addEventListener("click", function() {
	alert("Hello World");
	let addP = document.createElement("P");
	let t = document.createTextNode("Saluton");

	addP.appendChild(t);

	let b = document.getElementsByTagName("body")[0];
	b.appendChild(addP);
});
