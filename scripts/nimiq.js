let $ = {};	
let transactionsThisSession = [];

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
        $.client.addTransactionListener(onTransaction, [userAddress]);
        }
    }

        // This function will be triggered when somebody sends you NIM to a subscribed address.
function onTransaction(tx) {
    let hash = tx.transactionHash.toPlain(); // Makes hash from transaction readable
	let message = new TextDecoder().decode(tx.data.raw); // Decodes the message from transaction

    // Checks to see if hash has been displayed before, submits on screen once. Fix for: https://github.com/Harlski/Nimiq-Vision/issues/1
    if(transactionsThisSession.includes(hash)){
        console.log("This transaction has already been displayed this session. Ignoring.");
    } else {
        transactionsThisSession.push(hash);
        if (tx.state === "pending") {
            if (message === ''){
                message = "Good Work!";
                }	
            
            
            userFriendly = tx.sender.toUserFriendlyAddress(); //  Convert address to NQ readable address
            valueConverted = tx.value / 100000 // Divide with 1e5 to convert Luna to NIM
            removedSpaces = userFriendly.replace(/\s+/g, ''); //Removes spaces from address NQ00 0000 to NQ000000 etc.
            const convertedURL = "https://icons.mopsus.com/icon/" + removedSpaces + ".svg"; //Builds URL for icon (Currently mooching from Mopsus)
    
            console.log("Incoming message is: '" + message + "' NIM: '" + valueConverted + "' Displaying for: '" + timeToWait + "' seconds.");
            queuePopup(convertedURL, message, valueConverted, timeToWait); //Send .svg image, transaction msg, transaction value & a wait duration
            }
    }

    



		
    }
	


    
	Nimiq.init(start);