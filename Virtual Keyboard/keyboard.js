const keyboard = document.querySelector(".keyboard");
const btns = document.querySelectorAll(".btn");
const backspace = document.querySelector(".backspace");
const space = document.querySelector(".space");
const textarea = document.querySelector(".textarea");
const capslock = document.querySelector(".capslock");
const enter = document.querySelector(".enter");

textarea.value += "";

// Loop through all letter type buttons
btns.forEach(function(btn) {
  btn.addEventListener("click", function handleClick() {
    if (capslock.classList.contains("activated")) {
      textarea.value += btn.innerHTML.toUpperCase();
    } else {
      textarea.value += btn.innerHTML.toLowerCase();
    }
  });
});

// space bar functionality
space.addEventListener("click", function() {
  textarea.value += " ";
});

//  Backspace functionality
backspace.addEventListener("click", function() {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
});

// Capslock
capslock.addEventListener("click", function() {
  capslock.classList.toggle("activated");
});
