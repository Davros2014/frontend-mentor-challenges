const info = [
    {
        socialProfile: "@nathanf",
        socialIcon: "icon-facebook.svg",
        followers: "1987",
        followersToday: 12,
        pageViewsLikesOrTweets: 87,
        pageViewsPercentage: "3%",
        likes: 52,
        likesPercentage: "2%"
    },
    {
        socialProfile: "@nathanf",
        socialIcon: "icon-twitter.svg",
        followers: "1044",
        followersToday: 12,
        pageViewsLikesOrTweets: 117,
        pageViewsPercentage: "303%",
        likes: 507,
        likesPercentage: "553%"
    },
    {
        socialProfile: "@realnathanf",
        socialIcon: "icon-instagram.svg",
        followers: "11k",
        followersToday: 1099,
        pageViewsLikesOrTweets: 5462,
        pageViewsPercentage: "2257%",
        likes: "52k",
        likesPercentage: "1375%"
    },
    {
        socialProfile: "Nathan F.",
        socialIcon: "icon-youtube.svg",
        followers: "8239",
        followersToday: 144,
        pageViewsLikesOrTweets: 107,
        pageViewsPercentage: "19%",
        likes: 1407,
        likesPercentage: "12%"
    }
];

const socialMediaCards = document.querySelector(".socialMediaCards");
// const socialMediaOverview = document.querySelector(".socialMediaOverview");

function dashboardMarkup(info) {
    const mediaCardsMarkup = info.map(data => {
        return `
            <div class="socialPanel">
                <div class="socialDetails">
                    <img class="socialIcon" src="./images/${data.socialIcon}" />
                    <p class="socialIdentity">${data.socialProfile}</p>
                </div>
                <h1 class="socialNumbers">${data.followers}</h1>
                <p class="followers">FOLLOWERS</p>
                <p class="numberFollowers">
                    <img class="upArrow" src="./images/icon-up.svg" />${data.followersToday} Today
                </p>
            </div>
            `;
    });

    // const overviewMarkup = info.map(data => {
    //     return `
    //         <div class="socialPanel">
    //             // stuff here
    //         </div>
    //         `;
    // });
    socialMediaCards.insertAdjacentHTML("afterbegin", mediaCardsMarkup);
    // socialMediaOverview.insertAdjacentHTML("afterbegin", overviewMarkup);
}

dashboardMarkup(info);
