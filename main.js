

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function getRandomImage() {
    path = 'static/pics/'
    var num = randomNumber(1000, 1194);
    var img = path + num + '.jpg';
    return img;
}
document.addEventListener('DOMContentLoaded', (event) => {
    var img = document.getElementById('retroPic');
	
	img.src = getRandomImage();
    
});
const ship = document.getElementById("ship");
window.onscroll = function (e) {
    ship.translate="0 "+window.scrollY+"px";
    
};



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

  let iteration = 0;
  
  const title = document.getElementById("title");
  clearInterval(interval);
  interval = setInterval(() => {
  title.innerHTML = title.innerHTML
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
     
          return title.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 27)]
      })
      .join("");
    
    if(iteration >= title.dataset.value.length){
        interval=null;
     clearInterval(interval);
     
    }
    
    iteration += 1 ;
  }, 50);


