// storing the theme on the user's machine
localStorage.setItem('theme', 'dark');

//accessed the user's machine theme
localStorage.getItem('theme');
// dark
const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
let theme = window.localStorage.getItem("theme");

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (theme === "dark") document.body.classList.add("dark");

// event listener stops when the change theme button is clicked
toggle.addEventListener("click", () => {
    theme = window.localStorage.getItem("theme");
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
        $('#logoHeader').attr("src","images/icon_dark/logo-mark-dark.png");
        $('#idXSquare>img').attr("src","images/icon_dark/x-square-dark-icon.png");
        $('#idLogoHome').attr("src","images/icon_dark/logo-type-dark/home_logo.png");
    } else {
        window.localStorage.setItem("theme", "dark");
        $('#logoHeader').attr("src","images/icon_light/logo-mark-light.png");
        $('#idXSquare>img').attr("src","images/icon_light/x-square-light-icon.png");
        $('#idLogoHome').attr("src","images/icon_light/logo-type-light/home_logo.png");

    }
});
$( document ).ready(function() {
    let defaultWith = $(window).width() - 16*2;
    $('#myDropdown').css('width', defaultWith);
    $('#idLogoHome').css('width', defaultWith);
    $('.full-width-img').css('width', defaultWith);
    $('.model-list-show').css('width', defaultWith);

    let imgSlideWidth = defaultWith/12;
    const baseUrlImg = "images/imgs_homepage/slide";
    let htmlValue = '';
    for(var i=1; i<=11; i++) {
        htmlValue += '<img src="'+baseUrlImg+i+'.jpg" id="slide '+i+'" ' +
            'width="'+imgSlideWidth+'px">'
    }
    $('#slideShow').html(htmlValue);

});
refresh.addEventListener("click", () => {
    window.location.reload();
});
const menuClicked = () => {
  $('.dropdown-content').css('display', 'flex');
  $('#idMenu').css('display', 'none');
  $('#idXSquare').css('display', 'flex');
 }
const xSquareClicked = () => {
    $('#idXSquare').css('display', 'none');
    $('#idMenu').css('display', 'block');
    $('.dropdown-content').css('display', 'none');
}
