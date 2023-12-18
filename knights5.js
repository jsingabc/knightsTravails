
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

//first in first out principal handles steps
let queue = []
//holds all the seen nodes
let visited = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

let xPossibleMoves = [2, 1,-1,-2, -2, -1, 1, 2]
let yPossibleMoves = [1, 2, 2, 1, -1, -2,-2,-1]




function exploreBoard(){
    


    //shifts off the first node in queue
    let currentRow = queue.shift()
    let currentCol = queue.shift()

    console.log(currentRow + " current row in queue")
    console.log(currentCol + " current col in queue")

    //loop thru the vector in all possible moves above
    for (let i = 0; i < 8; i++){

        let vectorRow = currentRow + xPossibleMoves[i]
        let vectorCol = currentCol + yPossibleMoves[i]

        if(vectorRow >= 0 && vectorRow <= 7 && vectorCol >= 0 && vectorCol <= 7 && board[vectorRow][vectorCol] == null)
      continue;


        console.log(vectorRow, vectorCol, 
            " :this is the first next hop")

        //add newly created vectors to queue
        queue.push(vectorRow)
        queue.push(vectorCol)
        console.log(queue)
        

        if(visited[vectorRow] === undefined)
        continue

        visited[vectorRow][vectorCol] = "visited"
        console.log(visited)
        
        board[vectorRow][vectorCol] = "#"
        console.log(board)

        
    }
    return queue
  }
  


function knightsMove(startX, startY, endX, endY){
    

    board[startX][startY] = "#";
    console.log(board)

    visited[startX][startY] = "visited";
    console.log(visited)

    queue.push(startX, startY)
    console.log(queue + " :starting array queue")
    //base case

    //I need to update the queue and board somehow
    while (board[endX][endY] == null)
         
    return exploreBoard()
    
    }

knightsMove(0,0,5,4)
