const toggleBtn = document.querySelector('.toggle-btn');
const sky = document.querySelector('.sky');
const rootElem = document.documentElement;
console.log(sky)

toggleBtn.addEventListener('click', () => {
    rootElem.classList.toggle('night');
    sky.classList.toggle('night');
})

const countDwnVal = document.getElementById('count-down-value');
console.log(countDwnVal);
//I would add a countdown timer function that switches 
// window.addEventListener('DOMContentLoaded', () => {
//     function countDwn()
//     {
//         let n = 0;

//     }
// })