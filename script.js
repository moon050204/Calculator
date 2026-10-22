// Calculator functionality

const display = document.getElementById('display');
const buttons = document.querySelectorAll("#keys button");

// Load the sound file
const clickSound = new Audio("click.mp3");

// Function to play the sound
function playSound() {
  clickSound.currentTime = 0; // rewind to start
  clickSound.play();
}

// Connect sound + calculator logic to buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playSound(); // play sound on click

    const value = button.textContent;
    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      appendToDisplay(value);
    }
  });
});

function appendToDisplay(input) {
  display.value += input;
  const len = display.value.length;

  if (len > 20) {
    display.style.fontSize = '15px';
  } else if (len > 12) {
    display.style.fontSize = '30px';
  } else {
    display.style.fontSize = '50px';
  }
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.value = 'Error';
  }
}
