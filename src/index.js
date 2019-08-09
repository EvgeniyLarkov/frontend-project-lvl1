import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  return username;
};

export { greeting, askName };
