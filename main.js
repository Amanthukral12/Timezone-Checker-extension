 let btn = document.getElementById("getTimezone");
 
 
 if(btn !== null){
 btn.addEventListener("click",Timezone);
 }
 
 function Timezone(){
   let time = document.getElementById("showTimezone");
   time.textContent = Date();
 }
