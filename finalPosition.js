const moves = ["north", "north", "west", "west", "north", "east", "north"];

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  // position = [];
  for (const move of moves) {
    if (move === "north") {
      y++;
    }
    if (move === "south") {
      y--;
    }
    if (move === "west") {
      x--;
    }
    if (move === "east") {
      x++;
    }
  }
  // position.push(x);
  // position.push(y);
  return [x, y];
}

console.log(finalPosition(moves));
