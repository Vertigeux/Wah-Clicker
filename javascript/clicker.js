var wahCount = 0;
var wahAudio = new Audio("res/wah.mp3")

function wahEvent(){
	wahCount++;
	document.getElementById("totalWah").innerHTML = wahCount;
	document.getElementById('waluigiPicture').src='res/waluigiOpen.jpg'
	wahAudio.play();
	wahAudio.onended = function(){document.getElementById('waluigiPicture').src='res/waluigi.jpg'}
	
}

window.onload = function() {
	document.getElementById("wahButton").onclick = wahEvent;
	document.getElementById("totalWah").innerHTML = wahCount;
}