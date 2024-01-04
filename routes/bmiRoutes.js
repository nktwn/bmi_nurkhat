module.exports = (app) => {
    app.post('/bmiCalculator', (req, res) => {
        const weight = parseFloat(req.body.weight);
        const height = parseFloat(req.body.height);
        const age = parseInt(req.body.age);
        const gender = req.body.gender;

        if (isNaN(weight) || isNaN(height) || isNaN(age)) {
            return res.status(400).json({ error: 'Please fill in all fields.' });
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        const result = {
            bmi: bmi.toFixed(2),
            interpretation: getInterpretation(bmi),
        };

        res.json(result);
    });
};

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
