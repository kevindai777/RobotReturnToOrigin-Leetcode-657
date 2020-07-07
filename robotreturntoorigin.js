//Objective is to see if, after some moves, a robot returns back to the origin.

let moves = 'UD'


//O(n) solution using a hashmap to store the directions.

let start = [0,0]
    
let map = {
    'U': [1,0],
    'D': [-1,0],
    'L': [0,-1],
    'R': [0,1]
}
    
for (let i = 0; i < moves.length; i++) {
    start[0] += map[moves[i]][0]
    start[1] += map[moves[i]][1]
}
    
return start[0] == 0 && start[1] == 0