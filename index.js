/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(hrs){
  let message;
  if (parseInt(hrs) < 12)
      message = 'Good Morning';
  else if (parseInt(hrs) >= 12 && parseInt(hrs) <= 17)
      message = 'Good Afternoon';
  else if (parseInt(hrs) >= 17 && parseInt(hrs) <= 24)
      message = 'Good Evening';

  return message;
}

greet()
/* Write your implementation of displayMessage() */

function displayMessage(greeting){
  let e = document.getElementById("greeting");
  e.innerText = greeting
  }
  
  displayMessage(greet())

