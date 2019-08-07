#!/usr/bin/env node
import askName from '..';

console.log('Welcome to the Brain Games!');
const username = askName();
console.log(`Hello, ${username}`);
