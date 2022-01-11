Create an application that will return a random color in the command line.

It should work like this:

When somebody enters a specific command in the command line, a block of approximately 31x9 # characters and of a random color (using hex code, e.g. #ff0000) should be generated.

It should look pretty close to this:

Screen Shot 2020-09-09 at 15 53 33

It should be able to not only accept the command itself, but also the request for a:

    hue (e.g. green or red or blue)
    luminosity (e.g. light or dark)

...and then generate random colors that match those choices.

For example:

Screen Shot 2020-09-09 at 15 54 42
Stretch goals

- Libraries
  - https://www.npmjs.com/
  - yarn add
- Building a Node.js random emoji generator (emojilib)
  - Without any user input: print random emoji
  - With user input of a correct emoji name: print emoji
  - With user input of an incorrect emoji name: print error message that emoji doesn't exist
- Replit
  - Triggering Drone
