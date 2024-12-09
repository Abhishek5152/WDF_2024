function Calculate(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    let opr = document.getElementById("opr").value;
    var ans = 0;

    switch(opr){
        case "+":
            ans = n1 + n2;
            break;
        case "-":
            ans = n1 - n2;
            break;
        case "*":
            ans = n1 * n2;
            break;
        case "/":
            if (n2 !== 0) {
                ans = n1 / n2;
            } else {
                ans = "Cannot divide by zero";
            }
            break;
    }

    document.getElementById("result").innerHTML = ans;
}
