const ans = document.querySelector('.active')
const videoOne=document.getElementById('videoOne')

const forBars =document.querySelector('.forBars')
const close =document.querySelector('.icon').onclick = ()=>{
    ans.style.display='none';
    videoOne.pause();
    videoOne.currentTime=0;
    videoTwo.pause();
    videoTwo.currentTime=0;
    videoOne.style.display='none'
    videoTwo.style.display='none'
    
    //As we do two of it we can do it more five also
}


const closes =document.querySelector('.icons').onclick =()=>{
    forBars.style.display='none'
    

}

document.querySelector('.video1').onclick = ()=>{
    videoOne.style.display='flex'
   ans.style.display='flex';
   videoOne.play();
}
document.querySelector('.video2').onclick = ()=>{
    videoTwo.style.display='flex'
   ans.style.display='flex';
   videoTwo.play();
}

//For search button


const  inputWOrd = document.querySelector('#Search')
const video =document.querySelector(".video")
let x = document.getElementsByClassName("forSearch");
document.querySelector(".searchButton").onclick = ()=>{
    
    forBars.style.display='none'//for when we search something there will not show bar btn items


    const paragraph =document.querySelectorAll(".paragraph")
    let input= inputWOrd.value;
    input=input.toUpperCase();
   
    for ( var i = 0; i < x.length; i++) { 
        if (!paragraph[i].innerHTML.toUpperCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="flex";                 
        }
    }
}




  

     

          document.querySelector('#bars').onclick = ()=>{
              forBars.style.display='inline'
              
              counter++;
          }
      
   
    document.querySelector('#bars').ondblclick = ()=>{
        forBars.style.display='none'
        
        
    }

    document.querySelector('#videos').onclick = ()=>{
        forBars.style.display='none'

    }
     

    document.querySelector('#Search').onclick = ()=>{
        forBars.style.display='none'


    }
    //we can use when() insteaded of doing 3 4 work



    document.querySelector(".searchButton").ondblclick = ()=>{
inputWOrd.value='';
for ( var i = 0; i < x.length; i++){
    x[i].style.display="flex";
}
    }


