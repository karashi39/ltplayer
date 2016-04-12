var pageNum = 0;
var passSec = 0;
var audio = new Audio('ban1.mp3');
function gongTimer(){
   setTimeout("audio.play()",300000);
   startShowing();
}
function showPassage(){
   passSec ++;
   var sec = passSec % 60;
   if(sec < 10){
      sec = "0" + sec;
   }
   var min = Math.floor(passSec / 60);
   var msg = min + ":" + sec;
   document.getElementById("timeArea").innerHTML = msg;
}
function startShowing(){
   audio.play();
   PassSec = 0;
   PasssageID = setInterval("showPassage()",1000);
}
function getQueryString(document){
   if (1 < document.location.search.length){ 
      var query = document.location.search.substring(1);
      var parameters = query.split('&');
      var result = new Object();
      for (var i = 0; i < parameters.length; i++){
         var element = parameters[i].split('=');
         var paramName = decodeURIComponent(element[0]);
         var paramValue = decodeURIComponent(element[1]); 
         result[paramName] = decodeURIComponent(paramValue);
      }
      return result;
   }
   return null;
}
