/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let timo = time.split()
  timo = parseInt(timo)
  if (timo < 12) {
     return `Good Morning`
  }
  if (timo >= 12 && timo < 17) {
    return `Good Afternoon`
  }
  if (timo > 17) {
    return `Good Evening`
  }
}


function displayMessage(message) {
  let greeting = document.getElementById("greeting")
    greeting.innerText = `${message}`;
}

/* Write your implementation of displayMessage() */
