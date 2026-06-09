function showTime(){
    var date =newDate();
    var h =getHour();
    var m =getMinutes();
    var s =getseconds();
var session  ="AM";

if(h == 0){
    h= 12;
}

if(h>12){
    session = "PM";
}
h = (h < 10) ? "0 " + h : h;
m = (m < 10) ? "0 " +  m : m ; 
 s = (s < 10) ? "0 " + s : s ;

 var time =h+":"+m+":"+s+""+session
 document.getElementById("MyClockDisplay").innerText = time;
 srtTimeout(showTime,1000);

}
showTime();