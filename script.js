// storing the theme on the user's machine
localStorage.setItem('theme', 'dark');

//accessed the user's machine theme
localStorage.getItem('theme');
// dark
const toggle = document.getElementById("toggle");
let theme = window.localStorage.getItem("theme");

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (theme === "dark") document.body.classList.add("dark");
let hashURL = location.pathname;
// event listener stops when the change theme button is clicked
toggle.addEventListener("click", () => {
    theme = window.localStorage.getItem("theme");
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
        $('#logoHeader').attr("src","images/icon_dark/logo-mark-dark.png");
        $('#idXSquare>img').attr("src","images/icon_dark/x-square-dark-icon.png");
        $('#idLogoHome').attr("src","images/icon_dark/logo-type-dark/home_logo.png");
        $('#logoFooter').attr('src', "images/icon_dark/logo-mark-dark.png");
        $('#sloganFooter').attr("src","images/icon_dark/logo-type-dark/home_logo.png");
        $('#imgToggle').attr("src","images/icon_dark/mode-dark-icon.png");
        $('.icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");
        $('#nextDouble').attr("src","images/icon_dark/double-next-dark-icon.png");
    } else {
        window.localStorage.setItem("theme", "dark");
        $('#logoHeader').attr("src","images/icon_light/logo-mark-light.png");
        $('#idXSquare>img').attr("src","images/icon_light/x-square-light-icon.png");
        $('#idLogoHome').attr("src","images/icon_light/logo-type-light/home_logo.png");
        $('#logoFooter').attr('src', "images/icon_light/logo-mark-light.png");
        $('#sloganFooter').attr("src","images/icon_light/logo-type-light/home_logo.png");
        $('#imgToggle').attr("src","images/icon_light/mode-light-icon.png");
        $('.icon-plus').attr("src","images/icon_light/plus-light-icon.png");
        $('#nextDouble').attr("src","mages/icon_light/next-double-light-icon.png");

    }
});
$( document ).ready(function() {
    let defaultWith = $(window).width() - 16*2;
    $('#idLogoHome').css('width', defaultWith);
    $('.dropdown-content').css('width', defaultWith);
    $('.full-width-img').css('width', defaultWith);
    $('.model-list-show').css('width', defaultWith);
    $('#idMoveHome').css('width', defaultWith);
    $('.navbar-custom-content').css('width', defaultWith);
    $('.grid-model-container').css('width', defaultWith);
    $('.grid-model-gender-container').css('width', defaultWith);
    $('.year-detail-box').css('width', defaultWith);
    $('.list-ranking-choose').css('width', defaultWith/2-2);
    $('.list-ranking-choose-right').css('width', defaultWith/2-2);
    $('.list-ranking-choose-right').css('margin-left', defaultWith/2-2);
    $('.year-item').css('width', defaultWith/3-1)
    $('.filter-bg').css('width', defaultWith/3-2)
    defaultWith -=4;
    let imgSlideWidth = defaultWith/13;
    const baseUrlImg = "images/imgs_homepage/slide";
    let htmlValue = '';
    for(var i=1; i<=11; i++) {
        if(i === 6) {
            htmlValue += '<img class="img-home-default" src="'+baseUrlImg+i+'.jpg" '+
                'width="'+(3*imgSlideWidth)+'px" id="imgSlide'+i  +'">'
        } else {
            htmlValue += '<img class="img-home" src="'+baseUrlImg+i+'.jpg" id="slide '+i+'" ' +

            'width="'+imgSlideWidth+'px" id="imgSlide'+i  +'" >'
        }
    }
    $('#logoHeader').click(() => {
        let pattern = /.*.html/;
        location.replace(location.pathname.replace(pattern, 'index.html'));
    });

    $('#slideShow').html(htmlValue);
    document.body.style.setProperty('--img-width-logo-default', imgSlideWidth + 'px');//set
    document.body.style.setProperty('--img-width-logo', imgSlideWidth*3 + 'px');//set
    let lastScrollTop = 0;

    $(window).scroll(function(event){
        let st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('#navBar').css('animation', 'hiddenNavBar 500ms ease-in 0s forwards');
        } else {
            $('#navBar').css('animation', 'showNavBar 500ms ease-in 0s forwards');
        }
        lastScrollTop = st;
    });

});
const menuClicked = () => {
  $('#myDropdown').css('display', 'flex');
  $('#idMenu').css('display', 'none');
  $('#idXSquare').css('display', 'block');
 }
const xSquareClicked = () => {
    $('#idXSquare').css('display', 'none');
    $('#idMenu').css('display', 'block');
    $('#myDropdown').css('display', 'none');
}
const goToModel = () => {
    let pattern = /.*.html/;
    location.replace(location.pathname.replace(pattern, 'models.html'));
}
const goToRank = () => {
    let pattern = /.*.html/;
    location.replace(location.pathname.replace(pattern, 'ranking.html'));
    console.log(location)
}
