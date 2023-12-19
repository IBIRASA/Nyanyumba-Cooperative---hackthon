
window.onscroll = function() {
    if (window.scrollY == 0) {
        document.getElementById("navbar").style.backgroundColor = "transparent"; 
        let navLinks = document.getElementsByClassName("navbar-a");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "rgb(109, 49, 6);"; 
        }
    } else {
        document.getElementById("navbar").style.backgroundColor = "SaddleBrown";
        let navLinks = document.getElementsByClassName("navbar-a");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "white";
        }
    }
};


function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

  function openPopup2() {
    var popup = document.getElementById("popup2");
    popup.style.display = "block";
  }
  
  function closePopup2() {
    var popup = document.getElementById("popup2");
    popup.style.display = "none";
  }
  function openPopup3() {
    var popup = document.getElementById("popup3");
    popup.style.display = "block";
  }
  
  function closePopup3() {
    var popup = document.getElementById("popup3");
    popup.style.display = "none";
  }