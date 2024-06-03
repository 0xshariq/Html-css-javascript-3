
let resetbtn = document.querySelector("#reset");
let height = document.querySelector("#height")
let weight = document.querySelector("#weight");
let BMI = document.querySelector("h1");

function bmi() {
    let h = height.value / 100;
    let w = weight.value;
    let bmi = w / (h * h);
    if (isNaN(bmi) || !isFinite(bmi)) {
        BMI.innerHTML = "Invalid Input";
        return False;
    }
    if (bmi < 18.5) {
        BMI.innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        BMI.innerHTML = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        BMI.innerHTML = "Overweight";
    } else if (bmi >= 30) {
        BMI.innerHTML = "Obese";
    } else {
        BMI.innerHTML = "Invalid Input";
    }
}
function reset(){
    BMI.innerHTML = "";
    height.value = "";
    weight.value = "";
}
resetbtn.addEventListener("click",reset());