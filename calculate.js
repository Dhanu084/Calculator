var display = document.getElementById('ans');
var button;
var operand1=0;
var operand2;
var operator;
var temp = "";
buttons.addEventListener('click',function(event){
    button = event.target;
    var val = button.innerText;
    
    if(val=='+'||val=='-'||val=='/'||val=='*'||val=='%'){
        //console.log(val);
        display.innerText=val;
        operand1 = temp;
        console.log(operand1);
        operator = val;
        temp="";
    }
    else if(val=='='){
        operand2 = temp;
        var result= evaluate(operand1,operand2,operator);
        if(result!=undefined)
        temp = result;
        //console.log(result);
    }
    else if(val=='AC'){
        operand1="";
        operand2="";
        operator="";
        temp="";
        display.innerText="";
    }
    else if(val=='+/-'){
        temp*=-1;
    }
    else if(val=='.'){
        temp = parseFloat(temp).toFixed(1);
        
    }
    else{
        if(temp.includes(".")){
            var num = (parseFloat(temp).toFixed());
            console.log(num);
            temp=parseFloat(num+"."+val).toFixed(1);
        }
        else
        temp+=val;
    }
    if(temp!="")
    display.innerText = temp;
});

function evaluate(operand1,operand2,operator){
    console.log(operand1+" "+operator+" "+operand2)
    if(operator==undefined||operand1==undefined||operand2==undefined) return ;
    var result = eval(operand1+" "+operator+" "+operand2);
    if(result == Infinity) return "ERROR!"
    console.log(result);
    return result;
}