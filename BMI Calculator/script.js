document.getElementById("bmiForm").addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInch = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (gender && age && heightFeet && heightInch && weight) {
        const height = ((heightFeet * 12) + heightInch) * 0.0254;
        const bmi = weight / (height * height);
        const resultElement = document.getElementById("result");

        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi > 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        }
        else if (bmi > 24.9 && bmi < 29.9) {
            category = 'Overweight';
        }
        else {
            category = 'Obese';
        }

        let result = `Your BMI is ${bmi.toFixed(2)} and you are ${category}.`

        resultElement.innerText = result;
    }
})