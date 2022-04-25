// var gameContainer = document.getElementsByClassName(".game-container")

var size= 3 ;
var data = [];
// var gameBox = document.getElementsByClassName("game-box")


function puzzleBlocks(){

    var totalNumber = size * size -1 ;
    for(var j =0 ;j < size; j++){
        data.push([]);
    }
    for (var i=0 ; i < totalNumber;i++){
        // var block = document.createElement('div');

        var val=i+1;

        var block = $("<div>" + val + "</div>");
        block.addClass("game-box");
        // block.innerHTML   =`${i+1}`


        $("#game-container").append(block);


        var col = i % size;
        var row = Math.floor(i / size);
        posBlock(block,col,row);
        data[row].push(val);
    }
    data[size- 1].push(0);
    $(".game-box").click(blockClicked);

    console.log(data)
    // shuffle(data);
    // shuffleBoard(data);

    // shuffleBoard(data);
    // shuffleBoard(data);



  

}
function posBlock(block , col , row){
        var x = (col * 100) + "px";
        var y = (row * 100) + "px";
        $(block).css("left",x);
        $(block).css("top",y);
        // block[0].style.left=x;
        // block[0].style.top=y;
    // console.log(block[0].style.top)
    // console.log(block[0].style.left)



    // block.style.left=x;
    // block.style.top=y;
    // console.log(block)



}
function blockClicked(e){
    var block = e.currentTarget;
    var value = Number(block.innerText);
        console.log(value)


    var x, y;
    out:
    for (y=0;y < size; y += 1){
        for(x = 0; x < size; x += 1){
            if (data[y][x] == value){
                break out;
            }
        }

    }
    // alert(x + " " + y);

    shiftBlock(block,x,y);


    // alert(block.textContent);
    // console.log(value)
}
// var block = document.getElementsByClassName("block");
// console.log(block)
// var arrayOfBlock = Array.from(block);
// console.log(arrayOfBlock)


// arrayOfBlock.onclick=blockClicked();
// console.log(data)

function shiftBlock(block,col,row){
    var directionX=0 ;
    var directionY=0;
if 
(col > 0 && data[row][col-1] == 0)
{
directionX =-1;
}else if
(col <size -1 && data[row][col+1] ==0)
{
    directionX= 1;
}else if 
(row > 0 && data[row -1 ][col] ==0)
{
    directionY=-1;
}else if 
(row <size-1 && data[row+1][col] ==0)
{
    directionY=1;
}else
{
    return;
}
var value = data[row][col];
data[row + directionY][col + directionX]=value;

data[row][col]=0;

console.log(data)
posBlock(block, col + directionX,row + directionY)
console.log(block,col,row);
}
puzzleBlocks();


 

// function puzzleWin(){
//     const win=[];


//     var totalNumber = 3 * 3 -1 ;

    

//     for(var k =0 ;k < 3; k++){
//         win.push([]);
//     }
//     for (var l=0 ; l < totalNumber;l++){
//         // var block = document.createElement('div');
//         var val=l+1;
        
//         // block.innerHTML   =`${i+1}`
//         var col = l % 3;
//         var row = Math.floor(l / 3);

//         data[row].push(val);

//     }
//     win[ - 1].push(0)
//     console.log(win)

  

// }
// puzzleWin()


// program to create a two dimensional array

// function twoDimensionArray() {
//     let arr = [];

//     // creating two dimensional array
//     for (let i = 0; i< size; i++) {
//         for(let j =0; j< size; j++) {
//             arr[i] = [];
//         }
//     }

//     // inserting elements to array
//     for (let i = 0; i< size; i++) {
//         for(let j = 0; j< size; j++) {
//             arr[i][j] = j;
//         }
//     }
//     return arr;
// }

// twoDimensionArray();



// function shuffle(data1) {
//     for (var j, x, i = 9;
//          i; j = Number(Math.random() * i)
//          , 
//          x = data1[i--],
//           data1[i] = data1[j],
//            data1[j] = x);
//     return data1;
//     console.log(data1);
// };


// shuffle(data);
function shuffleBoard(data) {
    
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            var i1 = Math.floor(Math.random() * (data.length));
            var j1 = Math.floor(Math.random() * (data.length));

            var temp = data[i][j];
            data[i][j] = data[i1][j1];
            data[i1][j1] = temp;

            

        }


    }

    console.table(data);
    
    $("game-container").html("");
    // const numbers = [65, 44, 12, 4];
    // numbers.forEach(myFunction)
    
    // document.getElementById("demo").innerHTML = numbers;

//     data[0].forEach(singleShuffle)
//     document.getElementById("game-container").innerHTML = data[0];
//     data[1].forEach(singleShuffle)
//     document.getElementById("game-container").innerHTML = data[1];
//     data[2].forEach(singleShuffle)
//     document.getElementById("game-container").innerHTML = data[2];


// }
//     function singleShuffle(item, index, arr) {
//         arr[index] = item;
//         var div = document.createElement("div");
//           div.innerHTML = document.getElementsByClassName("game-box").value;
//           document.body.appendChild(div);
//       }
}

    //   shuffleBoard(data);
      console.log(dats)
