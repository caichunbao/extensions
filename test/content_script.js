document.body.style.backgroundColor = 'orange';
console.log("content_sc")

window.addEventListener("message", function(event) {
    console.log(123)
}, false);


// 在页面上插入代码

let btnElem = document.getElementsByClassName('btn')

if(btnElem && btnElem[0]){
    btnElem[0].style.backgroundColor = "yellow"
}