let count = 0;
let sum = 0;
const arr = [1, 0, 3, 4, 5, 6, 7, 8, 9, 10];
//const arr = [];
//const arr = [1,2,3,4,5,0,6,7,8,9,10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) continue;
  count++;
  console.log("alkion arvo:" + arr[i].toString());
  console.log("kierros:" + count.toString());
  sum += arr[i];
}
