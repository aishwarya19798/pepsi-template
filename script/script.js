const blueButton = document.querySelector("#blueButton");
const greyButton = document.querySelector("#greyButton");
const blackButton = document.querySelector("#blackButton");
const blue = document.querySelector("#blue");
const grey = document.querySelector("#grey");
const black = document.querySelector("#black");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");

function onProductChange(bgColor,showP1,showP2,showP3,navClass)
{
    body.style.backgroundColor = bgColor;
    blue.style.display = showP1 ? "unset":"none";
    grey.style.display = showP2 ? "unset": "none";
    black.style.display = showP3 ? "unset": "none";
    nav.className =  navClass + " nav";
}

blueButton.addEventListener('click',()=>{
    onProductChange("#006BAC",true);
});
greyButton.addEventListener('click',()=>{
    onProductChange("gray",false,true);
});
blackButton.addEventListener('click',()=>{
    onProductChange("black",false,false,true,"blackNav");
});