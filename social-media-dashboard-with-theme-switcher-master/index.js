console.log("click, click, bang, bang");

// socialDashboard
// Social Media Dashboard Total Followers: 23,004 Dark Mode @nathanf 1987
// Followers 12 Today @nathanf 1044 Followers 99 Today @realnathanf 11k
// Followers 1099 Today Nathan F. 8239 Subscribers 144 Today Overview -
// Today Page Views 87 3% Likes 52 2% Likes 5462 2257% Profile Views 52k
// 1375% Retweets 117 303% Likes 507 553% Likes 107 19% Total Views 1407
// 12%

const info = [
    {
        name: "Tanya Sinclair",
        followers: "./images/image-tanya.jpg",
        theme: "light",
        position: "UX Engineer"
    },
    {
        name: "John Tarkpor",
        followers: "./images/image-john.jpg",
        theme: "dark",
        position: "Front-end Developer"
    }
];

const testimonials = document.querySelector(".testimonials");

function dashboardMarkup(data) {
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
