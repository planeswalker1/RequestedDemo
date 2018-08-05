var messageTitle = document.querySelector('.titleArea');

function changeTitleArea() {
	let userInput= getUserInput();
	messageTitle.innerHTML =userInput;
}

function getUserInput(){ // retrive input from field 
	let input = document.getElementById("userInput").value;
	return input;
}

