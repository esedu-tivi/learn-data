console.log("js-xml.js");
// // Luodaan uusi XMLHttpRequest-olio
// var xhttp = new XMLHttpRequest();

// // Määritellään mitä tehdään, kun tiedosto on ladattu
// xhttp.onload = function() {
//   // Tarkistetaan, että pyyntö onnistui
//   if (this.status == 200) {
//     // Muunnetaan XML-merkkijono XML-DOM-objektiksi
//     var xmlDoc = this.responseXML;
//     // Haetaan kaikki player-elementit
//     var players = xmlDoc.getElementsByTagName("player");
//     // Käydään läpi jokainen player-elementti
//     for (var i = 0; i < players.length; i++) {
//       // Haetaan pelaajan nimi
//       var name = players[i].getElementsByTagName("name")[0].textContent;
//       // Haetaan pelaajan pelipaikka
//       var position = players[i].getElementsByTagName("position")[0].textContent;
//       // Haetaan pelaajan pisteet
//       var points = players[i].getElementsByTagName("points")[0].textContent;
//       // Tulostetaan pelaajan tiedot
//       console.log(name + " (" + position + ") has " + points + " points.");
//     }
//   }
// };

// // Avataan yhteys XML-tiedostoon
// xhttp.open("GET", "jukurit.xml", true);

// // Lähetetään pyyntö
// xhttp.send();
