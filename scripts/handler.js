
//Testing Wallet Address
const userParams = window.location.search;
const urlParams = new URLSearchParams(userParams);
const userAddress = urlParams.get('id'); // Gets the wallet address (id) & seconds to wait (secs) from the url. (eg. https://nimiq.vision/live.php?id=NQXX&secs=10)
const timeToWait = urlParams.get('secs');

const iconURL = "https://icons.mopsus.com/icon/" + userAddress + ".svg"; // Thanks mopsus.com foor letting me leech the .svg image for now - still need to add/implement the identicons.min.js 
let queArray = [];
let activeAnim = false;

function queuePopup(img, msg, value, seconds){
	
	let cleaned = filterFactory().filterString(msg); // Removes profanity. Thanks https://github.com/MatthewDLudwig

	arrayToAdd = [img, cleaned, value, seconds]; // Put values in an array.
	queArray.push(arrayToAdd); // Adds values to array.
	addToList(img, msg, value); // Adds to donation history list.
	statusQueue(queArray.length);
	if (!activeAnim){
		playNext(); // activeAnim is false, which means nothing is on screen.
	} else {
		return // Animation on screen, so we return.
	}

	}

function playNext(){
	

	if (queArray.length === 0){
		return // Nothing left to play next, exits.
	}
	secondsWithDelay = queArray[0][3] * 1000 + 3500; // This number helps add 3.5 seconds between popups, allows animation to finish and close properly.
	activeAnim = true; // While this is True, next donation in queue won't trigger.
	successModal(queArray[0][0],queArray[0][1],queArray[0][2],queArray[0][3]); // successModal() populates template with data and displays on screen.
	queArray.shift(); // Removes last item just displayed from queue.
	statusQueue(queArray.length); // Updates the display of remaining items in queue.
	setTimeout(function(){ 
		activeAnim = false;	// Animation has closed from screen.
		playNext() // Calls this function again
	}, secondsWithDelay);
}