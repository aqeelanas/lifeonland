// Show additional content when hovered
function showAdditionalContent(imageNumber) {
  var additionalContent = document.getElementById("hover-" + imageNumber);
  additionalContent.style.display = "block";
}

// Hide additional content when the mouse is taken away
function hideAdditionalContent(imageNumber) {
  var additionalContent = document.getElementById("hover-" + imageNumber);
  additionalContent.style.display = "none";
}

// Change the background color
const colors = document.getElementsByName("bg");

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {
    // Get the selected value
    const value = this.value;

    // Change the background color based on the selected value
    if (value === "black") {
      document.body.style.backgroundColor = "#000000";
    } else if (value === "blue") {
      document.body.style.backgroundColor = "#000139";
    } else if (value === "green") {
      document.body.style.backgroundColor = "#00390B";
    } else if (value === "purple") {
      document.body.style.backgroundColor = "#2C0230";
    } else if (value === "random") {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    }
  });
}

// Change the font size
const sizes = document.getElementsByName("tx");

for (let i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", function () {
    // Get the selected value
    const value = this.value;

    // Change the size of the descriptions based on the selected value
    let fontSize;
    switch (value) {
      case "xsmall":
        fontSize = "15px";
        break;
      case "small":
        fontSize = "18px";
        break;
      case "medium":
        fontSize = "21px";
        break;
      case "large":
        fontSize = "24px";
        break;
      case "xlarge":
        fontSize = "27px";
        break;
      default:
        fontSize = "21px"; // Default font size
    }
    
    // Apply the font size to the relevant elements
    const contentElements = document.querySelectorAll('.shadow');
    contentElements.forEach(element => {
      element.style.fontSize = fontSize;
    });
  });
}

// For the 'to top' button to appear when scrolled down the page
const mybutton = document.getElementById("upButton");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
