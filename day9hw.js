let schedule = [];

function load(){
    var dt = new Date();
    var month = dt.getMonth();
    var year = dt.getFullYear();
    var daysInMonth = new Date(year,month,0).getDate();

    for (let index = 0; index < Number(daysInMonth); index++) {
       document.getElementsByClassName("days")[index].style.display = "flex";
       document.getElementsByClassName("date")[index].innerHTML = index+1;
       document.getElementsByClassName("day")[index].innerHTML =
       daychange(new Date(year,month,index).getDay());
        
    }
    function daychange(date){
        switch (date){
            case 0:
                day = "Sun";
                break;
            case 1:
                day = "Mon";
                break;
            case 2:
                day = "Tue";
                break;
            case 3:
                day = "Wed";
                break;
            case 4:
                day = "Thur";
                break;
            case 5:
                day = "Fri";
                break;
            case 6:
                day = "Sat";
                break;
        }
        return day;
    }
}
function getData(obj){
    document.getElementById("detail").style.display = "block";
    checkIsValue();
    document.getElementById("dd").innerHTML = obj.childNodes[1].innerHTML;
    document.getElementById("detailday").innerHTML = "(" + obj.childNodes[3].innerHTML + ")";
    document.getElementById("dplan").value = "";
    document.getElementById("nplan").value = "";
}
function okClick(){
    var date = document.getElementById("dd").innerHTML;
        var day = document.getElementById("detailday").innerHTML;
        var dayplan = document.getElementById("dplan").value;
        var nightplan = document.getElementById("nplan").value;

    if(document.getElementById("btn").value == ""){
        document.getElementById("dplan").style.display = "block";
        document.getElementById("dplan").value = document.getElementById("p1").innerHTML;
        document.getElementById("nplan").style.display = "block";
        document.getElementById("nplan").value = document.getElementById("p2").innerHTML;
        }
        

        document.getElementsByClassName("am")[Number(date)-1].innerHTML=dayplan;
        document.getElementsByClassName("pm")[Number(date)-1].innerHTML= nightplan;
  
    

    document.getElementById("detail").style.display = "none";

    schedule.push(date + "," + day + "," + dayplan + "," + "nightplan");
}
function checkIsValue(){
    if(document.getElementById("dplan").value != ""){
        document.getElementById("dplan").style.display = "none";
        document.getElementById("p1").innerHTML = document.getElementById("dplan").value;
        document.getElementById("btn").innerHTML = "Add Schedule";
    }else{
         document.getElementById("dplan").style.display = "block";
         document.getElementById("btn").innerHTML = "Ok";
    }
    if(document.getElementById("nplan").value != ""){
        document.getElementById("nplan").style.display = "none";
        document.getElementById("p2").innerHTML = document.getElementById("nplan").value;
        document.getElementById("btn").innerHTML = "Add Schedule";
    }else{
        document.getElementById("nplan").style.display = "block";
        document.getElementById("btn").innerHTML = "Ok";
    }

    

}
