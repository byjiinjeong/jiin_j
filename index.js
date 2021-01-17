const body = document.querySelector('body');
const loading = document.querySelector('.loading');
const loadText = document.querySelector('.loadText');
window.addEventListener('load', () => {
    // loadText.innerText = "finished";
    // body.style.overflow = "auto";
    // loading.style.zIndex=  -1;
    // loading.style.opacity = 0;
    // loading.style.pointerEvent= "none";
   
  
    setTimeout(() => {
        body.style.overflow = "auto";
        loading.style.zIndex=  -1;
        loading.style.opacity = 0;
        loading.style.pointerEvent= "none";
        // loading.style.display = "none";
    },5000);
});









