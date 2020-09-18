const info = [
    {
        socialProfile: "@nathanf",
        socialIcon: "facebook",
        followers: "1987",
        followersToday: 12,
        overviewTitle1: "Page Views",
        overviewTitle2: "Likes",
        pageViewsLikesOrTweets: 87,
        pageViewsPercentage: "3%",
        pageViewsPercentageDown: null,
        likes: 52,
        likesPercentage: null,
        likesPercentageDown: "2%"
    },
    {
        socialProfile: "@realnathanf",
        socialIcon: "instagram",
        followers: "11k",
        followersToday: 1099,
        overviewTitle1: "Likes",
        overviewTitle2: "Profile Views",
        pageViewsLikesOrTweets: 5462,
        pageViewsPercentage: "2257%",
        likes: "52k",
        likesPercentage: "1375%"
    },
    {
        socialProfile: "@nathanf",
        socialIcon: "twitter",
        followers: "1044",
        followersToday: 12,
        overviewTitle1: "Retweets",
        overviewTitle2: "Likes",
        pageViewsLikesOrTweets: 117,
        pageViewsPercentage: "303%",
        likes: 507,
        likesPercentage: "553%"
    },
    {
        socialProfile: "Nathan F.",
        socialIcon: "youtube",
        subscribers: "8239",
        followersToday: null,
        followersLost: 144,
        overviewTitle1: "Likes",
        overviewTitle2: "Total Views",
        pageViewsLikesOrTweets: 107,
        pageViewsPercentage: null,
        pageViewsPercentageDown: "19%",
        likes: 1407,
        likesPercentage: null,
        likesPercentageDown: "12%"
    }
];

const socialMediaCards = document.querySelector(".socialMediaCards");
const socialMediaOverview = document.querySelector(".socialMediaOverview");

document
    .querySelector(".themeSwitcherButton")
    .addEventListener("click", function() {
        let cl = this.classList;
        cl.contains("darkTheme") ? cl.remove("darkTheme") : cl.add("darkTheme");
    });

function dashboardMarkup(info) {
    const mediaCardsMarkup = info.map(data => {
        const {
            socialIcon,
            socialProfile,
            followers,
            subscribers,
            followersToday,
            followersLost
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
                                <p class="numberFollowers ${
                                    followersToday ? "" : "negativeFollowers"
                                }">
                                    <img class="upArrow" src="./images/icon-${
                                        followersToday ? "up" : "down"
                                    }.svg" />${
            followersToday ? followersToday : followersLost
        } Today
                                </p>
                            </div>`;
    });

    const overviewMarkup = info.map(data => {
        const {
            socialIcon,
            pageViewsLikesOrTweets,
            pageViewsPercentage,
            pageViewsPercentageDown,
            likes,
            likesPercentage,
            likesPercentageDown,
            overviewTitle1,
            overviewTitle2
        } = data;
        return `
        <div class="socialOverviewCard">
            <div class="socialViews">
                <p class="pageViews">${overviewTitle1}</p>
                <h2 class="viewsNumbers">${pageViewsLikesOrTweets}</h2>
            </div>
            <div class="socialPercentage">
                <img
                    class="socialIcon socialIconbottom"
                    src="./images/icon-${socialIcon}.svg"
                />
                <p class="viewsPercentage ${
                    pageViewsPercentage ? "" : "negativePerc"
                }">
                        <img class="upArrow overviewArrow" src="./images/icon-${
                            pageViewsPercentage !== null ? "up" : "down"
                        }.svg" />
                        ${
                            pageViewsPercentage
                                ? pageViewsPercentage
                                : pageViewsPercentageDown
                        }

                    </p>
                </p>
            </div>
        </div>
        <div class="socialOverviewCard">
            <div class="socialViews">
                <p class="pageViews">${overviewTitle2}</p>
                <h2 class="viewsNumbers">${likes}</h2>
            </div>
            <div class="socialPercentage">
                <img
                    class="socialIcon socialIconbottom"
                    src="./images/icon-${socialIcon}.svg"
                />
                <p class="viewsPercentage ${
                    likesPercentage ? "" : "negativePerc"
                }">
                <img class="upArrow overviewArrow" src="./images/icon-${
                    likesPercentage !== null ? "up" : "down"
                }.svg" />
                    ${likesPercentage ? likesPercentage : likesPercentageDown}
                </p>
            </div>
        </div>
            `;
    });
    socialMediaCards.innerHTML = mediaCardsMarkup.join("");
    socialMediaOverview.innerHTML = overviewMarkup.join("");
}

dashboardMarkup(info);
