function number(num){

    var result = document.getElementById("result")

    result.value += num;

}
function clearResult(){

    var result = document.getElementById("result")

    result.value =""

}
function getresult(){

    var result = document.getElementById("result")

    result.value=eval(result.value)

}

function square(){
    var result = document.getElementById("result")

    result.value = result.value*result.value

}

function cube(){
    var result = document.getElementById("result")

    result.value = result.value*result.value*result.value

}

function root(){
    var result = document.getElementById("result")
   
    result.value = Math.sqrt(result.value)
}

function absolute(){
    var result = document.getElementById("result")

    result.value = Math.abs(result.value)
}

function logg(){
    var result = document.getElementById("result")
    result.value = Math.log(result.value)
}
function ran(){
    var result = document.getElementById("result")
    result.value = Math.random(result.value)
}
function lnn(){
    var result = document.getElementById("result")
    result.value = Math.LN2(result.value)
}
function sine(){
    var result = document.getElementById("result")
    result.value = Math.sin(result.value)
}
function cose(){
    var result = document.getElementById("result")
    result.value = Math.cos(result.value)
}
function tangent(){
    var result = document.getElementById("result")
    result.value = Math.tan(result.value)
}
