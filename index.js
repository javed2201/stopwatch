
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
  if (!nIntervId) { 								// চ্যাটজিপিটিতে এই চেকটা নাই
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
				hour<10 ? viewHour.innerHTML = `0${hour}` : viewHour.innerHTML = hour 					// চ্যাটজিপিটির ফরম্যাট আরো সুন্দর
			}
			minute<10 ? viewMinute.innerHTML = `0${minute}` : viewMinute.innerHTML = minute 			// চ্যাটজিপিটির ফরম্যাট আরো সুন্দর
		}
		second<10 ? viewSecond.innerHTML = `0${second}` : viewSecond.innerHTML = second 				// চ্যাটজিপিটির ফরম্যাট আরো সুন্দর
	}
	miliSecond<10 ? viewMiliSecond.innerHTML = `0${miliSecond}` : viewMiliSecond.innerHTML = miliSecond // চ্যাটজিপিটির ফরম্যাট আরো সুন্দর
}

function pauseTime() {
  clearInterval(nIntervId);
  nIntervId = null;							 // চ্যাটজিপিটির তুলনায় অতিরিক্ত
}

function stopTime() {
  clearInterval(nIntervId);
  miliSecond = 0 
  second = 0
  minute = 0
  hour = 0
  viewMiliSecond.innerHTML = `00` 			// চ্যাটজিপিটির তুলনায় অতিরিক্ত
  viewSecond.innerHTML = `00` 				// চ্যাটজিপিটির তুলনায় অতিরিক্ত
  viewMinute.innerHTML = `00` 				// চ্যাটজিপিটির তুলনায় অতিরিক্ত
  viewHour.innerHTML = `00` 				// চ্যাটজিপিটির তুলনায় অতিরিক্ত
  // release our intervalID from the variable
  nIntervId = null; 						// চ্যাটজিপিটির তুলনায় অতিরিক্ত
}

document.getElementById("start").addEventListener("click", startCount);
document.getElementById("stop").addEventListener("click", stopTime);
document.getElementById("pause").addEventListener("click", pauseTime);



// much cleac code by chatGpt

// let timer;
// let seconds = 0, minutes = 0, hours = 0;

// function startTimer() {
// 	timer = setInterval(updateTimer, 1000);
// }

// function updateTimer() {
// 	seconds++;
// 	if (seconds === 60) {
// 		seconds = 0;
// 		minutes++;
// 		if (minutes === 60) {
// 			minutes = 0;
// 			hours++;
// 		}
// 	}

// 	document.getElementById('hours').innerText = formatTime(hours);
// 	document.getElementById('minutes').innerText = formatTime(minutes);
// 	document.getElementById('seconds').innerText = formatTime(seconds);
// }

// function formatTime(time) {
// 	return time < 10 ? `0${time}` : time;
// }

// function pauseTimer() {
// 	clearInterval(timer);
// }

// function stopTimer() {
// 	clearInterval(timer);
// 	seconds = 0;
// 	minutes = 0;
// 	hours = 0;
// 	updateTimer();
// }

// document.getElementById('start').addEventListener('click', startTimer);
// document.getElementById('stop').addEventListener('click', stopTimer);
// document.getElementById('pause').addEventListener('click', pauseTimer);