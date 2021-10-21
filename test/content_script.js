document.body.style.backgroundColor = 'orange';
console.log("content_sc")

window.addEventListener("message", function(event) {
    console.log(event)
}, false);


// 在页面上插入代码

let btnElem = document.getElementsByClassName('btn')

if(btnElem && btnElem[0]){
    btnElem[0].style.backgroundColor = "yellow"
}

let s = document.createElement("script")
s.type="text/javascript"
s.url='test.js'
document.head.insertBefore(s ,document.head.firstElementChild)

