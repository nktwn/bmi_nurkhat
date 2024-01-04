function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Please fill in all fields.');
        return;
    }

    const heightInMeters = height / 100;
    let bmi;

    if (gender === 'male') {
        bmi = weight / (heightInMeters * heightInMeters) + age / 100; // Пример коэффициента для мужчин
    } else if (gender === 'female') {
        bmi = weight / (heightInMeters * heightInMeters) - age / 100; // Пример коэффициента для женщин
    } else {
        alert('Invalid gender.');
        return;
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<h4>Your BMI: ${bmi.toFixed(2)}</h4>`;

    const interpretation = getInterpretation(bmi);

    resultContainer.innerHTML += `<p>Interpretation: ${interpretation}</p>`;
}

function getInterpretation(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}
