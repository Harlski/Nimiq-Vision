let $ = {};
	

async function start() {
    // Either use test() or main() to connect to the testnet of mainnet respecitvely.
    // Don't run both at the same time.
    //Nimiq.GenesisConfig.test();
    Nimiq.GenesisConfig.main();

    const configBuilder = Nimiq.Client.Configuration.builder();
    const client = configBuilder.instantiateClient();
    client.addConsensusChangedListener(onConsensusChanged);
 
	// Register the Nimiq client globally.
    $.client = client;
        }

function onConsensusChanged(consensus) {
    if (consensus === Nimiq.Client.ConsensusState.ESTABLISHED) {
		status("Consensus Established");
        // If inside this statement, nano/pico consensus has been reached.
        // Give the user the option to provide his Nimiq address.

        // Example:
        // Note that the second parameter is an array of addresses so you can listen to as manay addresses as you want.
        $.client.addTransactionListener(onTransaction, [userAddress]);
        }
    }

        // This function will be triggered when somebody sends you NIM to a subscribed address.
function onTransaction(tx) {
    // Add a tx state check here otherwise you will be notified when the tx is added to the mempool and when it's actually mined.
    if (tx.state === "pending") {

		//	Convert TX Message to readable
		let message = new TextDecoder().decode(tx.data.raw); // Decodes the message from transaction
		if (message === ''){
			message = "Good Work!";
            }	
        
		
		userFriendly = tx.sender.toUserFriendlyAddress(); //  Convert address to NQ readable address
		valueConverted = tx.value / 100000 // Divide with 1e5 to convert Luna to NIM
		removedSpaces = userFriendly.replace(/\s+/g, ''); //Removes spaces from address NQ00 0000 to NQ000000 etc.
		const convertedURL = "https://icons.mopsus.com/icon/" + removedSpaces + ".svg"; //Builds URL for icon (Currently mooching from Mopsus)

        console.log("Converted URL" + convertedURL);
		console.log("message" + message);
		console.log("valueConverted" + valueConverted);
		console.log("timetowait" + timeToWait);

        queuePopup(convertedURL, message, valueConverted, timeToWait); //Send .svg image, transaction msg, transaction value & a wait duration
		console.log("NIM received");
		}
		
    }
	


    
	Nimiq.init(start);