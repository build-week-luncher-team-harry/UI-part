console.log("this is js file")

// on click function for donation button 

function changeText(button) {
    button.innerHTML = "Thank You!";
  }



//   counter
function move() {
    var elem = document.getElementById("bar"); 
    var width = 100;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1 + '%';
      }
    }
  }