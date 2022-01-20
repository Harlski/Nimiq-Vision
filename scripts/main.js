const closeBtn = document.querySelector(".x-close");
const container = document.querySelector(".payment-container");


closeBtn.addEventListener("click", closeModal);
//container.addEventListener("click", closeModal2);

// Closes the modal when closeBtn is clicked
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

// Closes the modal when the payment-container is clicked
/* function closeModal2(e) {
  if (e.target.classList.contains("payment-container")) {
    if (container.classList.contains("rem-modal")) {
      container.classList.remove("rem-modal");
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
  return;
} */

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
    user_img.src = img;
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


    // if (msg.length > 14) {
    //   console.log("longer than 25");
    //   let current = 0;
    //   let newMsg = msg;
    //   while (current <= msg.length){
    //     count = 0;
    //     if (msg.substr(current) == ' '){
    //       count = 0;
    //     } else {
    //       count++;
    //     }
    //     if (count == 14){
    //       msg = msg.substr(current - 14, current) + ' ' + msg.substr(current + 1,msg.legnth);
    //       count = 0;
    //     }

    //     if (msg.substr(current) == msg.length){
    //       msg_input.textContent = msgSplit;
    //     }
    //   }
    // }

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

// Calls the function to trigger the modal
queuePopup(iconURL,"This is what your message will look like on an incoming transaction ",1000,10);
