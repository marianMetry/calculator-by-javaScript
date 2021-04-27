
/*

function insert(num) {
    "use strict";
    var MyString = document.getElementById("myText").value ;
    var total =MyString.concat(num);
    document.getElementById("myText").value= total ;
}
    
  */
function insert(num){
    document.form.textview.value = document.form.textview.value + num ;
}


function equal(){
    var exp =document.form.textview.value ;
    document.form.textview.value=eval(exp)
    }

function clean(){
    document.form.textview.value="";
    
}
function back(){
    var exp =document.form.textview.value ;
    document.form.textview.value= exp . substring(0,exp.length-1);

}











/*

var LastChar = MyString[MyString.length - 1];
    if (MyString.length < 30) {
        if (!isNaN(LastChar) || LastChar === null || !isNaN(num)) {
            document.getElementById === MyString + num;  
        } else if (num !== LastChar) {
            document.getElementById === MyString.replace(LastChar, num);
        }
    }
}

function equal() {
    "use strict";
    var sum = document.getElementById;
    if (sum) {
        document.getElementById = eval(sum);
    }
}
function clear() {
    "use strict";

document.getElementById = ''; 
}
function back() {
    "use strict";
    var exp = document.getElementById;
    document.getElementById = exp.substring(0, exp.length - 1);
}
*/


