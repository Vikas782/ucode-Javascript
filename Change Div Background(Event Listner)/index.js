let div=document.querySelector("#container");
let redButton=document.querySelector("#redButton");
let blueButton=document.querySelector("#blueButton");
let greenButton=document.querySelector("#greenButton");
console.log(div)

redButton.addEventListener("click",function()
{
    div.className=""
    div.classList.add("red")

})
blueButton.addEventListener("click",function()
{
    div.className=""
    div.classList.add("blue")
})
greenButton.addEventListener("click",function()
{
    div.className=""
    div.classList.add("green")
})