// Luodaan Henkilo-luokka
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

// Luodaan Urheilija-luokka, joka perii Henkilo-luokan
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  // Getterit ja setterit saantifunktioiden määrittämiseksi
  getLinkkiKuvaan() {
    return this.linkkiKuvaan;
  }

  setLinkkiKuvaan(linkkiKuvaan) {
    this.linkkiKuvaan = linkkiKuvaan;
  }

  getOmaPaino() {
    return this.omapaino;
  }

  setOmaPaino(omapaino) {
    this.omapaino = omapaino;
  }

  getLaji() {
    return this.laji;
  }

  setLaji(laji) {
    this.laji = laji;
  }

  getSaavutukset() {
    return this.saavutukset;
  }

  setSaavutukset(saavutukset) {
    this.saavutukset = saavutukset;
  }
}

// Esimerkkejä Urheilija-olioista
const urheilija1 = new Urheilija(
  "Matti",
  "Meikäläinen",
  "Masa",
  1990,
  "https://esimerkkikuva.com/masa",
  80,
  "Juoksu",
  ["Kultamitali 100m", "Hopeamitali 200m"]
);
const urheilija2 = new Urheilija(
  "Liisa",
  "Lätkä",
  "Lissu",
  1985,
  "https://esimerkkikuva.com/lissu",
  65,
  "Jalkapallo",
  ["SM-kulta", "Maailmanmestaruus"]
);
const urheilija3 = new Urheilija(
  "Eero",
  "Einstein",
  "Eki",
  2000,
  "https://esimerkkikuva.com/eki",
  70,
  "Uinti",
  ["Kansallinen ennätys"]
);

// Tulostetaan Urheilija-olioiden tiedot konsoliin
console.table([urheilija1, urheilija2, urheilija3]);
