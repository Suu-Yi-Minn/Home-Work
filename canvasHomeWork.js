function load(){
    
    var c=document.getElementById("ctx");
    var cx=c.getContext("2d");
    var img=document.getElementById("img");
    cx.drawImage(img, 0, 135);

    cx.moveTo(0,0);
    cx.lineTo(300,300);
    cx.stroke();
    cx.moveTo(300,0);
    cx.lineTo(0,300);
    cx.stroke();

    cx.font="30px Arial";
    cx.strokeText("Canvas", 95, 95);
}