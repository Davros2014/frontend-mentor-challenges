const info = [
    {
        socialProfile: "@nathanf",
        socialIcon: "facebook",
        followers: "1987",
        followersToday: 12,
        pageViewsLikesOrTweets: 87,
        pageViewsPercentage: "3%",
        likes: 52,
        likesPercentage: "2%"
    },
    {
        socialProfile: "@nathanf",
        socialIcon: "twitter",
        followers: "1044",
        followersToday: 12,
        pageViewsLikesOrTweets: 117,
        pageViewsPercentage: "303%",
        likes: 507,
        likesPercentage: "553%"
    },
    {
        socialProfile: "@realnathanf",
        socialIcon: "instagram",
        followers: "11k",
        followersToday: 1099,
        pageViewsLikesOrTweets: 5462,
        pageViewsPercentage: "2257%",
        likes: "52k",
        likesPercentage: "1375%"
    },
    {
        socialProfile: "Nathan F.",
        socialIcon: "youtube",
        subscribers: "8239",
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
        const {
            socialIcon,
            socialProfile,
            followers,
            subscribers,
            followersToday
        } = data;
        return `<div class="socialPanel ${socialIcon}">
                                <div class="socialDetails">
                                    <img
                                        class="socialIcon"
                                        src="./images/icon-${socialIcon}.svg"
                                    />
                                    <p class="socialIdentity">${socialProfile}</p>
                                </div>
                                <h1 class="socialNumbers">
                                    ${followers ? followers : subscribers}
                                </h1>
                                <p class="followers">
                                    ${followers ? "followers" : "subscribers"}
                                </p>
                                <p class="numberFollowers">
                                    <img class="upArrow" src="./images/icon-up.svg" />${followersToday} Today
                                </p>
                            </div>`;
    });

    // const overviewMarkup = info.map(data => {
    //     return `
    //         <div class="socialPanel">
    //             // stuff here
    //         </div>
    //         `;
    // });
    socialMediaCards.innerHTML = mediaCardsMarkup.join("");
    // socialMediaOverview.insertAdjacentHTML("afterbegin", overviewMarkup);
}

dashboardMarkup(info);
