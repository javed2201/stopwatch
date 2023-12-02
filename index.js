
let nIntervId;
let miliSecond = 0
let second = 0
let minute = 0
let hour = 0

var viewSecond =  document.getElementById("seconds")
var viewMiliSecond =  document.getElementById("miliseconds")
var viewMinute =  document.getElementById("minutes")
var viewHour =  document.getElementById("hours")

function startCount() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(updateTime, 10);
}
}

function updateTime() {
	
	miliSecond += 1
	// manage seconds
	if(miliSecond == 100){
		miliSecond = 0
		second += 1
		// manage minutes
		if(second==60){
			second = 0
			minute+=1
			// manage hours
			if(minute==60){
				minute = 0
				hour+=1
				// if(hour==3){ // if want day
				// 	hour = 0
				// }
				hour<10 ? viewHour.innerHTML = `0${hour}` : viewHour.innerHTML = hour
			}
			minute<10 ? viewMinute.innerHTML = `0${minute}` : viewMinute.innerHTML = minute
		}
		second<10 ? viewSecond.innerHTML = `0${second}` : viewSecond.innerHTML = second
	}
	miliSecond<10 ? viewMiliSecond.innerHTML = `0${miliSecond}` : viewMiliSecond.innerHTML = miliSecond
}

function pauseTime() {
  clearInterval(nIntervId);
  nIntervId = null;
}

function stopTime() {
  clearInterval(nIntervId);
  miliSecond = 0 
  second = 0
  minute = 0
  hour = 0
  viewMiliSecond.innerHTML = `00`
  viewSecond.innerHTML = `00`
  viewMinute.innerHTML = `00`
  viewHour.innerHTML = `00`
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", startCount);
document.getElementById("stop").addEventListener("click", stopTime);
document.getElementById("pause").addEventListener("click", pauseTime);


