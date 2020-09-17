const data = [
    {
        name: "Tanya Sinclair",
        image: "./images/image-tanya.jpg",
        bio: `I’ve been interested in coding for a while but never taken the jump,
        until now. I couldn’t recommend this course enough. I’m now in the job
        of my dreams and so excited about the future.`,
        position: "UX Engineer"
    },
    {
        name: "John Tarkpor",
        image: "./images/image-john.jpg",
        bio: `If you want to lay the best foundation possible I’d recommend taking
        this course. The depth the instructors go into is incredible. I now feel
        so confident about starting up as a professional developer.`,
        position: "Front-end Developer"
    }
];

const testimonials = document.querySelector(".testimonials");

function showTestimonial(data) {
    const { name, image, bio, position } = data;

    const markup = `
            <section class="sliderTop">
                <img class="image" src="${image}" alt="${name}" />
                <div class="slider">
                    <button class="sliderButton" data-goto="previous">
                        <img
                            class="arrow"
                            src="./images/icon-prev.svg"
                            alt="Previous testimonial"
                            data-goto="previous"
                        />
                    </button>
                    <button class="sliderButton" data-goto="next">
                        <img
                            class="arrow"
                            src="./images/icon-next.svg"
                            alt="Next testimonial"
                            data-goto="next"
                        />
                    </button>
                </div>
            </section>
            <section class="sliderBottom">
                <p class="bio">“ ${bio} ”</p>
                <div class="details">
                    <p class="name">${name}</p>
                    <p class="position">${position}</p>
                </div>
            </section>
    `;

    testimonials.insertAdjacentHTML("afterbegin", markup);
}

function clearTestimonial() {
    testimonials.innerHTML = "";
}

testimonials.addEventListener("click", event => {
    if (event.target.matches(".sliderButton")) {
        const type = event.target.dataset.attribute;

        switch (type) {
            case "previous":
                slide -= 1;
                slide < 0 ? (slide = data.length - 1) : (slide = slide);
                break;
            case "next":
                slide += 1;
                slide >= data.length ? (slide = 0) : (slide = slide);
                break;
        }

        clearTestimonial();
        showTestimonial(data[slide]);
    }
});

let slide = 0;
showTestimonial(data[slide]);
