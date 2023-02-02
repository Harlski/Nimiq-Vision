window.NIMIQ_IDENTICONS_SVG_PATH = location.pathname.replace(/[^/]*$/, './scripts/src/dist/identicons.min.svg');

import Identicons from './js/identicons.js';
import { name } from './js/name.js';

window.Identicons = Identicons;

function renderIdenticons(text) {
    console.log("got renderI");
    document.querySelectorAll('.identicons:not(.small)').forEach((e, i) => Identicons.render(text + (i === 0 ? '' : i), e));

    // for testing render the small identicons as image
    // document.querySelectorAll('.identicons.small').forEach((e, i) => Identicons.image(text + i)
    //     .then($img => {
    //         e.textContent = ''; // clear old content
    //         e.appendChild($img);
    //     }));
}

function renderWords(text) {
    document.getElementById('words-text').innerText = text ? name(text) : '';
}

const firstText = 'NQ97 4M1T 4TGD VC7F LHLQ Y2DY 425N 5CVH M02Y'
renderIdenticons(firstText);
renderWords(firstText);

// addSpaces will first remove all spaces from input and then add spaces after every 4 characters as the way Identicon is selected is inclusive of spaces.
function addSpaces(address){   

    if (address == ''){
        console.log("Got here");
        return "NQ97 4M1T 4TGD VC7F LHLQ Y2DY 425N 5CVH M02Y";
    }

    let newAddress = address.replace(/\s/g, ''); //Remove all spaces from string input
    let spaceAddress = ""; 
    for (let i=0;i<newAddress.length;i++){
        if(i == 3 || i == 7 || i == 11 || i == 15 || i ==  19 || i == 23 || i == 27 || i == 31){
            spaceAddress = spaceAddress + newAddress[i] + " ";
        } else {
            spaceAddress = spaceAddress + newAddress[i];
        }
    }
    console.log("spaceAddress:" + spaceAddress);
    return spaceAddress
}

document.querySelector('#walletName').addEventListener('input', event => {
    console.log("Event target value: " + "'" + event.target.value + "'")

    renderIdenticons(addSpaces(event.target.value));
    renderWords(addSpaces(event.target.value));
});


// 0
// xxx3 xxx7 xxx11 xxx15 xxx19 xxx23 xxx27 xxx31 xxx35