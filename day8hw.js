let r1 = [0,0,0,0]
let r2 = [0,0,0,0]
let r3 = [0,0,0,0]
let r4 = [0,0,0,0]

var first = 1;
var second = 2;
var start = first;
var current = start;
var finished = false;

function flip(obj){
    if (finished == false){
        var valid = true;
        let tmp = obj.id.split(",");

        switch (Number(tmp[0])) {
            case 1:
                 if (r1[Number(tmp[1])-1] != 0) {
                    valid = false;
                    break;
                 }
                r1[Number(tmp[1])-1] = current;
                break;
   
            case 2:
                if (r2[Number(tmp[1])-1] != 0) {
                    valid = false;
                    break;
                }
                r2[Number(tmp[1])-1] = current;
                break;

            case3:
                if (r3[Number(tmp[1])-1] != 0) {
                valid = false;
                break;
                }
                r3[Number(tmp[1])-1] = current;
                break;

            case 4:
                if (r4[Number(tmp[1])-1] != 0) {
                valid = false;
                break;
                }
                r4[Number(tmp[1])-1] = current;
                break;
        }

        if (valid) {
            obj.style.transform = "scaleY(-1)";
            //change color
            if (current == start) {
                obj.style.background = "tomato";
            }   else{
                obj.style.background = "teal";
            }
            //change position
            if (current == start){
                current = second;
                document.getElementById("turn").innerHTML = "Player 2 turn!";
                document.getElementById("turn").style.color = "teal";
            }   else{
                current = first;
                document.getElementById("turn").innerHTML = "Player 1 turn!";
                document.getElementById("turn").style.color = "tomato";
            }
            checkWhoWin();
            draw();
        }
    }
}
function checkWhoWin(){
    //horizontal check
    if (horizontal(first)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win!";
    }
    else if (horizontal(second)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win!";
    }
    //vertical check
    if (vertical(first)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win!";
    }
    else if(vertical(second)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win!";

    }
}
function horizontal(player){
   if(hrowCheck(r1,player)){
       return true;
   }
    else if(hrowCheck(r2,player)){
        return true;
    }
    else if(hrowCheck(r3,player)){
        return true;
    }
    else if (hrowCheck(r4,player)){
        return true;
    }
    else{
        return false;
    }

}
function hrowCheck(array,player){
    var count = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] == player){
            count++;
        }
        
    }
    if (count == 4){
        return true;
    }
    return false;
}


function vertical(player){
    for (let index = 0; index < 4; index++) {
        if(r1[index] == player &&
            r2[index] == player &&
            r3[index] == player &&
            r4[index] == player){
            return true;
        }  
    }
    return false;
}

function draw(){
    var count = 0;
    for (let index = 0; index < r1.length; index++) {
        if (r1[index] == 0){
            count++;
        }
    }
    for (let index = 0; index < r2.length; index++) {
        if (r2[index] == 0){
            count++;
        }
    }
    for (let index = 0; index < r3.length; index++) {
        if (r3[index] == 0){
            count++;
        }
    }
    for (let index = 0; index < r4.length; index++) {
        if (r4[index] == 0){
            count++;
        }
    }
    if (count == 0){
        finished = true;
        document.getElementById("winner").innerHTML = "Draw!";
        document.getElementById("winner").style.color = "red";
    }

}

