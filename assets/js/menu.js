



function greek() {
    var x = document.getElementById("greekLanguage");
    var y = document.getElementById("greekLanguage");
    var selectLanguage = document.getElementById("selectLanguage")
    if (x.style.display === "none") {
      x.style.display = "block";
      selectLanguage.style.display = "none";

    } else {
      x.style.display = "none";
      selectLanguage.style.display = "block";
    }
}

