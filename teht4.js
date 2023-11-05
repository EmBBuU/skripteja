const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

const sanakirjaTiedosto = "sanakirja.txt";

// Hae sanakirjasta
app.get("/hae/:sana", (req, res) => {
  const sana = req.params.sana;
  const sanakirja = lueSanakirja();
  const englanninkielinenSana = sanakirja[sana];
  if (englanninkielinenSana) {
    res.json({ sana: sana, käännös: englanninkielinenSana });
  } else {
    res.status(404).json({ virhe: "Sanaa ei löytynyt sanakirjasta." });
  }
});

// Lisää sanakirjaan
app.post("/lisaa", (req, res) => {
  const { suomi, englanti } = req.body;

  if (!suomi || !englanti) {
    res
      .status(400)
      .json({ virhe: "Suomen- ja englanninkieliset sanat ovat pakollisia." });
    return;
  }

  const sanakirja = lueSanakirja();
  sanakirja[suomi] = englanti;

  try {
    fs.writeFileSync(sanakirjaTiedosto, JSON.stringify(sanakirja, null, 2));
    res.json({ viesti: "Sanakirjaan lisättiin uusi sana." });
  } catch (err) {
    res.status(500).json({ virhe: "Sanakirjan päivittäminen epäonnistui." });
  }
});

function lueSanakirja() {
  try {
    const data = fs.readFileSync(sanakirjaTiedosto);
    return JSON.parse(data);
  } catch (err) {
    // Jos tiedostoa ei ole vielä olemassa, palauta tyhjä sanakirja
    return {};
  }
}

app.listen(port, () => {
  console.log(`Sanakirja REST API toimii osoitteessa http://localhost:${port}`);
});
