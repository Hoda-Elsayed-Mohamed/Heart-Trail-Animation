const bodyEl= document.querySelector('body');

window.addEventListener("mousemove", (e)=>{
//  const distanceFromTop = e.offsetX;
//  const distanceFromLeft = e.offsetY;
 const spanEl = document.createElement('span')
 bodyEl.appendChild(spanEl)
 spanEl.style.top =e.offsetY+'px'
 spanEl.style.left =e.offsetX+'px'
 const size = Math.random()*100;
 spanEl.style.width=size +"px";
 spanEl.style.height=size +"px";
 setTimeout(() => {
    spanEl.remove();
 }, 3000);

    console.log(spanEl)
})