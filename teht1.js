const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function käännäMerkkijono(sana) {
  let käännös = "";
  for (let i = sana.length - 1; i >= 0; i--) {
    käännös += sana[i];
  }
  return käännös;
}

rl.question("Syötä sana: ", (sana) => {
  const käännös = käännäMerkkijono(sana);

  if (sana === käännös) {
    console.log("Sana on palindromi!");
  } else {
    console.log("Sana ei ole palindromi.");
  }

  rl.close();
});
