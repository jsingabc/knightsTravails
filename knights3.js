
board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

let queue = []
let visit = []

//board[0][0] = 0
//console.log(board)

function knightsMove(sr, sc, er, ec){
    //check if functions setup and works
    console.log(sr, sc, er, ec)
    //create a queue and visited queue
    //let queue = []
    //let visit = []
    //board[er][ec] = "end"

    // add row/col to the array
    queue.push(sr, sc)
    console.log(queue)
    // add row/col to the visit
    visit.push(sr, sc)
    // while something is in the queue
    while (queue.length > 0){
        //move the first entry off queue
        let r = queue.shift()
        let c = queue.shift()
        // if end reached break code and log something

        board[r][c] = "#"
        console.log(board)
        if(board[r][c] === board[er][ec]){
            //reached = true
            let end = er
            let end1 = visit.splice(0, end)
            let end2 = end1.push(ec)
        
            console.log(end1)
            //console.log(end2)
            console.log("found")
            break
            }
        
        //checkpoint to see if i get this far in code
        explore(r, c)
    }
}

//possbile moves
let dr = [1, 2, 2, 1, -1, -2, -2, -1]
let dc = [2, 1, -1, -2, -2, -1, 1, 2]

//recursive function to traverse the board
function explore(r, c){
    console.log("This is a teast")
    console.log(r,c)
    //loop through dr and dc in 4 directions???
   for (let i = 0; i < 8; i++){
       let rr = r + dr[i]
       let cc = c + dc[i]
    

    console.log(rr, cc)
    //stay in bounds
    if(rr >= 0 && rr <= 7 && cc >= 0 && cc <= 7 && board[rr][cc] == null || board[rr][cc] == "end" || board[rr][cc] == "#")
       continue


    queue.push(rr)
    queue.push(cc)
    visit.push(rr, cc)

    }
}


console.log(knightsMove(3,3,5,4))



