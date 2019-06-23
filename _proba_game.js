let readline = require('readline-sync');
let life = 5;
let age = 0;
let eqp = 0;
// Bevezető rizsa beg.
console.log('Isten hozott a játékomban!');
let name = readline.question('Hogy hívnak?');
console.clear();
console.log('Kedves ' + name + '! Kezdődjön hát életed nagy kalandja, melyhez ' + life + ' élet áll a rendelkezésedre.');
console.log('                                                                                                   ');

console.log('                                                                                                   ');

console.log('Egy átmulatott éjszaka után egy kényelmes ágyban ébredsz. Azonban bármily kelle- mes a környezet, a fejed iszonyatosan sajog.');
console.log('                                                                                                   ');
console.log('                                                                                                   ');

console.log('Körbenézel, hátha valami csillapíthatná fejfájásodat. Vagy jobb lenne meglépni  innen?');

console.log('                                                                                                   ');
console.log('                                                                                                   ');
// Bevezető rizsa end.
// Lényegi rész
console.log('--> Kimegyek az ajtón.(Nyomd le az a billentyűt!');
console.log('--> Kihúzom a fiokot.(Nyomd le az f billentyűt!');
let cross = readline.question('Melyiket választod?');

const ageTest = () => {
  if (cross === 'a' && age < 30) {
    life--;
    console.log('Sajnos nem vagy a megfelelő korosztály számára.');
    console.log('Ennyi életed maradt: ', life);
  } else if (cross === 'a') { console.log('Megúsztad, úgy néz ki, de azért nem vennék rá mérget.'); }
};

const select = () => { // Nagyi kérdezi, hogy Hány éves vagy?
  if (cross === 'a') {
    age = readline.question('Hány éves vagy?');
  }
};
const aftG = () => { // Ha a fiókot választottad és a kulcsot, akkor lépcsőn legurulás.
  if (cross === 'f' && eqp === 'k') {
    life--;
    console.log('A lépcsőn lefelé nem kéne szaladni, mert legurulsz. Egy élettel kevesebb');
    console.log('Ennyi életed maradt: ', life);
  }
};
const grAf = () => { // Ha az ajtót választottad a legelején, akkor így jutsz le a nappaliba.
  if (cross === 'a') {
    console.log('Szerencsére a nagyi elaludt, úgyhogy leslisszolsz mellette a lépcsőn.');
    console.log('A nappaliban találod magad, minden kihalt.');
  }
};
const fiok = () => { // Mit veszel ki a fiókból döntés, t vagy k.
  if (cross === 'f') {
    eqp = readline.question('Mit veszel ki a fiókból?');
  }
};
const tabDrug = () => { // Ha tablettát vettél ki és idősebb vagy 20-nál akkor drogos mondat.
  if (eqp === 't' && age > 20) {
    life--;
    console.log('A mindenféle tabletták fölzabálása jóformán drogozás.');
    console.log('                                                      ');
    console.log('Úgyhogy már csak' + life + ' életed maradt.');
  }
};
const tabDrug2 = () => { // gallyra vág a hatóanyag
  if (cross === 'f' && eqp === 't') {
    life--;
    console.log('A tablettában megbúvó hatóanyag alaposan gallyra vágott.');
    console.log('Most már csak ennyi életed maradt: ', life);
  }
};
const find = () => { // Gyerünk a bejárati ajtó kulcsával.
  if (cross === 'f') {
    if (eqp === 'k') { console.log('Ez lehet a bejárati ajtó kulcsa. Gyerünk!'); } else if (eqp !== 't') { life--; console.log('Ennyire fáj a fejed? Valamit vegyél ki!'); } else { console.log('Bár fejfájásra lenne jó a tabletta! Vízért indulsz, de az ajtóban ott vár a nagyi.'); }
  }
};

const stair = () => { // Ha fiókot választottál és kulcsot, a nappaliba jutsz ezzel.
  if (cross === 'f' && eqp === 'k') {
    console.log('Miután legurultál a lépcsőn, lent találod magad a nappaliban.');
  }
};
const tabNap = () => { // Tablettákkal a nappaliban leszel.
  if (cross === 'f' && eqp === 't') {
    life--;
    console.log('Nagy nehezen lebotorkálsz a lépcsőn és a nappaliban állsz.');
  }
};

const mobile = () => {
  if (direct === '2') { console.log('A mentők keresnek, mert hallották, hogy rosszul vagy ;)'); } else { life--; console.log('Az előszobáig hosszú az út, és te nagyon szaladtál. Megsérültél.'); }
  console.log('Ennyi életed maradt: ', life)
  ;
};

switch (cross) {
  case 'a': console.log('A nagymama fürkésző tekintete fogad az atjón kívül, valamit nagyon kérdezni akar.');

    break;
  case 'f': console.log('Belenézel a fiókba és egy kulcsot (k), valamint egy tablettát(t) találsz benne.');
    break;
}

select(); // nagyi bekérdez, hány éves vagy
ageTest();// Nagyi életkor tesztje, hogy továbbenged-e.
grAf(); // Túljutsz a nagymamán és a nappaliba jutsz.
fiok(); // kivehetsz a fiókból kulcsot, vagy tablettát

find(); // Ha fiókot választottál és kulcsot, akkor gyerünk a bejárati ajtóhoz.

tabDrug(); // Ha fiókot választottál és tablettát, drogos mondat, -1 élet.

tabDrug2(); // a hatóanyag gallyra vág
aftG(); // fiók és kulcs, legurulsz a lépcsőn
stair(); // fiók és kulcs a nappaliba jutsz
tabNap(); // tablettákkal a nappaliban leszel

let direct = readline.question('Körülnézel, hogy merre menj tovább.1-előszoba felé, 2-mobilozol egyet');
switch (direct) {
  case '1': console.log('Rohamléptekkel elindulok az előszoba felé.');
    break;
  case '2': console.log('Telefonos segítséget kérek');
    break;
}

mobile();
if (life > 2) { console.log('GRATULÁLOK, MÁR ELMEHETSZ EGYEDÜL SÖRÖZNI!'); } else { console.log('BOCS, DE A SÖRÖZÉS HELYETT INKÁBB FEKÜDJ LE AZ ESTI MESE UTÁN!'); }
