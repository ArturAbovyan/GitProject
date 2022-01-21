// document.getElementById('input_number').onkeydown = function (e) {
//     return !(/[а-яА-Яa-zA]/.test(e.key));  // IE > 9
// }
let number = document.getElementById("input_number");
let vandak = document.getElementById("number");
let name_input = document.getElementById("input_holder");
let name = document.getElementById("name");
let year_input = document.getElementById("year_input");
let year = document.getElementById("year");
let month_input = document.getElementById("month_input");
let month = document.getElementById("month");
let cvv_input = document.getElementById("input_cvv")
let cvv = document.getElementById("cvv");
let hover1 = document.getElementById("card-front");
let hover2 = document.getElementById("card-back");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let z = vandak.innerText;
let i = 0;
let j = 0;
let u = 4;
let m = 3;
let q = 4;
// if(number.value.length == 0){
//     vandak.innerText = "#### #### #### ####"
// }
number.addEventListener("input", ()=>{
    
    
    if(number.value.length !=0){
    let k = "#";
    let f = "#";
    let e = "#";
    let o = "#";
    var l = number.value.toString().length;
   if(l<=4) {
    m = 4 - l;
}
if(l>4 && l<=9) {
    u = 9 - l;
}
if(l>9 && l<=14) {
    q = 14 - l;
}
if(l>14 && l<=19) {
    i = 19 - l;
}

    k = k.repeat(m);
    f = f.repeat(u);
    e = e.repeat(q);
    o = o.repeat(i);
    
    if(l > 3 && l<=8){
        u--;
    }
    
    if(l==4 || l==9 || l==14){
        // 
        number.value = number.value + " ";
        

    }
   if(l<=4){
    num1.innerText = number.value.toString() + k;
   }
    if(l>4 && l<=9){
    num2.innerText = number.value.toString().substr(4) + f
    
    
}
if(l>9 && l<=14){
    num3.innerText = number.value.toString().substr(9) + e
}
if(l>14 && l<=19){
    num4.innerText = number.value.toString().substr(14) + o;
}

            
        
        }
 
        if(vandak.innerText[0]==3){
            let img = document.getElementById("card_type");
            img.style.backgroundImage = "url('img/american.png')";
        }
        if(vandak.innerText[0]==4){
            let img = document.getElementById("card_type");
            img.style.backgroundImage = "url('img/visapng.png')";
        }
        if(vandak.innerText[0]==5){
            let img = document.getElementById("card_type");
            img.style.backgroundImage = "url('img/master.png')";
        }
        if(vandak.innerText[0]==6){
            let img = document.getElementById("card_type");
            img.style.backgroundImage = "url('img/discover.png')";
        }
        if(vandak.innerText[0]!=3 && vandak.innerText[0]!=4 && vandak.innerText[0]!=5 && vandak.innerText[0]!=6){
            let img = document.getElementById("card_type");
            img.style.backgroundImage = "url('img/discoverD.png')";
        }
        
})
number.addEventListener("input", ()=>{
    let k = number.value.length
    if(k==0) {
        num1.innerText = "####"
    }
    if(k<=4) {
        num2.innerText = "####"
    }
    if(k<=9) {
        num3.innerText = "####"
    }
    if( k<=14) {
        num4.innerText = "####"
    }
    number.addEventListener("keydown", ()=>{
        var key = event.keyCode
       
        if(key===8 && window.getSelection().toString().length==0){
            number.value = "";
            num1.innerText = "####"
            num2.innerText = "####"
            num3.innerText = "####"
            num4.innerText = "####"
        }

    })
})

name_input.addEventListener("input", ()=>{
    name.innerText = name_input.value.toString()
})
year_input.addEventListener("input", ()=>{
year.innerText = year_input.value;
})
month_input.addEventListener("input", ()=>{
    month.innerText = month_input.value;
    })
cvv_input.addEventListener("focus", ()=>{
    hover1.style.opacity = "0";
    hover1.style.transform = "rotateY(-180deg)";
    hover2.style.opacity = "1";
    hover2.style.transform = "rotateY(0)";
    })
cvv_input.addEventListener("focusout", ()=>{
        hover1.style.opacity = "1";
        hover1.style.transform = "rotateY(0)";
        hover2.style.opacity = "0";
        hover2.style.transform = "rotateY(180deg)";
        })
cvv_input.addEventListener("input", ()=>{
    cvv.innerText = cvv_input.value.toString()
            })
