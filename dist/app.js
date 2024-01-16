const submit = document.querySelector("#submit-button");

submit.addEventListener("click", validate)

let currentDate = Date.now();
console.log(currentDate);
// Construct a date object from the user input, then find the difference between that and the current date found upon page initialization

function validate(e) {
    e.preventDefault();
    let monthLength;
    const dayInput = document.querySelector("#day-input");
    const monthInput = document.querySelector("#month-input");
    const yearInput = document.querySelector("#year-input");
    const dayError = document.querySelector("#day-val-error");
    const monthError = document.querySelector("#month-val-error");
    const yearError = document.querySelector("#year-val-error");

    let valid
    let dayValid;
    let monthValid;
    let yearValid;

    
    console.log(monthInput.value, dayInput.value, yearInput.value)

    function checkMonthLength(month) {
        switch(month) {
            case 1: 
                return monthLength = 31;
            case 2: 
                if (yearInput.value % 100 === 0) {
                    if (yearInput.value % 400) {
                        return monthLength = 29;
                        // centurial years are only leap years if they are divisible by 400
                    }
                }  else if (yearInput.value % 4 === 0) {
                    return monthLength = 29;
                    // if it is not a centurial year, is the year divisible by 4
                } else {
                    return monthLength = 28;
                    // if the year is not a leap year
                }
            case 3: 
                return monthLength = 31; 
            case 4: 
                return monthLength = 30;
            case 5: 
                return monthLength = 31;
            case 6:
                return monthLength = 30;
            case 7: 
                return monthLength = 31;
            case 8: 
                return monthLength = 31;
            case 9: 
                return monthLength = 30;
            case 10: 
                return monthLength = 31;
            case 11: 
                return monthLength = 30;
            case 12: 
                return monthLength = 31;
        }
    }
    checkMonthLength(monthInput.value);

    function showInvalidInput(field, error) {
        error.classList.remove("hidden");
        field.classList.add("invalid");
        error.setAttribute("aria-hidden", false);
        error.setAttribute("aria-invalid", true);
    }
    function showValidInput(field, error) {
        error.classList.add("hidden");
        field.classList.remove("invalid");
        error.setAttribute("aria-hidden", true);
        error.setAttribute("aria-invalid", false);
    }

    // Month validation checks
    // Is there a month input
    if (!monthInput.value) {
        monthError.innerHTML = "This field is required";
        showInvalidInput(monthInput, monthError);
        
        monthValid = false;
    } // Is the input a valid month
    else if (monthInput.value > 12 || monthInput.value < 1 || (Number(monthInput.value) === NaN)) {
        monthError.innerHTML = "Must be a valid month";
        showInvalidInput(monthInput, monthError);

        monthValid = false;
    } else {
        showValidInput(monthInput, monthError);

        monthValid = true;
    }

    // Day validation checks
    if (!dayInput.value) {
        dayError.innerHTML = "This field is required";
        showInvalidInput(dayInput, dayError);

        dayValid = false;
    } // Is the day feasible
    else if (dayInput.value > 31 || dayInput.value < 1 || (Number(dayInput.value) === NaN)) {
        dayError.innerHTML = "Must be a valid day";
        showInvalidInput(dayInput, dayError);

        dayValid = false; 
    } else {
        showValidInput(dayInput, dayError);

        dayValid = true;
    }

    // Year validation checks
    if (!yearInput.value) {
        yearError.innerHTML = "This field is required";
        showInvalidInput(yearInput, yearError);

        yearValid = false; 
    } else if(Number(yearInput.value) === NaN) {
        yearError.innerHTML = "Must be a valid year";
        showInvalidInput(yearInput, yearError);

        yearValid = false; 
    } else {
        showValidInput(yearInput, yearError);

        yearValid = true;
    }

    function timestampToYMD(timestampDiff) {
        // calculated age is not accurate, try converting from ms to days first, then to months and years?
        let numOfYears = timestampDiff / 31_536_000_000;
        let numOfMonths = ((timestampDiff % 31_536_000_000) / 2_592_000_000);
        let numOfDays = ((timestampDiff % 31_536_000_000) % 2_592_000_000);
        
        document.querySelector("#num-of-years").innerHTML = Math.floor(numOfYears);
        document.querySelector("#num-of-months").innerHTML = Math.floor(numOfMonths);
        document.querySelector("#num-of-days").innerHTML = Math.floor(numOfDays);
    }

    if (dayValid === true & monthValid === true && yearValid === true) {
        valid = true
        userDateInput  = `${yearInput.value}/${monthInput.value}/${dayInput.value}`;

        let userDate = new Date();

        let calcAgeTimestamp = currentDate - Date.parse(userDateInput);
        console.log(calcAgeTimestamp);
 
        if (calcAgeTimestamp < 0) {
            // Throw error for future date
            dayError.classList.remove("hidden");
            dayInput.classList.add("invalid");
            monthInput.classList.add("invalid");
            yearInput.classList.add("invalid");
            dayError.setAttribute("aria-hidden", false);
            dayError.setAttribute("aria-invalid", true);
            dayError.innerHTML = "Must be in the past"

            // Show hyphens for calculated age
            document.querySelector("#num-of-years").innerHTML = "--";
            document.querySelector("#num-of-months").innerHTML = "--";
            document.querySelector("#num-of-days").innerHTML = "--";
        } else {
            // Remove any shown errors
            showValidInput(dayInput, dayError);
            showValidInput(monthInput, monthError);
            showValidInput(yearInput, yearError);
            
            // Calc user age and set it to DOM
            timestampToYMD(calcAgeTimestamp);
        }        
    }
}