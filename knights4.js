board = [[], [], [], [], [], [], [], []];

let queue = [];
let visit = [];

//board[0][0] = 0
//console.log(board)

function knightsMove(x1, y1, x2, y2) {
  //check if functions setup and works
  console.log(x1, y1, x2, y2);
  //create a queue and visited queue
  //let queue = []
  //let visit = []
  board[x2][y2] = "end";

  // add row/col to the array
  queue.push(x1, y1);
  console.log(queue);
  // add row/col to the visit
  visit.push(x1, y1);
  // while something is in the queue
  while (queue.length > 0) {
    //move the first entry off queue
    let newX = queue.shift();
    let newY = queue.shift();
    // if end reached break code and log something

    board[newX][newY] = "#";
    console.log(board);
    if (board[newX][newY] === board[x2][y2]) {
      //reached = true
      let end1 = visit.splice(0, x2);
      let end2 = end1.push(y2);

      console.log(end1);
      console.log(end2);
      console.log("found");
      break;
    }

    //checkpoint to see if i get this far in code
    explore(newX, newY);
  }
}

//possbile moves
let vectorX = [1, 2, 2, 1, -1, -2, -2, -1];
let vectorY = [2, 1, -1, -2, -2, -1, 1, 2];

//recursive function to traverse the board
function explore(newX, newY) {
  console.log("This is a teast");
  console.log(newX, newY);
  //loop through the row vectors in 2 directions, and then add the calculated 
  for (let i = 0; i < 8; i++) {
    let vectorAddX = newX + vectorX[i];
    let vectorAddY = newY + vectorY[i];

    console.log(vectorAddX, vectorAddY);
    //stay in bounds
    if(vectorAddX >= 0 && vectorAddX <= 7 && vectorAddY >= 0 && vectorAddY <= 7 && board[vectorAddX][vectorAddY] == null)
      continue;

    queue.push(vectorAddX);
    queue.push(vectorAddY);
    visit.push(vectorAddX, vectorAddY);

  }
}

console.log(knightsMove(1, 2, 5, 4));