var hidenDiv= document.getElementById("showAnswer");
hidenDiv.style.display = "none";
var answer= document.getElementById("answer");




var showAnswer=function() {
	var password= document.getElementById("password").value;
	answer.innerHTML = password;
	document.getElementById("questionDiv").style.display = "none";
	document.getElementById("login").style.display = "none";
	hidenDiv.style.display = "block";
};