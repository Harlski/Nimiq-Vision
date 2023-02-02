const closeBtn = document.querySelector(".x-close");
const container = document.querySelector(".payment-container");


closeBtn.addEventListener("click", closeModal);

function closeModal() {
  if (container.classList.contains("rem-modal")) {
  } else {
    container.classList.add("rem-modal");
    setTimeout(() => {
      container.style.display = "none";
    }, 500);
    setTimeout(() => {
      document.querySelector("body").style.overflow = "visible";
    }, 600);
  }
}



/**
 * Opens the modal when the launch button is clicked(optional)
 * Opens the modal if payment is successful
 */
function openModal() {
  container.classList.remove("rem-modal");
  container.style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
}

/**
 *
 * @param {user img} img
 * @param {message} msg
 * @param {nim received by the user} value
 * @param {length of time the success modal should appear} seconds
 */
function successModal(img, msg, value, seconds) {
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

  // Triggers the succes modal
  const myAudio = new Audio('audio/pop-sound-incoming.wav');
  openModal();
  myAudio.play();
  const user_img = document.querySelector(".user-avatar");
  const msg_input = document.querySelector(".payment-address");
  const received_val = document.querySelector(".payment-value");

  // condition to pop the success modal
  // condition can be changed
  if (img && msg && value) {
    console.log("got img msg value: " + img);
    renderIdenticons(addSpaces(img));
    msg_input.textContent = msg;
    received_val.textContent = value;

    if (msg.split(" ").length > 20) {
      msg_input.style.fontSize = "14px";
      msg_input.style.lineHeight = "20px";
    }

    if (msg.split(" ").length > 25) {
      msg_input.style.fontSize = "13px";
      msg_input.style.lineHeight = "19px";
    }

    if (msg.split(" ").length > 30) {
      msg_input.style.fontSize = "12px";
      msg_input.style.lineHeight = "19px";
    }


    if (container) {
      setTimeout(() => {
        container.classList.add("rem-modal");

        setTimeout(() => {
          container.style.display = "none";
          document.querySelector("body").style.overflow = "visible";
        }, 1000);
      }, seconds * 1000);
    }
  }
}

