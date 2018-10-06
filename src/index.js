module.exports = function getZerosCount(number, base) {

  let i = 2;
  let multiplier = [];

  while (base > 1) {
    while (base % i === 0) {
      multiplier.push(i);
      base = base / i;
    }
    i++;
  }

  let sum = 0;
  let power = 1;
  const length = multiplier.length;
  let result = [];

  for (let j = 0; j < length; j++) {
    multiplier[j] === multiplier[j + 1] ? power++ : power = 1

    for (let k = multiplier[j]; k <= number; k *= multiplier[j]) {
      sum += Math.floor(number / k);
    }
    result.push(Math.floor(sum / power));
    sum = 0;
  }
  return Math.min.apply(null, result);
}