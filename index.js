
let count=0;
let countEl=document.getElementById('count-el')
function increment(){
    count=count+1
    countEl.innerText=count
}


let result=document.getElementById('result')
function save(){
    let countStr=count+" -";
    result.innerText+=countStr;
    countEl.innerText=0;
    count=0
}
