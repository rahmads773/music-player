let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let body = document.querySelector("body");

onload = (eo) => {
if (localStorage.getItem("momo") != null) {
    mode(localStorage.getItem("momo"));
}else{
    body.classList.add("default");
}
}
btn1.addEventListener("click",  (eo) => {
    mode("case1");
    localStorage.setItem("momo","case1");
})
btn2.addEventListener("click",  (eo) => {
    mode("case2");
    localStorage.setItem("momo","case2");
})



function mode(bk){
    if (bk == "case1") {
        body.classList.remove("b2");
    body.classList.add("b1");
    } else if(bk == "case2") {
        body.classList.remove("b1");
    body.classList.add("b2");
    }
}
