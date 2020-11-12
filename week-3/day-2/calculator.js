var sum = function() {
    var num1 = document.getElementById("sum1").value;
    var num2 = document.getElementById("sum2").value;
    var res = parseInt(num1) + parseInt(num2);
    
    console.log(res);
}

var sub = function() {
    var num3 = document.getElementById("sub1").value;
    var num4 = document.getElementById("sub2").value;
    var res = parseInt(num3) - parseInt(num4);
    
    console.log(res);
}

var mul = function() {
    var num5 = document.getElementById("mul1").value;
    var num6 = document.getElementById("mul2").value;
    var res = parseInt(num5) * parseInt(num6);
    
    console.log(res);
}

var divi = function() {
    var num7 = document.getElementById("divi1").value;
    var num8 = document.getElementById("divi2").value;
    var res = parseInt(num7) / parseInt(num8);
    
    console.log(res);
}