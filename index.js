/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time){
  let time_array = time.split(':')
  let hour = parseInt(time_array[0])
  if (hour < 12){
    return "Good Morning"
  } else if (hour < 17){
    return "Good Afternoon"
  } else{
    return "Good Evening"
  }
}

function displayMessage(string){
  const greet = document.getElementById("greeting")
  greet.innerText = string
}
