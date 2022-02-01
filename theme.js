let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let main = document.getElementById("main");
let body = document.querySelector("body");

onload = (eo) => {
if (localStorage.getItem("momo") != null) {
    mode(localStorage.getItem("momo"));
}else{
    body.classList.add("default");
    main.classList.add("maindefault");
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
    main.classList.remove("main1");
    body.classList.add("b1");
    main.classList.add("main2");
    } else if(bk == "case2") {
        body.classList.remove("b1");
    main.classList.remove("main2");
    body.classList.add("b2");
    main.classList.add("main1");
    }
}
