
const ul= document.querySelector('ul');


document.querySelector('#hamburger-menu').onclick = () => {
 ul.classList.toggle('active');
};












window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});


ul.classList.add('sticky');



const text = document.querySelector('.text-one');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Walau gak punya Uang";
    },0);
    setTimeout(() => {
        text.textContent = "Walau Budget pas-pasan";
    },4000);
    setTimeout(() => {
        text.textContent = "Walau baru lulus Kuliah";
    },8000);
    setTimeout(() => {
        text.textContent = "Walau banyak Urusan";
    },12000);
}


textLoad();
setInterval(textLoad, 16000);