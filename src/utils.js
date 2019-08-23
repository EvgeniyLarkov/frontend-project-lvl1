const minValue = 0;
const maxValue = 20;

export default (min = minValue, max = maxValue) => {
  const value = Math.floor(Math.random() * (max + 1 - min)) + min;
  return value;
};
