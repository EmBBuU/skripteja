function keskiarvo1(x = 0, y = x) {
  return (x + y) / 2;
}

function keskiarvo2(x, y) {
  return y === undefined ? x : (x + y) / 2;
}

function keskiarvo3(x, y = x) {
  return (x + y) / 2;
}

console.log(keskiarvo1(3));
