var wahCount = 0;
var currentWah = 0;
var autoWahCount = 0;

function wahEvent(){
	var wahAudio = new Audio("res/wah.mp3");
	wahCount++;
	currentWah++;
	document.getElementById("totalWah").innerHTML = wahCount;
	document.getElementById('waluigiPicture').src='res/waluigiOpen.jpg';
	wahAudio.play();
	wahAudio.onended = wahEventEnd;
	
}

function wahEventEnd(){
	currentWah--;
	if(currentWah == 0){
		document.getElementById('waluigiPicture').src='res/waluigi.jpg'
	}
}

window.onload = function() {
	document.getElementById("wahButton").onclick = wahEvent;
	document.getElementById("totalWah").innerHTML = wahCount;
}