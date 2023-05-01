



function greek() {
    var greekLanguage = document.getElementById("greekLanguage");
    var greekText = document.getElementById("greektext");
    var engText = document.getElementById("engtext");

    var greekLangText1 = document.getElementById("greekLanguageText1")

    if (greekLanguage.style.display === "none") {
      greekLanguage.style.display = "block";
      greekText.style.display = "none";
      engText.style.display = "none";
      greekLangText1.style.display = "block";

    } else {
      greekLanguage.style.display = "none";
      greekText.style.display = "block";
      engText.style.display = "block";
      greekLangText1.style.display = "none";

    }
}


function eng() {
  var engLanguage = document.getElementById("engLanguage");
  var greekText = document.getElementById("greektext");
  var engText = document.getElementById("engtext");

  var engLanguageText1 = document.getElementById("engLanguageText1")

  if (engLanguage.style.display === "none") {
    engLanguage.style.display = "block";
    greekText.style.display = "none";
    engText.style.display = "none";
    engLanguageText1.style.display = "block";

  } else {
    engLanguage.style.display = "none";
    greekText.style.display = "block";
    engText.style.display = "block";
    engLanguageText1.style.display = "none";

  }
}

