<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
	<script type="text/javascript" src="https://cdn.nimiq.com/latest/nimiq.js"></script>	
	<script type="text/javascript" src="./scripts/handler.js"></script>
	<script type="text/javascript" src="./scripts/nimiq.js"></script>
	<link href="nimiq-style.min.css" rel="stylesheet">
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

	function testPopup() {
	queuePopup("https://icons.mopsus.com/icon/NQ86AS33MTP87Q22FDVLYNARJNAEG0GMGXGN.svg","This is what your message will look like on an incoming transaction ",1000,timeToWait);
	}
	</script>
	<style>
		li {
			list-style: none;
			background: #fff;
			color: #fff;
			padding: 0 0.5em;
			overflow: hidden;
			width: 10em;
            height: 3.35em;
            /* background-color: green; */
            /* display: flex; */
            flex-direction: column;
            justify-content: center;
			/* background: var(--nimiq-gold);
			background-image: var(--nimiq-gold-bg); */
			border-radius: 20px;
			/* box-shadow: 0 0.5rem 3.5rem rgb(129 119 173 / 47%); */
			border: 1px solid black;
		}
		

		li.show {
			/* height: 3.35em; */
			margin: 3px 0;
		}

		li.show:hover {
			height: 12em;
		}

		.list {
			position: absolute;
			z-index: 1;
		}
		.swing li {
		margin: 15px;
		opacity: 0;
		transform: rotateX(-90deg); */
		transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
		}

		.swing li.show {
		opacity: 1;
		transform: none;
		transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
		}

		.liFont {
			font-size: 0.75em;
		}
		.dImg{
			position: relative;
			padding-top: 0.75px;
		}
		#show:hover .dImgr{
			padding-top: 0px;
			position: relative;
			transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
		}
		.dValue{
			padding-top: 15px;
			/* padding-right: 10px; */
			float: right;
			color: #00B000;
		}
		.dMsg{
			color: #000;
		}
		

</style>
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
					Add Transaction to Queue
				</button> <button class="nq-button-pill blue" id="in-queue">0 in queue</button><br><br>
				<center><p class="nq-text-s nq-label"><a class="nq-link" href="./fts.html">Not Setup?</a></p></center>

			</div>
		</div>
	</div>

	<script src="scripts/main.js"></script>
    <script src="scripts/profanity.js"></script>
	<script src="scripts/list.js" ></script>

  </body>
</html>
