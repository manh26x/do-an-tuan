const gotoRankingOfAwards = () => {
    let pattern = /.*.html/;
    location.replace(location.pathname.replace(pattern, 'ranking-of-awards.html'));
}
const gotoRankingOfAwardsOfYear = (year) => {
    let pattern = /.*.html/;
    localStorage.setItem('year', year);
    location.replace(location.pathname.replace(pattern, 'ranking-awards-of-year.html'));
}
$(document).ready(() => {
    let year = localStorage.getItem('year');
    $('#titleAwardOfYear').text('MODEL OF THE YEAR AWARDS ' + year);
    $('.men-area').hover(() => {
            const theme = window.localStorage.getItem("theme");
            if (theme === "dark") {
                $('.men-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");
            } else {
                $('.men-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");
            }
        },
        () => {
            const theme = window.localStorage.getItem("theme");
            if (theme === "dark") {
                $('.men-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");

            } else {
                $('.men-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");

            }
        });
    $('.women-area').hover(() => {
            const theme = window.localStorage.getItem("theme");
            if (theme === "dark") {
                $(' .women-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");
            } else {
                $(' .women-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");
            }
        },
        () => {
            const theme = window.localStorage.getItem("theme");
            if (theme === "dark") {
                $('.women-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");

            } else {
                $('.women-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");

            }
        });

})
let toggleRankMen =  true;
const showListRankingMen = () => {
    if(toggleRankMen) {
        $('.list-ranking-choose').css('display', 'flex');
        $('.men-area .icon-plus').css('transform', 'rotate(-45deg)');
    } else  {
        $('.list-ranking-choose').css('display', 'none');
        $('.men-area .icon-plus').css('transform', 'rotate(0deg)');
    }

    toggleRankMen = !toggleRankMen;
}
let toggleRankGirl = true;
const showListRankingWomen = () => {
    if(toggleRankGirl) {
        $('.list-ranking-choose-right').css('display', 'flex');
        $('.women-area .icon-plus').css('transform', 'rotate(-45deg)');
    } else  {
        $('.list-ranking-choose-right').css('display', 'none');
        $('.women-area .icon-plus').css('transform', 'rotate(0deg)');
    }
    toggleRankGirl = !toggleRankGirl;
}
