
document.addEventListener("DOMContentLoaded", function(){	
document.querySelector("#starter").addEventListener("click", startTimer);
var timer;
var interval;
function startTimer() {
	timer = Date.now();
	interval = setInterval(updateTime, 100); 
	document.querySelector("#starter").innerHTML = "Cancel Trouble Timer";
	document.querySelector("#starter").onclick = function() {
		clearInterval(interval);
	};
}

function updateTime() {
	var left = 10 - (Date.now()- timer)/1000;
	left = Math.round(10*left)/10;
	if (left <0){
		document.querySelector("#countdown").innerHTML = 0 + "seconds";
		timeIsUp();
	}
	else{
	document.querySelector("#countdown").innerHTML = left + "seconds";
	}
}

function timeIsUp() {
	alert("BAD THINGS");
};



/*document.addEventListener("DOMContentLoaded", function(){

document.querySelector("#starter").addEventListener("click", clickHandler);

function clickHandler (){
alert("hi");

}*/
