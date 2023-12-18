function queue(){
    const queue = [];

    return {
        enqueue(element) {
            queue.push(element);
        },
        dequeue(element){
            return queue.shift();
        },
        front(){
            return queue[0]
        },
        isEmpty(){
            return queue.length === 0;
        },
        size(){
            return queue.length;
        },
    };
}
//create variables to handle row and column queue
let rq = queue()
let cq = queue()

//queue for visits to cells
let visit = [
    [],
    []
];

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
// variable to check the state of game
let finished = false

function knightMove(sr, sc, er, ec){

//queue started with row queue-rq and sr
//queue started with column queue=cq and sc
rq.enqueue(sr)
cq.enqueue(sc)

//
//also add both start nodes to visited list
visit[0][0] = sr
visit[1][0] = sc

//while loop that keeps going with something in queue
while(rq.size() > 0){
    
    //remove the first element from the array
    r = rq.dequeue()
    c = cq.dequeue()


    board[er][ec] = "end"
    console.log(r,c)

    console.log(board)
    
    //check if the current character in the grid is a end node
    if(board[r][c] === "end"){

        ///***I am stuck here on how to handle the board
        finished = true;
        console.log(finished)
        break
       }
       console.log(r,c)
       console.log("this work")
    findPath(r, c)
    console.log(finished)
    if(finished = false){
       console.log("There is not path to end")
       return
    } else{
        finished = true
        let path = []
        p = [er][ec]
        do {
            path.unshift(p)
        } while ((p = visit.unshift()) != null);
        console.log(`${path}`)
        }
    }
}


//find path will loop thru this lost below
let dr = [1, 2, 2, 1, -1, -2, -2, -1]
let dc = [2, 1, -1, -2, -2, -1, 1, 2]

function findPath(r,c){
    console.log("test two")
    //8 diff directions loop over the dr and dc variables 
    for (let i = 0; i < 8; i++){
        rr = r + dr[i]
        cc = c + dc[i]
        //push the moves on the board as well
        board.push(rr)
        board.push(cc)
        console.log("test three")
    if(rr >= 0 && rr <= 7 && cc >= 0 && cc <= 7 && board[rr][cc] == null)
        continue
    
        

    rq.enqueue(rr)
    cq.enqueue(cc)
    visit.push([0][0])
    visit.push([1][0])
    console.log("test")
    }
}



console.log(knightMove(0,0,2,1))


//Test code below to figure stuff out i dont get

let test1 = [
    [],
    []
]

test1[0][3] = 5
test1[0][1] = 5
test1[1][1] = 3

//console.log(test1)

let myArray = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0]
    ];

   // console.log(myArray[2][0])