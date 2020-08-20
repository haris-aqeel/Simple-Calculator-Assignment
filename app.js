
var expressions = "";

function getValue(num){
    var name = document.getElementById('result');
    expressions+=num;
    name.value+= num;
}

function clearValues(){
    var name = document.getElementById('result');
    name.value= "";
    expressions = "";
}

function getOperator(opr){
    var name = document.getElementById('result');
    name.value = "";
    expressions+=opr;
}

function getResult(){
    var name = document.getElementById('result');
    name.value = eval(expressions);
}