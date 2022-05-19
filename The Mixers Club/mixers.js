const pictures = document.querySelectorAll(".cocktail-photo");
const cocktails = document.querySelector(".cocktails");
const mar = document.querySelector(".mar");
const long = document.querySelector(".long");
const cosmo = document.querySelector(".cos");
const maitai = document.querySelector(".mai");
const caip = document.querySelector(".cai");
const apple = document.querySelector(".apple");


// const pina = document.querySelector(".pina");
// const moj = document.querySelector(".moj");



const defolt = document.querySelector(".defolt");


const marPic = document.querySelector(".mar-pic")
const longPic = document.querySelector(".long-pic")
const cosPic = document.querySelector(".cos-pic")
const maiPic = document.querySelector(".mai-pic")
const caiPic = document.querySelector(".cai-pic")
const applePic = document.querySelector(".apple-pic")

// const pinaPic = document.querySelector(".pina-pic")
// const mojPic = document.querySelector(".moj-pic")


mar.addEventListener("mouseover", function( event ) {
    marPic.classList.add("show");
    mar.classList.add("show");
});
mar.addEventListener("mouseout", function( event ) {
    marPic.classList.remove("show");
    mar.classList.remove("show");

});

long.addEventListener("mouseover", function( event ) {
    longPic.classList.add("show");
    long.classList.add("show");
});
long.addEventListener("mouseout", function( event ) {
    longPic.classList.remove("show");
    long.classList.remove("show");
});


cosmo.addEventListener("mouseover", function( event ) {
    cosPic.classList.add("show");
    cosmo.classList.add("show");
});
cosmo.addEventListener("mouseout", function( event ) {
    cosPic.classList.remove("show");
    cosmo.classList.remove("show");
});


maitai.addEventListener("mouseover", function( event ) {
    maiPic.classList.add("show");
    maitai.classList.add("show");
});
maitai.addEventListener("mouseout", function( event ) {
    maiPic.classList.remove("show");
    maitai.classList.remove("show");
});


caip.addEventListener("mouseover", function( event ) {
    caiPic.classList.add("show");
    caip.classList.add("show");
});
caip.addEventListener("mouseout", function( event ) {
    caiPic.classList.remove("show");
    caip.classList.remove("show");
});


apple.addEventListener("mouseover", function( event ) {
    applePic.classList.add("show");
    apple.classList.add("show");
});
apple.addEventListener("mouseout", function( event ) {
    applePic.classList.remove("show");
    apple.classList.remove("show");
});

// martini beforehand showing 


defolt.onload = function( event ) { 
    defolt.classList.add("show");
};
cocktails.addEventListener("mouseover", function( event ) {
    defolt.classList.add("hidden");
});
cocktails.addEventListener("mouseout", function( event ) {
    defolt.classList.remove("hidden");
});


