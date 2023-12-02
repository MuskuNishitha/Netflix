let a=document.body;
a.addEventListener("mousemove",()=>{
    let veddddd=document.getElementById("veddddd")
    console.log(veddddd);
  let b=veddddd.classList.toggle(true);
  if(b){
    veddddd.play();
  }
  else{
    veddddd.pause();
  }

})

let d=document.body;
d.addEventListener("mousemove",()=>{
    let vd=document.getElementById("vd")
    console.log(vd);
    let e=vd.classList.toggle(true);
    if(e){
        vd.play();
    }
    else{
        vd.pause();
    }

},false)