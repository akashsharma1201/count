let number=document.querySelector("#number");
let text =number.innerHTML;
let count=0

function changevalue(a){
    if(a==1){
        count=count+1
        number.innerHTML=count
    }else if(a==-1){
        count=count-1
        number.innerHTML=count
    }
}