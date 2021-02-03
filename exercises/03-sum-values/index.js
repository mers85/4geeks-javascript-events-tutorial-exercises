window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;

	//your code goes here
	let result = parseInt(stringA) + parseInt(stringB);

	let inputResult = document.getElementById("resultNumber");
	inputResult.setAttribute("value", result);
	console.log(inputResult);
};
