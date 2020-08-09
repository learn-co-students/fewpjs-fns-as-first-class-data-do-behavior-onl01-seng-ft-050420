/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  // e.preventDefault()
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const hr = parseInt(time, 10)
  if (hr < 12) {
    return "Good Morning"
  } else if (hr > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
// function displayMessage(message){
//   let greetingNode = document.querySelector("#greeting")

//   return greetingNode.textContent = message;
// }

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}