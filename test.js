function drawHashes(w, h) {
  let box = '';
  if (h > 3) {
    const top = (h - 3) / 2;
    for (let i = 0; i <= top; i++) {
      for (let j = 0; j < w; j++) {
        box += '#';
      }
      box += '\n';
    }
  }
  return box;
}

console.log(drawHashes(31, 9));
