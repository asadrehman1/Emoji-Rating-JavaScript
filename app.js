const emojis = document.querySelectorAll(".emoji");
const stars = document.querySelectorAll(".star");
for(let j=0;j<stars.length;j++){
    stars[j].addEventListener("click",()=>{
   
     emo(j);
    })
}
function emo(j){
    for(let i=0;i<emojis.length;i++){
        if(i<=j){
          stars[i].classList.add("color");
        }
        else{
            stars[i].classList.remove("color");
        }
        emojis[i].style.transform=`translateX(-${j*50}px)`;
    }
}