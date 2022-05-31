let ratingBox = document.querySelector("#rating-container");
// console.log(ratings.length);
$(document).ready(() => {
    clickRate('#rating-container');
    activedRate('#rating-container3',3)
})
const clickRate = (idRate) => {
    let ratings = document.querySelectorAll(' #rating-container .rating');
    for (var i = 0; i < ratings.length; i++) {
        ratings[i].addEventListener("mouseenter", (e) => {
            activateRating(Array.from(ratings)
                .indexOf(e.target), ratings);
        });
        ratings[i].addEventListener("mouseleave", (e) => {         deactivateRating(Array
            .from(ratings)
            .indexOf(e.target),ratings);
        });
    }
}

const activedRate = (idRate, index) => {
    let ratings = document.querySelectorAll(' #rating-container .rating');
    activateRating(Array.from(ratings)
        .indexOf(index), ratings);
    deactivateRating(Array
        .from(ratings)
        .indexOf(index),ratings);
}


function activateRating(idx, ratings) {
    for (var i = 0; i <= idx; i++) {
        ratings[i].classList.add("active");
    }
}

function deactivateRating(idx, ratings) {
    for (var i = 0; i <= idx; i++) {
        ratings[i].classList.remove("active");
    }
}

function rate(num, idRate) {
    let ratings = document.querySelectorAll(idRate+' .rating');
    console.log("Rating Selected: " + num);
    var idx = parseInt(num) - 1;
    for (var i = 0; i <= idx; i++) {
        ratings[i].classList.add("selected");
    }
    for (var i = idx + 1; i < ratings.length; i++) {
        ratings[i].classList.remove("selected");
    }
}
