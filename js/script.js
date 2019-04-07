var namajTiming = [
    { h: 4, m: 35, s: 0,i:0,AzanName: "Fajar"},
    { h: 12, m: 45, s: 0,i:1,AzanName: "Zohur"},
    { h: 16, m: 45, s: 0,i:2,AzanName: "Asar"},
    { h: 18, m: 30, s: 0,i:3,AzanName: "Magrib"},
    { h: 20, m: 0, s: 0,i:4,AzanName: "Esha"}
];


var countDown = document.getElementById('countDown');
var title = document.getElementById('title');
var audioFile = document.getElementById('audioFile');
var audioFile2 = document.getElementById('audioFile2');




setInterval(function () {
    checkAzanTime();
    playCounter();
},1000)



function checkAzanTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(time);
    // console.log(typeof (time));
    var currentHour     = today.getHours();
    var currentMin      = today.getMinutes();
    var currentSec      = today.getSeconds();
    // console.log(typeof (0));
    namajTiming.forEach(item=>{
        if ( (item.i == 0)&& currentHour == item.h && currentMin == item.m && currentSec == item.s){
            audioFile.autoplay = true;
            audioFile.load();
            // console.log("Fazar");
        }
        else if (item.i == 1,2,3,4 && currentHour ==item.h && currentMin == item.m && currentSec == item.s) {
            audioFile2.autoplay = true;
            audioFile2.load();
            console.log("Johur||Asar||Magrib||Esha");
        }
    })
}


function playCounter() {
    var today = new Date();
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    namajTiming.forEach(item=>{
        if (item.i == 0 && timeTosec(item.h, item.m, item.s)- timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds()))> 0 &&
            (timeTosec(item.h, item.m, item.s)-timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds()))<=8*60*60)){
            countDown.innerText = printTimer(timeTosec(item.h, item.m, item.s)-timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds())));
            title.innerText = "Sehri Time";
            // console.log("Sehri");
        }
        else if (item.i == 3 && timeTosec(item.h, item.m, item.s) - timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds()))> 0 &&
            (timeTosec(item.h, item.m, item.s)-timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds()))<=8*60*60)){
            countDown.innerText = printTimer(timeTosec(item.h, item.m, item.s)-timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds())));
            title.innerText = "Iftar Time";
            // console.log("iftar");
        }
        // else{
        //     title.innerText = "Current Time";
        //     countDown.innerText = (today.getHours()<10?"0"+today.getHours() : today.getHours()) + ":" + (today.getMinutes()<10? "0"+today.getMinutes(): today.getMinutes()) + ":" + (today.getSeconds()<10 ? "0"+today.getSeconds():today.getSeconds());
        // }
    })
}




function printTimer(sec) {
    hr = Math.floor(sec / 3600) % 24;
    // console.log(hr);
    mm = Math.floor(sec / 60) % 60;
    // console.log(mm);
    ss = sec % 60;
    // console.log(ss);

    var x = hr < 10? "0"+hr : hr;
    var y = mm < 10? "0"+mm : mm;
    var z = ss < 10? "0"+ss : ss;
    // console.log(hr,mm,ss);
    // return ((sec-sec%60)/60<10?("0"+(sec-sec%60)/60): (sec-sec%60)/60)+":"+(sec%60<10? ("0"+sec%60): sec%60)
    return ( x+":"+y+":"+z)
}
function timeTosec(h, m, s) {
    return h*60*60+m*60+s;
}
