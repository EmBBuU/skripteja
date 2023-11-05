/*Kaikki työntekijät jakavat saman prototyyppiobjektin*/
const tyontekijaPrototype = {
  nostaPalkkaa: function (prosentti) {
    this.palkka *= 1 + prosentti / 100;
  },
};
function luoTyontekija(nimi, palkka) {
  const palautus = { nimi, palkka };
  Object.setPrototypeOf(palautus, tyontekijaPrototype);
  return palautus;
}

let matti = luoTyontekija("Matti Möttönen", 5000);
let liisa = luoTyontekija("Liisa Möttönen", 4000);
liisa.nostaPalkkaa(10);
console.log(matti);
console.log(typeof matti);
console.log(liisa);
console.log(typeof liisa);
