const formValidation = document.querySelector(".form");
const formInput = document.querySelector(".tc-input");
const validationBtn = document.querySelector(".check-button");
const body = document.querySelector("body");
const showIfValid = document.querySelector(".show-if-valid");

function checkSpace(event)
{
   if(event.which ==32)
   {
      event.preventDefault();
      return alert("Please don't use space");
   }
}


formValidation.addEventListener("submit", validate);

function validate(e) {
    e.preventDefault();

    if(isNaN(formInput.value)){
        alert("Please enter a number");
        formValidation.reset();
    }else if(formInput.value.length == 0) {
        alert("Please don't leave the input field empty");
    }else if(formInput.value.length < 11){
        alert("The number should have 11 digits")
        formValidation.reset();
    }else if(formInput.value.includes(".")){
        alert("Please do not enter decimal number")
    }
    else{
        let = oddNumbersSum = 0;
        for(i = 0; i <= 8; i+=2){
            oddNumbersSum += parseInt(formInput.value[i]);
        }

        let evenNumbersSum = 0;
        for(i = 1; i <= 7; i+=2){
            evenNumbersSum += parseInt(formInput.value[i]);
        }        

        let digit10Number = (oddNumbersSum * 7) - evenNumbersSum;

        let digit10String = String(digit10Number);

        let digit10 = digit10String[digit10String.length -1]

        let totalNumbers = 0;
        for (let i = 0; i <10; i++){
            totalNumbers += parseInt(formInput.value[i])
        }

        let digit11String = String(totalNumbers);

        let digit11 = digit11String[digit11String.length -1]

        if(formInput.value[0] == 0) {
            alert("invalid")
        }else if(digit10 == formInput.value[9] && digit11 == formInput.value[10]) {
            showIfValid.textContent = `${formInput.value}: VALID`
            console.log("valid")
            body.style.backgroundColor = "#28A745";
            validationBtn.style.backgroundColor = "black";
            formValidation.reset();
        }else {
            showIfValid.textContent = `${formInput.value}: INVALID`
            console.log("invalid")
            body.style.backgroundColor = "#DC3545";
            validationBtn.style.backgroundColor = "black";
            formValidation.reset();
        }

    }
}