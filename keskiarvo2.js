function ka(...args) {
  let summa = 0;
  for (x of args) summa += x;
  return summa / Math.max(1, args.length);
}

const numerot = [3, 4, 5];
const tulos = ka(numerot); //huom! ei kutsuta ka(numerot) olisi taulukon taulukko

console.log(tulos);
