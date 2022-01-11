import chalk from 'chalk';
import { colord } from 'colord';

/*
var texts = 'val1  val2';
var index = texts.indexOf(' ');
var textModified = texts.substring(0, index);
var textModified1 = texts.substring(index + 1);
console.log(textModified);
console.log(textModified1);
*/
let h,
  s,
  l = 0;
let col = '';

const argument = process.argv[2];

// ask

if (!argument) {
  col = Math.floor(Math.random() * 16777215).toString(16);
  col = '#' + col;
} else {
  // hue
  const hue = process.argv[2];
  // luminosity
  const luminosity = process.argv[3];
  if (hue) {
    if (hue === 'red') {
      h = 0 + Math.floor(Math.random() * 30);
    }
    if (hue === 'green') {
      h = 100 + Math.floor(Math.random() * 40);
    }
    if (hue === 'blue') {
      h = 220 + Math.floor(Math.random() * 40);
    }
  }
  if (luminosity) {
    if (luminosity === 'light') {
      l = 0 + Math.floor(Math.random() * 50);
    } else if (luminosity === 'dark') {
      l = 50 + Math.floor(Math.random() * 50);
    }
  }
  // console.log(argument);
  // console.log(hue);
  s = Math.floor(Math.random() * 100);
  console.log(`hsl(${h}, ${s}%, ${l}%)`);
  col = colord(`hsl(${h}, ${s}%, ${l}%)`).toHex();
}

console.log(
  chalk.hex(col)(`

###############################
###############################
###############################
#####                     #####
#####       ${col}       #####
#####                     #####
###############################
###############################
###############################

`),
);
console.log(col);
