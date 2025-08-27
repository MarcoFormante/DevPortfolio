const skillBoxes = document.querySelectorAll(".skill-box")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("skill-box-fadeIn")
            observer.unobserve(entry.target)
        }
    })
})

skillBoxes.forEach(box => {
    observer.observe(box)
})