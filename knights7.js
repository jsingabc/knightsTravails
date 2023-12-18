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

    for (let i = 0; i < 8; i++){
    let vectorX = currentX + xPossibleMoves[i]
    let vectorY = currentY + yPossibleMoves[i]

    //***************I may need to divide this by 8
    //console.log(vectorX, vectorY)

    if(board[vectorX] == undefined || board[vectorY] == undefined)
    continue

    if(board[vectorX][vectorY] == "X")        
    continue


    queue.push(vectorX, vectorY)
    visited.push(vectorX, vectorY)

    let path = []
    path.push(vectorX, vectorY)
    console.log(path)


    path.forEach(function(item, index, array){
        if(array[index] % 8 == 4)
        console.log(array)
    })
    
    board[vectorX][vectorY] = "X"
    }   
    
}

function knightsMove(startX, startY, endX, endY) {
    
    
      let currentX = queue.push(startX);
      let currentY = queue.push(startY);

      do{     

        findPath(currentX, currentY, endX, endY)
        
        currentX = queue.shift()
        currentY = queue.shift()
        
        if(board[endX][endY] == "X")
            return newPath(startX, startY, endX, endY, visited) + ' Done'//`done start: ${startX}, ${startY} to ${endX}, ${endY}`
            //return visited
      } while(queue.length > 0) 
      
}
    console.log(knightsMove(0,0,2,1))
    //console.dirxml(knightsMove(0,0,7,7))


    function newPath(startX, startY, endX, endY, visited){
    return `start: ${startX}, ${startY} ${tuples}, ${endX}, ${endY}`


    }
    

/*const newQueue = [3, 3, 2, 4, 0, 4, 0, 0, 2, 0, 3, 1, 2, 1, 1, 2, 5, 4, 4, 5, 2, 5, 1, 4, 4, 1, 5, 2];

const tuples = newQueue.reduce((acc, _, index) => {
  if (index % 2 === 0 && index % 7 === 0) {
    acc.push([newQueue[index], newQueue[index + 1]]);
  }
  return acc;
}, []);

console.log(tuples);*/