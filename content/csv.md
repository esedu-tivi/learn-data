# CSV

CSV (comma-separated values) on yleinen tiedostomuoto, jota käytetään tietojen tallentamiseen ja siirtämiseen. CSV-tiedosto on tekstipohjainen, ja se koostuu riveistä, joissa on pilkuilla eroteltuja kenttiä. Kenttien sisältöä ei ole määritelty, joten CSV-tiedostoja voi käyttää monenlaisten tietojen tallentamiseen. CSV-tiedostoja voi avata esimerkiksi tekstieditorilla, taulukkolaskentaohjelmalla tai ohjelmallisesti.

CSV-tiedosto näyttää tältä:

```csv
name,age,city
John,30,New York
Jane,28,Helsinki
```

Kuten edellä voi nähdä, CSV-tiedosto koostuu riveistä, joissa on pilkuilla eroteltuja kenttiä. Ensimmäinen rivi on otsikkorivi, jossa on kenttien nimet. Seuraavat rivit ovat tietueita, joissa on kenttien arvot. Kenttien arvot voivat olla tekstiä, numeroita tai muita arvoja. Kenttien arvot erotellaan toisistaan pilkulla. Kenttien arvot voivat olla tyhjiä. Kenttien arvot voivat sisältää pilkkuja, mutta silloin kentän arvo on yleensä ympäröity lainausmerkeillä.

```csv	
name,age,city
John,30,"New York, NY"
Jane,28,Helsinki
```

CSV-tiedostoja voi lukea ja muokata monilla eri ohjelmilla. CSV-tiedostoja voi lukea myös ohjelmallisesti. Esimerkiksi JavaScriptillä voi lukea CSV-tiedostoja käyttämällä [csv-parser](https://www.npmjs.com/package/csv-parser) -kirjastoa.

```javascript
const csv = require('csv-parser');
const fs = require('fs');

const results = [];



