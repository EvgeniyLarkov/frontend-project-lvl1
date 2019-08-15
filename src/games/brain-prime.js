import { getRandomInt } from '../core';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const numsqrt = Math.sqrt(num);
  const iter = (divider = 2) => {
    if (numsqrt <= divider) {
      return 'yes';
    }
    if (num % divider === 0) {
      return 'no';
    }
    return iter(divider + 1);
  };
  return iter();
};

const generateData = () => {
  const randomVal = getRandomInt(2);
  return [randomVal, isPrime(randomVal)];
};

export { generateData, rule };
