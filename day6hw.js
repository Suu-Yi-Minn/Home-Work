function press(obj){
    var x = "";
    if (document.getElementById("caps").checked){
        x = obj.innerHTML.toUpperCase();
    }else{
       x = obj.innerHTML.toLowerCase();
    }
    if ( x == "&nbsp;"){
        x=" ";
    }
    document.getElementById("showbox").innerHTML += x;
}
       
function cleartext(){
    document.getElementById("showbox").innerHTML="";

}
function charAt(){
    var x = document.getElementById("showbox").innerHTML;
    var index = document.getElementById("number").value;
    alert(x.charAt(index));

}
function charCodeAt(){
    var x = document.getElementById("showbox").innerHTML;
    var index = document.getElementById("number").value;
    alert(x.charCodeAt(index));
}
function toUpperCase(){
    var x = document.getElementById("showbox").innerHTML;
    alert(x.toUpperCase());
}
function trim(){
    var x = document.getElementById("showbox").innerHTML;
    alert(x.trim());
}
function includes(){
    var x = document.getElementById("showbox").innerHTML;
    var index = document.getElementById("number").value;
    alert(x.includes(index));
}
function lastIndexOf(){
    var x = document.getElementById("showbox").innerHTML;
    var index = document.getElementById("number").value;
    alert(x.lastIndexOf(index));
}
function startsWith(){
    var x = document.getElementById("showbox").innerHTML;
    var index = document.getElementById("number").value;
    alert(x.startsWith(index));
}
function endsWith(){
    var x = document.getElementById("showbox").innerHTML;
    var index = document.getElementById("number").value;
    alert(x.endsWith(index));
}
function upper(){
    
}

