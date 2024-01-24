# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![image](https://github.com/GreenCitrus6/age-calculator-vanilla-js/assets/145170576/5b855fe4-6a9e-4d75-8cfd-e2e94fb657b4)

### Links

- Solution URL: [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/age-calculator-using-html-tailwind-and-js-form-validation-b56PCqq_IS)
- Live Site URL: [Deployed to GitHub Pages](https://greencitrus6.github.io/age-calculator-vanilla-js/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript Client-side Form Validation


### What I learned

Working with dates is very difficult, especially over long time periods because of the irregularity thrown in by different month lengths and leap years. I found that instead of pasting in numbers with decimals from a calculator, actually calculating those constants in runtime can make calculations more precise. 

I am satisfied with how I managed to make the entire app become larger at a certain breakpoint through adding a media query into the input.css file. Because I used rem to style all my elements, when the root em size was changed the entire application scaled proportionately. 

```
@layer base {
   ...
  :root {
        font-size:32px;
        @media screen(md) {
            font-size: 40px;
        }
    }
}
```

### Continued development

In the future I'd like to read more about how dates are handled typically in programming, as I still feel I have quite a bit of room to improve in that area. 
I also think I might refactor this code in the future for practice. 

### Useful resources

- [Wikipedia Article on Leap Years](https://en.wikipedia.org/wiki/Leap_year) - This helped me understand the rules behind leap years. I was unaware of the rules regarding centuries needing to be divisible by 400.

## Author

- Website - [Daniel Aadland](https://portfolio-website-git-main-greencitrus6s-projects.vercel.app/)
- Frontend Mentor - [@GreenCitrus6](https://www.frontendmentor.io/profile/GreenCitrus6)
