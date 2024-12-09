function bmiCalc(){
    var ht = parseInt(document.getElementById("ht").value) / 100;
    var wt = parseInt(document.getElementById("wt").value);    
    var result = 0;
    if (isNaN(wt) || isNaN(ht)) { 
        document.getElementById("Result").innerHTML = "Please fill in all fields correctly."; 
        return;
    }
    var bmi = wt / (ht * ht); 
    bmi = bmi.toFixed(2);

    var category = ""; 
    if (bmi < 18.5) {
        category = "Underweight"; 
    } 
    else if (bmi >= 18.5 && bmi < 24.9) { 
        category = "Normal weight"; 
    } 
    else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight"; 
    } 
    else { 
        category = "Obese"; 
    } 
    var result = `Your BMI: ${bmi} (${category})`; 
    document.getElementById("Result").innerHTML = result;
}