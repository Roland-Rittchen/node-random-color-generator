import chalk from 'chalk';
import Randomcolor from 'randomcolor';
import { question } from 'readline-sync';

let col = '';
const argument = process.argv[2];

if (!argument) {
  col = Randomcolor();
} else if (argument === 'ask') {
  const hue = question('What should the hue be? ');
  const luminosity = question('Do you want it light or dark? ');
  col = Randomcolor({
    luminosity: luminosity,
    hue: hue,
  });
} else {
  // hue
  const hue = process.argv[2];
  // luminosity
  const luminosity = process.argv[3];
  col = Randomcolor({
    luminosity: luminosity,
    hue: hue,
  });
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
