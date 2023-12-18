let board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

queue = []
visited = []

let counter = 0

let xPossibleMoves = [2, 1,-1,-2, -2, -1, 1, 2]
let yPossibleMoves = [1, 2, 2, 1, -1, -2,-2,-1]


function findPath(currentX, currentY, endX, endY){

    
    console.log(currentX, currentY)
    
    console.log(queue)
    console.log(visited)
    queue.forEach(function(item){
        visited.push(item)
    })
    console.log(visited)

    for (let i = 0; i < 8; i++){
    let vectorX = currentX + xPossibleMoves[i]
    let vectorY = currentY + yPossibleMoves[i]
    console.log("next hop X: " + vectorX + " Y: " + vectorY)

    if(board[vectorX] == undefined || board[vectorY] == undefined)
    continue

    if(board[vectorX][vectorY] == "X")
    continue

    if(board[vectorX][vectorY] == "END")
    return "Done"

    queue.push(vectorX, vectorY)
    console.log(queue)
    board[vectorX][vectorY] = "X"
    }

    //Stuff out of my for loop happens Once
    tail = 2
    queue = queue.slice(tail)
    console.log(queue + " : queue")
    console.log(board)
    
    queue.forEach(function(item){
        visited.push(item)
    })
    console.log(visited)


    queue.forEach(function(item){
     return findPath(currentX, currentY, endX, endY);
    });

    return { currentX, currentY, endX, endY };
}

function knightsMove(startX, startY, endX, endY) {
    if (board[endX][endY] == null) {
      // let currentX = startX;
      // let currentY = startY;
      
      queue.push(startX);
      queue.push(startY);
      board[endX][endY] = "END";
      board[startX][startY] = "START";
    
        findPath(startX, startY, endX, endY);
    }
}

    knightsMove(0,0,5,4)

