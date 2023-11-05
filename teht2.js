// alustetaan puhelinluettelo
const phoneBook = [];

// syötteen lukeminen
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// lisätään henkilö
function addPerson(name, phoneNumber) {
  phoneBook.push({ name, phoneNumber });
  console.log(
    `Lisättiin ${name} puhelinnumerolla ${phoneNumber} puhelinluetteloon.`
  );
}

// etsitään henkilö
function phoneNumberLookup(table, name) {
  for (const entry of table) {
    if (entry.name === name) {
      return entry.phoneNumber;
    }
  }
  return "Numeroa ei löytynyt.";
}

// toiminallisuus
function promptUser() {
  rl.question(
    "Paina 1, jos haluat lisätä henkilön, Paina 2 etsiäksesi numero tai Paina 3 poistuaksesi: ",
    (choice) => {
      if (choice === "1") {
        rl.question("Nimi: ", (name) => {
          rl.question("Numero: ", (phoneNumber) => {
            addPerson(name, phoneNumber);
            promptUser();
          });
        });
      } else if (choice === "2") {
        rl.question("Etsi nimellä: ", (name) => {
          const result = phoneNumberLookup(phoneBook, name);
          console.log(`Puhelinnumero henkilölle ${name}: ${result}`);
          promptUser();
        });
      } else if (choice === "3") {
        rl.close();
      } else {
        console.log("Error. Paina 1, 2, tai 3.");
        promptUser();
      }
    }
  );
}

promptUser();
