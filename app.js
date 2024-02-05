// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1500;

// let snakeCells = [[0,0]]

// function draw(){

// }

// function update(){

// }

// setInterval(() =>{
//     update();
//     draw();

// }, 200);

//---------------update------------------------
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1100;

// let snakeCells = [[0,0],[50,0]];

// function draw(){
//     ctx.clearRect(0, 0, 1100, 600); //rub the canvas before starting new

//     for(let item of snakeCells){

//         ctx.fillStyle = 'blue'
//         ctx.fillRect(item[0], item[1], cellSize, cellSize)
//     }
// }

// function update(){
//     let headX = snakeCells[snakeCells.length-1][0];
//     let headY = snakeCells[snakeCells.length-1][1];

//     let newHeadX = headX + cellSize;
//     let newHeadY = headY ;

//     //last me value add krna hai
//     snakeCells.push([newHeadX,newHeadY])
//     //piche se remove krna hai
//     snakeCells.shift();
// }

// setInterval(() =>{
//     update();
//     draw();

// }, 200);


// -----------------moving the snake direction-------------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1100;
// let snakeCells = [[0,0],[50,0]];



// let direction = 'right';

// //appply event to give direction by pressing down or upkey
// //we dp event on document means pure page pr
// document.addEventListener('keydown',function(event){
//      //console.log(event);

//      if(event.key === 'ArrowUp'){ direction='up' }
//         else if(event.key === 'ArrowDown'){ direction='down' }
//          else if(event.key === 'ArrowLeft'){ direction='left' }
//          else{ direction='right' }
// })

// function draw(){
//         ctx.clearRect(0,0 ,1500,600); //rub the canvas before drawing new
//         for(let item of snakeCells){
//             ctx.fillStyle = 'red'
//             ctx.fillRect(item[0] , item[1] , cellSize ,cellSize )
//         }
//     }
    

// function update(){
//         let headX = snakeCells[snakeCells.length-1][0];
//         let headY = snakeCells[snakeCells.length-1][1]; 
    
//         let newHeadX;
//         let newHeadY;
    
//         if(direction === 'up'){
//             newHeadX = headX;  newHeadY = headY - cellSize;
//         }
//         else if(direction === 'down'){
//             newHeadX = headX;
//             newHeadY = headY + cellSize;
//         }
//         else if(direction === 'left'){
//             newHeadX = headX - cellSize;
//             newHeadY = headY;
//         }
//         else{
//             newHeadX = headX + cellSize;
//             newHeadY = headY;
//         }
    
//         snakeCells.push([newHeadX,newHeadY]);
//         snakeCells.shift();
    
//     }
    
//     setInterval(() => {
//         update();
//         draw();
//     }, 200);
    

//------------stop the snake while touching the walls----------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1500;
// let snakeCells = [[0,0],[50,0]];



// let direction = 'right';
// let gameOver = false;

// //appply event to give direction by pressing down or upkey
// //we dp event on document means pure page pr
// document.addEventListener('keydown',function(event){
//      //console.log(event);

//      if(event.key === 'ArrowUp'){ direction='up' }
//         else if(event.key === 'ArrowDown'){ direction='down' }
//          else if(event.key === 'ArrowLeft'){ direction='left' }
//          else{ direction='right' }
// })

// function draw(){
//      if(gameOver === true){
//         clearInterval(Id);
//         return;
//     }

//      ctx.clearRect(0,0 ,1500,600); //rub the canvas before drawing new
//         for(let item of snakeCells){
//             ctx.fillStyle = 'blue'
//             ctx.fillRect(item[0] , item[1] , cellSize ,cellSize )
//         }
//     }
    

// function update(){
//         let headX = snakeCells[snakeCells.length-1][0];
//         let headY = snakeCells[snakeCells.length-1][1]; 
    
//         let newHeadX;
//         let newHeadY;
    
//         if(direction === 'up'){
//             newHeadX = headX;  newHeadY = headY - cellSize;
//         }
//         else if(direction === 'down'){
//             newHeadX = headX;
//             newHeadY = headY + cellSize;
//         }
//         else if(direction === 'left'){
//             newHeadX = headX - cellSize;
//             newHeadY = headY;
//         }
//         else{
//             newHeadX = headX + cellSize;
//             newHeadY = headY;
//         }
    
//         snakeCells.push([newHeadX,newHeadY]);
//         snakeCells.shift();

//         // condition to stop the snake at walls
//     if(newHeadY >= 0 && newHeadY<boardHeight && newHeadX>=0 && newHeadX < boardWidth){
//         gameOver = false;
//     }
//     else{
//         gameOver = true;
//     }
    
//     }
    
// let Id= setInterval(() => {
//         update();
//         draw();
//     }, 200);


// -------------------generate food-------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1500;
// let snakeCells = [[0,0],[50,0]];



// let direction = 'right';
// let gameOver = false;

// let foodCell = generateRandomFood(); 



// //appply event to give direction by pressing down or upkey
// //we dp event on document means pure page pr
// document.addEventListener('keydown',function(event){
//      //console.log(event);

//      if(event.key === 'ArrowUp'){ direction='up' }
//         else if(event.key === 'ArrowDown'){ direction='down' }
//          else if(event.key === 'ArrowLeft'){ direction='left' }
//          else{ direction='right' }
// })

// function draw(){
//      if(gameOver === true){
//         clearInterval(Id);
//         return;
//     }
  

//      ctx.clearRect(0,0 ,1500,600); //rub the canvas before drawing new
//         for(let item of snakeCells){
//             ctx.fillStyle = 'blue'
//             ctx.fillRect(item[0] , item[1] , cellSize ,cellSize )
//             ctx.strokeStyle = 'white'
//             ctx.strokeRect(item[0] , item[1] , cellSize ,cellSize )
//         }

//         // DRAW FOOD

//         ctx.fillStyle='yellow';
//         ctx.fillRect(foodCell[0], foodCell[1], cellSize, cellSize);
//     }
    

// function update(){
//         let headX = snakeCells[snakeCells.length-1][0];
//         let headY = snakeCells[snakeCells.length-1][1]; 
    
//         let newHeadX;
//         let newHeadY;
    
//         if(direction === 'up'){
//             newHeadX = headX;  newHeadY = headY - cellSize;
//         }
//         else if(direction === 'down'){
//             newHeadX = headX;
//             newHeadY = headY + cellSize;
//         }
//         else if(direction === 'left'){
//             newHeadX = headX - cellSize;
//             newHeadY = headY;
//         }
//         else{
//             newHeadX = headX + cellSize;
//             newHeadY = headY;
//         }
    
//         snakeCells.push([newHeadX,newHeadY]);
//         if(newHeadX === foodCell[0] && newHeadY === foodCell[1]){
//            foodCell= generateRandomFood();
//         }else{
//             snakeCells.shift();
//         }
        

//         // condition to stop the snake at walls
//     if(newHeadY >= 0 && newHeadY<boardHeight && newHeadX>=0 && newHeadX < boardWidth){
//         gameOver = false;
//     }
//     else{
//         gameOver = true;
//     }
    
//     }
    
// function generateRandomFood(){
//     return [
//         ( Math.floor( (Math.random() * boardWidth) / cellSize ) ) * cellSize ,
//         ( Math.floor( (Math.random() * boardHeight) / cellSize ) ) * cellSize 
//     ]
// }

// let Id= setInterval(() => {
//         update();
//         draw();
//     }, 200);


// ---------------game over-----------
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let boardHeight = 600;
let boardWidth = 1500;
let snakeCells = [[0,0],[50,0]];



let direction = 'right';
let gameOver = false;

let foodCell = generateRandomFood(); 

let Score = 0;


//appply event to give direction by pressing down or upkey
//we dp event on document means pure page pr
document.addEventListener('keydown',function(event){
     //console.log(event);

     if(event.key === 'ArrowUp'){ direction='up' }
        else if(event.key === 'ArrowDown'){ direction='down' }
         else if(event.key === 'ArrowLeft'){ direction='left' }
         else{ direction='right' }
})

function draw(){
     if(gameOver === true){
        clearInterval(Id);

        // game over
        ctx.fillStyle='red'
        ctx.font = '50px sans-serif'
        ctx.fillText('GAME OVER !!', 600, 300);

        return;
    }
  

     ctx.clearRect(0,0 ,1500,600); //rub the canvas before drawing new
        for(let item of snakeCells){
            ctx.fillStyle = '#d00000'
            ctx.fillRect(item[0] , item[1] , cellSize ,cellSize )
            ctx.strokeStyle = 'white'
            ctx.strokeRect(item[0] , item[1] , cellSize ,cellSize )
        }

        // DRAW FOOD

        ctx.fillStyle='#9ef01a';
        ctx.fillRect(foodCell[0], foodCell[1], cellSize, cellSize);

        // score
        ctx.font = '25px sans-sarif';
        ctx.fillStyle = 'orange'
        ctx.fillText(`score:  ${Score}`, 30,50) 

    }
    

function update(){
        let headX = snakeCells[snakeCells.length-1][0];
        let headY = snakeCells[snakeCells.length-1][1]; 
    
        let newHeadX;
        let newHeadY;
    
        if(direction === 'up'){
            newHeadX = headX;  newHeadY = headY - cellSize;
        }
        else if(direction === 'down'){
            newHeadX = headX;
            newHeadY = headY + cellSize;
        }
        else if(direction === 'left'){
            newHeadX = headX - cellSize;
            newHeadY = headY;
        }
        else{
            newHeadX = headX + cellSize;
            newHeadY = headY;
        }
        gameOver = suicide(newHeadX, newHeadY);
        if(gameOver === true){
            clearInterval(Id);
    
            // game over
            ctx.fillStyle='red'
            ctx.font = '50px sans-serif'
            ctx.fillText('GAME OVER !!', 600, 300);
    
            return;
        }
        snakeCells.push([newHeadX,newHeadY]);
        if(newHeadX === foodCell[0] && newHeadY === foodCell[1]){
           foodCell= generateRandomFood();
           Score++;
        }else{
            snakeCells.shift();
        }
        

        // condition to stop the snake at walls
    if(newHeadY >= 0 && newHeadY<boardHeight && newHeadX>=0 && newHeadX < boardWidth){
        gameOver = false;
    }
    else{
        gameOver = true;
    }
    
    }
    
function generateRandomFood(){
    return [
        ( Math.floor( (Math.random() * boardWidth) / cellSize ) ) * cellSize ,
        ( Math.floor( (Math.random() * boardHeight) / cellSize ) ) * cellSize 
    ]
}

// snake eat itself game over

function suicide(newHeadX, newHeadY){

    for(let item of snakeCells)
    {
        if(item[0] === newHeadX && item[1] === newHeadY )
        {
             return true;
        }  
    }
    return false;
}


let Id = setInterval(() => {
        update();
        draw();
    }, 200); 
