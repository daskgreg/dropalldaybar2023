



function greek() {
    var x = document.getElementById("coffeeorbrunchgreek");
    var selectLanguage = document.getElementById("selectLanguage")
    if (x.style.display === "none") {
      x.style.display = "block";
      selectLanguage.style.display = "none";

    } else {
      x.style.display = "none";
      selectLanguage.style.display = "block";
    }
}

function coffeeOrBrunchGR() {


    var  x = document.getElementById("greekLanguage");
    var selectBrunchOrCoffee = document.getElementById("coffeeorbrunchgreek");


    if (x.style.display === "none") {
      x.style.display = "block";
      selectBrunchOrCoffee.style.display = "none";

    } else {
      x.style.display = "none";
      selectBrunchOrCoffee.style.display = "block";
    }
}