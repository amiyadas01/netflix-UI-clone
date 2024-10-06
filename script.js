let firstAns = document.querySelector(".first-ans");
let secondAns = document.querySelector(".second-ans");
let thirdAns = document.querySelector(".third-ans");
let fourthAns = document.querySelector(".fourth-ans");
let fifthAns = document.querySelector(".fifth-ans");
let sixthAns = document.querySelector(".sixth-ans");
let faqOne = document.querySelector(".FAQ1")
let faqTwo = document.querySelector(".FAQ2")
let faqThree = document.querySelector(".FAQ3")
let faqFour = document.querySelector(".FAQ4")
let faqFive = document.querySelector(".FAQ5")
let faqSix = document.querySelector(".FAQ6")
let press1 = false;
let press2 = false;
let press3 = false;
let press4 = false;
let press5 = false;
let press6 = false;
const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true
});



faqOne.addEventListener("click", () => {
    if (!press1) {
        firstAns.classList.remove("hide")
        firstAns.classList.toggle('show')
    }else{
        firstAns.classList.add("hide")
    }
    press1 = !press1;
    sixthAns.classList.add("hide")
    fourthAns.classList.add("hide")
    thirdAns.classList.add("hide")
    secondAns.classList.add("hide")
    fifthAns.classList.add("hide")
   
})

faqTwo.addEventListener("click", () => {
  

    if (!press2) {
        secondAns.classList.remove("hide")
    }else{
        secondAns.classList.add("hide")
    }
  
    press2 = !press2;
    firstAns.classList.add("hide")
    fifthAns.classList.add("hide")
    sixthAns.classList.add("hide")
    fourthAns.classList.add("hide")
    thirdAns.classList.add("hide")
})

faqThree.addEventListener("click", () => {
    if (!press3) {
        thirdAns.classList.remove("hide")

    }else{
        thirdAns.classList.add("hide")
    }
  
    press3 = !press3;
    secondAns.classList.add("hide")
    firstAns.classList.add("hide")
    fifthAns.classList.add("hide")
    sixthAns.classList.add("hide")
    fourthAns.classList.add("hide")
})

faqFour.addEventListener("click", () => {
    if (!press4) {
        fourthAns.classList.remove("hide")

    }else{
        fourthAns.classList.add("hide")
    }
  
    press4 = !press4;
    secondAns.classList.add("hide")
    firstAns.classList.add("hide")
    fifthAns.classList.add("hide")
    sixthAns.classList.add("hide")
    thirdAns.classList.add("hide")
})

faqFive.addEventListener("click", () => {
    if (!press5) {
        fifthAns.classList.remove("hide")

    }else{
        fifthAns.classList.add("hide")
    }
  
    press5 = !press5;
    secondAns.classList.add("hide")
    firstAns.classList.add("hide")
    sixthAns.classList.add("hide")
    fourthAns.classList.add("hide")
    thirdAns.classList.add("hide")
})

faqSix.addEventListener("click", () => {
    if (!press6) {
        sixthAns.classList.remove("hide")

    }else{
        sixthAns.classList.add("hide")
    }
  
    press6 = !press6;
    firstAns.classList.add("hide")
    fifthAns.classList.add("hide")
    secondAns.classList.add("hide")
    fourthAns.classList.add("hide")
    thirdAns.classList.add("hide")
})


