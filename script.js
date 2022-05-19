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
      showIfValid.textContent = `Please don't use space`;
      body.style.backgroundColor = "#17A2B8";
   }
}


formValidation.addEventListener("submit", validate);

function validate(e) {
    e.preventDefault();

    if(isNaN(formInput.value)){
        showIfValid.textContent = `Please enter a number`;
        body.style.backgroundColor = "#17A2B8";
        formValidation.reset();
        
    }else if(formInput.value.length == 0) {
        showIfValid.textContent = `Please don't leave the input field empty`;
        body.style.backgroundColor = "#17A2B8";
    }else if(formInput.value.length < 11){
        showIfValid.textContent = `The number should have 11 digits`;
        body.style.backgroundColor = "#17A2B8";
        formValidation.reset();
    }else if(formInput.value.includes(".")){
        showIfValid.textContent = `Please do not enter decimal number`;
        body.style.backgroundColor = "#17A2B8";
        formValidation.reset();
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
            showIfValid.textContent = `The first digit of the number can't be 0`;
            body.style.backgroundColor = "#17A2B8";
            formValidation.reset();
        }else if(digit10 == formInput.value[9] && digit11 == formInput.value[10]) {
            showIfValid.textContent = `${formInput.value} is VALID`
            body.style.backgroundColor = "#28A745";
            validationBtn.style.backgroundColor = "black";
            formValidation.reset();
        }else {
            showIfValid.textContent = `${formInput.value} is INVALID`
            body.style.backgroundColor = "#DC3545";
            validationBtn.style.backgroundColor = "black";
            formValidation.reset();
        }

    }
}