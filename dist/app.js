const submit = document.querySelector("#submit-button");

submit.addEventListener("click", validate)

let currentDate = Date.now();
console.log(currentDate);
// Construct a date object from the user input, then find the difference between that and the current date found upon page initialization

function validate(e) {
    e.preventDefault();
    const dayInput = document.querySelector("#day-input");
    const monthInput = document.querySelector("#month-input");
    const yearInput = document.querySelector("#year-input");
    const dayError = document.querySelector("#day-val-error");
    const monthError = document.querySelector("#month-val-error");
    const yearError = document.querySelector("#year-val-error");
    const dayLabel = document.querySelector("#day-label");
    const monthLabel = document.querySelector("#month-label");
    const yearLabel = document.querySelector("#year-label");

    let dayValid;
    let monthValid;
    let yearValid;

    
    console.log(monthInput.value, dayInput.value, yearInput.value)


    function showInvalidInput(field, error, label) {
        error.classList.remove("hidden");
        field.classList.add("invalid");
        field.classList.add("border-primary-lightRed");
        label.classList.add("text-primary-lightRed");
        error.setAttribute("aria-hidden", false);
        error.setAttribute("aria-invalid", true);
    }
    function showValidInput(field, error, label) {
        error.classList.add("hidden");
        field.classList.remove("invalid");
        field.classList.remove("border-primary-lightRed");
        label.classList.remove("text-primary-lightRed");
        error.setAttribute("aria-hidden", true);
        error.setAttribute("aria-invalid", false);
    }

    // Month validation checks
    // Is there a month input
    if (!monthInput.value) {
        monthError.innerHTML = "This field is required";
        showInvalidInput(monthInput, monthError, monthLabel);
        
        monthValid = false;
    } // Is the input a valid month
    else if (monthInput.value > 12 || monthInput.value < 1 || (Number(monthInput.value) === NaN)) {
        monthError.innerHTML = "Must be a valid month";
        showInvalidInput(monthInput, monthError, monthLabel);

        monthValid = false;
    } else {
        showValidInput(monthInput, monthError, monthLabel);

        monthValid = true;
    }

    // Day validation checks
    if (!dayInput.value) {
        dayError.innerHTML = "This field is required";
        showInvalidInput(dayInput, dayError, dayLabel);

        dayValid = false;
    } // Is the day feasible
    else if (dayInput.value > 31 || dayInput.value < 1 || (Number(dayInput.value) === NaN)) {
        dayError.innerHTML = "Must be a valid day";
        showInvalidInput(dayInput, dayError, dayLabel);

        dayValid = false; 
    } else {
        showValidInput(dayInput, dayError, dayLabel);

        dayValid = true;
    }

    // Year validation checks
    if (!yearInput.value) {
        yearError.innerHTML = "This field is required";
        showInvalidInput(yearInput, yearError, yearLabel);

        yearValid = false; 
    } else if(Number(yearInput.value) === NaN) {
        yearError.innerHTML = "Must be a valid year";
        showInvalidInput(yearInput, yearError, yearLabel);

        yearValid = false; 
    } else {
        showValidInput(yearInput, yearError, yearLabel);

        yearValid = true;
    }

    function timestampToYMD(timestampDiff) {
        // calculated age is not accurate, try converting from ms to days first, then to months and years?
        let numOfYears = timestampDiff / 31_536_000_000;
        let numOfMonths = ((timestampDiff % 31_536_000_000) / 2_592_000_000);
        let numOfDays = ((timestampDiff % 31_536_000_000) % 2_592_000_000 / 86_400_000)
        
        document.querySelector("#num-of-years").innerHTML = Math.floor(numOfYears);
        document.querySelector("#num-of-months").innerHTML = Math.floor(numOfMonths);
        document.querySelector("#num-of-days").innerHTML = Math.floor(numOfDays);
    }

    if (dayValid === true & monthValid === true && yearValid === true) {
        valid = true
        userDateInput  = `${yearInput.value}/${monthInput.value}/${dayInput.value}`;

        let calcAgeTimestamp = currentDate - Date.parse(userDateInput);
        console.log(calcAgeTimestamp);
 
        if (calcAgeTimestamp < 0) {
            // Throw error for future date
            dayError.classList.remove("hidden");
            dayInput.classList.add("invalid");
            // Make input borders red
            dayInput.classList.add("border-primary-lightRed");
            monthInput.classList.add("border-primary-lightRed");
            yearInput.classList.add("border-primary-lightRed");
            // Make label text red
            dayLabel.classList.add("text-primary-lightRed");
            monthLabel.classList.add("text-primary-lightRed");
            yearLabel.classList.add("text-primary-lightRed");
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
            showValidInput(dayInput, dayError, dayLabel);
            showValidInput(monthInput, monthError, monthLabel);
            showValidInput(yearInput, yearError, yearLabel);
            
            // Calc user age and set it to DOM
            timestampToYMD(calcAgeTimestamp);
        }        
    }
}