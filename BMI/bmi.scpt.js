function bmiCalc(){
    var age = parseInt(document.getElementById("age").value);
    var ht = parseInt(document.getElementById("ht").value) / 100;
    var age = parseInt(document.getElementById("wt").value);
    let gen = document.getElementById("gen").value;
    var result = 0;
    if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender) { 
        document.getElementById("Result").innerHTML = "Please fill in all fields correctly."; 
        return;
    }

}