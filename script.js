const faqBtn = document.querySelectorAll(".FAQ-button");
const faqAns = document.querySelectorAll(".FAQ-ans");
const faqSvg = document.querySelectorAll(".FAQ-svg");
const footer = document.querySelector(".footer");
const video = document.getElementById('loadingVideo');
const netflixClone = document.querySelector('.netflixClone');

document.body.style.overflow = "hidden";

video.addEventListener('ended', () => {
    // Hide the loading animation
    video.classList.toggle("hide")

    // Show the Netflix clone
    netflixClone.classList.add('show');

    // Enable scrolling
    document.body.style.overflow = "auto";
});


faqBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
        faqAns.forEach((answer, ansIdx) => {
            if (index === ansIdx) {
                answer.classList.toggle("hide");
            } else {
                answer.classList.add("hide");
            }
        });
        faqSvg.forEach((svg, svgIdx) => {
            if (index === svgIdx) {
                svg.classList.toggle("rotate");
            } else {
                svg.classList.remove("rotate");
            }
        });
       
    });
});
