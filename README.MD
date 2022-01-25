https://nimiq.vision

Nimiq.Vision utilizes the Nimiq Blockchain to detect when incoming transactions occur on a wallet address and trigger an on-screen alert that contains:

<li>Senders Nimicon</li>
<li>Transaction Value</li>
<li>Message attached to the transaction</li>


<br>Code can be hosted and ran locally.

<h1><b>Quick Start</b></h1>

https://nimiq.vision/live.php?id=NQ97UQJA5V6KPRFYX9X0J2ASCK5R0C8QU04H&secs=30<br>
 <p>Simply replace the NQ97UQJA5V6KPRFYX9X0J2ASCK5R0C8QU04H with your own wallet.nimiq.com address.<br></p>
  
 Visit https://nimiq.vision/fts.html if you require step-by-step setup instructions.
  
 
<h1><b>Console Commands</b></h1>
<h3>queuePopup(img, msg, value, seconds)</h3>Function can be found in the handler.js<br><br>
Run the following command in the browser console to push your own custom popups. <br>

Take the following arguments:
<ul>
<li><b>img</b> = Should be an .svg file. "https://icons.mopsus.com/icon/NQ97UQJA5V6KPRFYX9X0J2ASCK5R0C8QU04H.svg"</li>
<li><b>msg</b> = Accepts only a string. "This is a test message" etc.</li>
<li><b>value</b> = Accepts a string or number. "100" or 100 etc.</li>
<li><b>seconds</b> = Accepts a string or number. "100" or 100 etc.</li>
</ul>
queuePopup("https://icons.mopsus.com/icon/NQ97UQJA5V6KPRFYX9X0J2ASCK5R0C8QU04H.svg", "This is a test message", 100, 30);
  
  
