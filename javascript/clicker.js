var wahCount = 0;
var currentWah = 0;
var autoWahCount = 0;
var timer;
var nextWah = 5;
var baseAutoWahTime = 2000;
var autoEnabled = true;
var cowardMode = false;

function wahEvent(){
	var wahAudio = new Audio("res/wah.mp3");
	wahCount++;
	currentWah++;
    if(wahCount >= nextWah){
        document.getElementById("wahsRemaining").innerHTML = "0";
        document.getElementById("autoWahButton").disabled = false;
    }
    else{
        document.getElementById("wahsRemaining").innerHTML = nextWah - wahCount;
    }
	document.getElementById("totalWah").innerHTML = wahCount;
	document.getElementById('waluigiPicture').src='res/waluigiOpen.jpg';
    if(!cowardMode){
	    wahAudio.play();
	    wahAudio.onended = wahEventEnd;
    }
    else{
        wahEventEnd();
    }
	
}

function wahEventEnd(){
	currentWah--;
	if(currentWah == 0){
		document.getElementById('waluigiPicture').src='res/waluigi.jpg'
	}
}

function newAutoEvent(){
    autoWahCount++;
    clearInterval(timer);
    if(autoEnabled){
        timer = setInterval(wahEvent, baseAutoWahTime / autoWahCount);
    }
    document.getElementById("wahPerSecond").innerHTML = getWahPerSecond();
    nextWah = Math.ceil((nextWah * 5) / 2.75);
    document.getElementById("wahsRemaining").innerHTML = nextWah - wahCount;
    if(!(wahCount >= nextWah)){
        document.getElementById("autoWahButton").disabled = true;
    }
}

function stopStartEvent(){
    if(autoEnabled){
        autoEnabled = false;
        document.getElementById("stopButton").innerText = "Start";
        document.getElementById("wahPerSecond").innerHTML = "0";
        clearInterval(timer);
    }
    else{
        autoEnabled = true;
        document.getElementById("stopButton").innerText = "Stop";
        document.getElementById("wahPerSecond").innerHTML = getWahPerSecond();
        timer = setInterval(wahEvent, baseAutoWahTime / autoWahCount);
    }
}

function cowardEvent(){
    cowardMode = true;
}

function getWahPerSecond(){
    return (1 / ((baseAutoWahTime / autoWahCount) / 1000)).toString();
}

window.onload = function() {
	document.getElementById("wahButton").onclick = wahEvent;
    document.getElementById("autoWahButton").onclick = newAutoEvent;
    document.getElementById("stopButton").onclick = stopStartEvent;
    document.getElementById("cowardButton").onclick = cowardEvent;
    document.getElementById("autoWahButton").disabled = true;
    document.getElementById("wahPerSecond").innerHTML = "0";
    document.getElementById("wahsRemaining").innerHTML = nextWah;
	document.getElementById("totalWah").innerHTML = wahCount;
}
