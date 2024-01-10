const submit = document.querySelector("#submit-button");

submit.addEventListener("click", validate)

let currentDate = Date.now();
// Construct a date object from the user input, then find the difference between that and the current date found upon page initialization

function validate(e) {
    e.preventDefault();
    let monthLength;
    const dayInput = document.querySelector("#day-input");
    const monthInput = document.querySelector("#month-input");
    const yearInput = document.querySelector("#year-input");
    let valid = true;

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

    if (monthInput.value > 12 && monthInput.value < 1 && (typeof(monthInput.value) !== "number")) {
        const monthError = document.querySelector("#month-error");
        monthError.classList.remove("hidden");
        monthInput.classList.add("invalid");
        monthError.setAttribute("aria-hidden", false);
        monthError.setAttribute("aria-invalid", true);
        return valid = false; 
    }

    if (dayInput.value > monthLength) {
        
        // use switch statement to change monthLength based on current month
    }

    if (yearInput.value) {
        // take year from current date constructor
    }
}