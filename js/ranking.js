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
})
