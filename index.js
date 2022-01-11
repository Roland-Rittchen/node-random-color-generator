import chalk from 'chalk';
import { colord } from 'colord';
import { question } from 'readline-sync';

function onErr(err) {
  console.log(err);
  return 1;
}

function genColor(hue, shade, luminosity) {
  let h,
    l = 0;
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
  const s = Math.floor(Math.random() * 100);
  return colord(`hsl(${h}, ${s}%, ${l}%)`).toHex();
}

let col = '';

const argument = process.argv[2];

if (!argument) {
  col = Math.floor(Math.random() * 16777215).toString(16);
  col = '#' + col;
} else if (argument === 'ask') {
  const hue = question('What should the hue be? ');
  const luminosity = question('Do you want it light or dark? ');
  col = genColor(hue, '', luminosity);
} else {
  // hue
  const hue = process.argv[2];
  // luminosity
  const luminosity = process.argv[3];
  col = genColor(hue, '', luminosity);
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
