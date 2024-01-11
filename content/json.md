# JSON

JSON on tekstipohjainen tiedostomuoto, joka perustuu JavaScript-objektisyntaksiin. JSON:ia käytetään usein tietojen siirtämiseen verkkosovelluksissa, esimerkiksi kun halutaan lähettää tietoja palvelimelta asiakkaalle tai päinvastoin. [JSON - introduction](https://www.w3schools.com/js/js_json_intro.asp) -sivulla on hyvä johdatus JSON:iin ja sen käyttöön JavaScriptissä. [JSON - syntax](https://www.w3schools.com/js/js_json_syntax.asp) -sivulla on hyvä esimerkki JSON:n syntaksista.

JSON:n rakenne on hyvin samankaltainen kuin JavaScript-objektien luontisyntaksi. JSON:ssa voi sisällyttää samoja perustietotyyppejä kuin JavaScript-objekteissa: merkkijonoja, numeroita, taulukoita, totuusarvoja ja muita objektiliteraaleja. JSON:ssa ei voi kuitenkaan käyttää funktioita tai metodeja. JSON:n syntaksi on hyvin samankaltainen JavaScript-objektien syntaksin kanssa, mutta JSON:ssa on muutamia eroja JavaScript-objektien syntaksiin verrattuna.

Tässä on hyvin yksinkertainen esimerkki JSON:sta. Tässä esimerkissä on vain kolme avain-arvo-paria, mutta JSON-tiedostoissa voi olla paljon enemmän avain-arvo-pareja. 

```json
{
  "note": "This is a sample note in JSON format",
  "sender": "Bing",
  "subject": "JSON example"
}
```

Tässä on hiukan laajempi esimerkki, jossa on jääkiekkojoukkoeen tietoja. 

JSON on olemassa merkkijonona, mikä on hyödyllistä, kun halutaan siirtää tietoja tietokoneiden välillä. Se täytyy muuntaa JavaScript-objektiksi, kun halutaan käyttää tietoja. Tämä ei ole iso ongelma - JavaScript tarjoaa globaalin JSON-objektin, jolla on metodeja JSON:n ja JavaScript-objektien väliseen muuntamiseen. Huomaa: Merkkijonon muuntaminen JavaScript-objektiksi kutsutaan deserialisoinniksi, kun taas JavaScript-objektin muuntaminen merkkijonoksi, jotta se voidaan lähettää verkon yli, kutsutaan serialisoinniksi.

JavaScriptillä on sisäänrakennettu funktio JSON-merkkijonojen muuntamiseksi JavaScript-objekteiksi: JSON.parse(). 

Tässä esimerkki JSON-merkkijonon muuntamisesta JavaScript-objektiksi:

```javascript
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
```

JavaScriptillä on myös sisäänrakennettu funktio objektin muuntamiseksi JSON-merkkijonoksi: JSON.stringify(). 

Tässä on esimerkki JavaScript-objektin muuntamisesta JSON-merkkijonoksi:

```javascript
const obj = { count: 42, result: true };
const json = JSON.stringify(obj);

console.log(json);
// expected output: "{"count":42,"result":true}"
```

Voit vastaanottaa puhdasta tekstiä palvelimelta ja käyttää sitä JavaScript-objektina. 

Tässä on esimerkki siitä, miten JSON-dataa voidaan hakea palvelimelta ja käyttää JavaScript-objektina:

```javascript
fetch('https://www.liiga.fi/api/v1/players')
  .then(response => response.json())
  .then(data => console.log(data));
```

Voit lähettää JavaScript-objektin palvelimelle puhtaana tekstinä. 

Tässä on esimerkki siitä, miten voit lähettää JSON-dataa palvelimelle JavaScript-objektina:

```javascript
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

Voit työskennellä tietojen kanssa JavaScript-objekteina ilman monimutkaisia jäsennys- ja käännöstoimintoja. Tietojen tallentaminen Kun tietoja tallennetaan, niiden on oltava tiettyä muotoa, ja riippumatta siitä, mihin valitset niiden tallentamisen, teksti on aina yksi laillisista muodoista. JSON mahdollistaa JavaScript-objektien tallentamisen tekstinä1