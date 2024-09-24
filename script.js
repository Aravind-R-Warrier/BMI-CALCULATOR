let button = document.getElementById("btn");

button.addEventListener("click", () => {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    let result = document.getElementById("output");

    let height_status = false, weight_status = false;

    // Height input field
    if (height === '' || isNaN(height) || height <= 0) {
        document.getElementById("height-error").innerHTML = "please enter a valid height";
    } else {
        document.getElementById("height-error").innerHTML = "";
        height_status = true; 
    }

    // Weight input field
    if (weight === '' || isNaN(weight) || weight <= 0) {
        document.getElementById("weight-error").innerHTML = "please enter a valid weight";
    } else {
        document.getElementById("weight-error").innerHTML = "";
        weight_status = true;
    }

    // If weight and height status are true then show BMI
    if (weight_status && height_status) {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Underweight
        if (bmi < 18.6) {
            result.innerHTML = "You are underweight: " + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = "Normal: " + bmi;
        } else {
            result.innerHTML = "Overweight: " + bmi;
        }
    } else {
        alert("Please fill appropriately");
        result.innerHTML = "";
    }
});
