function calculate(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = weight / Math.pow((height/100),2);

    let calbmi = (bmi.toFixed(2));

    document.getElementById("result").innerHTML="Your BMI is " + calbmi;

    let status = document.getElementById("status")
    status.innerHTML = funresult()

    function funresult(){
        if(calbmi<18.5)
        {
            return "You are 'Underweight'"
        }
        else if(calbmi>=18.5 && calbmi<24.9)
        {
            return "You are 'Normal'"
        }
        else if(calbmi>=25 && calbmi<29.9)
        {
            return "You are 'Overweight'"
        }
        else
        {
            return "You are 'Obesity'"
        }
    }
}

function reset(){
    document.getElementById('weight').value = 0;
    document.getElementById('height').value = 0;
    document.getElementById('status').innerText = "";
}