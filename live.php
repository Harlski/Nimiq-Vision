<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style.css" />
	<link rel="stylesheet" href="./styles/history.css" />

<script type="text/javascript" src="https://cdn.nimiq.com/v1.5.8/nimiq.js"></script>	<script type="text/javascript" src="./scripts/handler.js"></script>
	<script type="text/javascript" src="./scripts/nimiq.js"></script>	

	<link href="./styles/nimiq-style.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Muli:400,600,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Fira+Mono&text=0123456789ABCDEFGHJKLMNPQRSTUVXY%20" rel="stylesheet">
    <title>Nimiq Vision</title>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-1RF3XNFTS8"></script>


	<script>
	 
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-1RF3XNFTS8');
	</script>
	<script>
	function status(text) {
        document.getElementById('connection-status').textContent = text;
        console.log(`Status: ${text}`);
    }
	function statusQueue(text) {
		msg = text + " in queue";
        document.getElementById('in-queue').textContent = msg;
        console.log(msg);
    }
	function generateString() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'NQ';
  for (let i = 0; i < 33; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
const congratulationsMessages = [
  "Congratulations! You did it! (Test Only)",
  "Well done! You deserve a round of applause. (Test Only)",
  "Great job! You should be very proud of yourself. (Test Only)",
  "Fantastic work! You've truly excelled. (Test Only)",
  "Way to go! You've accomplished something great. (Test Only)"
];

function getRandomString(stringArray) {
  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * stringArray.length);

  // Return the string at the random index
  return stringArray[randomIndex];
}

const result = generateString();
	function testPopup() {
		const randomNim = Math.floor(Math.random() * 100000) + 1
		const congratulationsMessage = getRandomString(congratulationsMessages);
		queuePopup(generateString(),congratulationsMessage,randomNim,5);
	}



	</script>
  </head>
  <body>

	<div class="payment-container rem-modal">
		<?php include 'animation.html';?> 
	</div>

	<div class="list">
		<ul id="list" class="swing">
		</ul>
	</div>
</body>



	<div class="header-container">
		<div class="nq-card">
			<div class="nq-card-header" id="connection-status">
				Attempting to gain consensus...
			</div>
			<div class="nq-card-body">
				<button class="nq-button-pill green" onclick="testPopup()">
					Test Popup Transaction
				</button> <button class="nq-button-pill blue" id="in-queue">0 in queue</button><br><br>
				<center><p class="nq-text-s nq-label"><a class="nq-link" href="./fts.html">Not Setup?</a></p></center>

			</div>
		</div>
	</div>
	<script src="scripts/main.js"></script>
    <script src="scripts/profanity.js"></script>
	<script src="scripts/list.js" ></script>


	<script type="module" src="./scripts/src/demo.js"></script>
	
  </body>
</html>
