const slider=document.querySelector("#limit");
const slider_value=document.querySelector("#limit-value");
const lowerCase=document.querySelector("#lowercase");
const upperCase=document.querySelector("#uppercase");
const number=document.querySelector("#number");
const symbol=document.querySelector("#Symbols");
const btn=document.querySelector("#genBtn")
const passBox=document.querySelector('.passBox')
const copy=document.getElementById("copy")

slider_value.textContent=slider.value
slider.addEventListener("input",()=>{
    slider_value.textContent=slider.value
});


btn.addEventListener('click',()=>{
    passBox.value=codeGenerator();
})

let lowerchar = "abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789"
let upperchar=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`
let symbols=`@#$*-_~`
function codeGenerator(){
    let code="";
    let allchars="";
    allchars +=lowerCase.checked ? lowerchar :"";
    allchars +=upperCase.checked ? upperchar :"";
    allchars +=number.checked ? numbers :"";
    allchars +=symbol.checked ? symbols :"";
    

    if(allchars=="" || allchars.length==0){
        return "please select alteat one field...";
    }

    for(let i=1;i<=slider.value;i++){
   code+= allchars.charAt(Math.floor( Math.random()*allchars.length));
    
    }
    return code;
 
}

copy.addEventListener('click',()=>{
    if(passBox.value!=='' || passBox.value>=1){
navigator.clipboard.writeText(passBox.value)
copy.addEventListener('click',()=>{
    

})

    }

    
})