
//Testing Wallet Address
const userParams = window.location.search;
const urlParams = new URLSearchParams(userParams);
const userAddress = urlParams.get('id');
const timeToWait = urlParams.get('secs');

console.log('User address is: ' + userAddress + '.');
console.log('Time to wait is: ' + timeToWait);

const iconURL = "https://icons.mopsus.com/icon/" + userAddress + ".svg";
let queArray = [];
let activeAnim = false;

function queuePopup(img, msg, value, seconds){
	
	let cleaned = filterFactory().filterString(msg); //Removes profanity

	arrayToAdd = [img, cleaned, value, seconds]; //Put values in an array
	queArray.push(arrayToAdd); //Adds values to array
	addToList(img, msg, value);
	console.log("Transactions in queue: " + queArray.length);	
	statusQueue(queArray.length);
	if (!activeAnim){
		console.log("Attempting to play next.");
		playNext();
	} else {
		console.log("New transaction, though pop-up currently visible. Returning.");
		return
	}

	}

function playNext(){
	

	if (queArray.length === 0){
		console.log("Nothing left to play next. Queue empty.");
		return
	}
	console.log(queArray[0]);
	secondsWithDelay = queArray[0][3] * 1000 + 3500;
	activeAnim = true;
	successModal(queArray[0][0],queArray[0][1],queArray[0][2],queArray[0][3]);
	queArray.shift();
	console.log("Transaction displayed, ending soon.");
	console.log("Transactions in queue remaining: " + queArray.length);
	statusQueue(queArray.length);
	setTimeout(function(){ 
		console.log("Animation ended, attempting to play next.");
		activeAnim = false;	
		playNext()
	}, secondsWithDelay);
}