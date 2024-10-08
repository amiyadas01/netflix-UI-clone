const faqBtn = document.querySelectorAll(".FAQ-button");
const faqAns = document.querySelectorAll(".FAQ-ans")
const faqSvg = document.querySelectorAll(".FAQ-svg")
const scroll = new LocomotiveScroll({
    el: document.querySelector('.wraper'),
    smooth: true
});

faqBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
        faqAns.forEach((answer, ansIdx) => {
            if (index === ansIdx) {
                answer.classList.toggle("hide");
            } else {
                answer.classList.add("hide");
            }

        })
        faqSvg.forEach((svg, svgIdx) => {
            if (index === svgIdx) {
                svg.classList.toggle("rotate");
            } else {
                svg.classList.remove("rotate");
            }
        })
        setTimeout(() => {
            document.body.style.height = document.body.scrollHeight + 'px';
        }, 300);
    })
})