const mainPart=document.getElementById('mainpart')
const header=document.getElementById('header')
var timeleft=00;
var time= setInterval(function() {
if(timeleft>=2)
{
//header.style.display='none';
mainPart.style.display='inline';
header.style.display='none';
}
timeleft+=1;

if(timeleft>=3){
  clearInterval(time);
}

},1000);
//or you can use setTimeOut for next way
