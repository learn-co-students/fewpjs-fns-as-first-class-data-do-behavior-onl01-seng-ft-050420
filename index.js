/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const hr = parseInt(time.split(':')[0])
  if (hr < 12) return 'Good Morning'
  else if (hr > 12 && hr < 17) return 'Good Afternoon'
  else return 'Good Evening'
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.querySelector('#greeting').innerText = message
}
