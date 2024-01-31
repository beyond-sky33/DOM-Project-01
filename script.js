let img1 = document.querySelector("#one");
let img2 = document.querySelector("#two");

let btn = document.querySelector('button');

btn.addEventListener("click",function(){

    let src1 = img1.src;
    let src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
})