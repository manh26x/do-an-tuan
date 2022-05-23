// storing the theme on the user's machine
let wishList = [];
let defaultWith = $(window).width() - 16*2;

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
toggle.addEventListener("click", toggleTheme);
function toggleTheme(isChangeTheme) {
    theme = window.localStorage.getItem("theme");
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        $('#idLogoHome').attr("src","images/icon_dark/logo-type-dark/home_logo.png");
        $('#logoHeader').attr("src","images/icon_dark/logo-mark-dark.png");
        $('#idXSquare>img').attr("src","images/icon_dark/x-square-dark-icon.png");
        $('#logoFooter').attr('src', "images/icon_dark/logo-mark-dark.png");
        $('#sloganFooter').attr("src","images/icon_dark/logo-type-dark/home_logo.png");
        $('#imgToggle').attr("src","images/icon_dark/mode-dark-icon.png");
        $('.icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");
        $('#nextDouble').attr("src","images/icon_dark/double-next-dark-icon.png");
        if(isChangeTheme !== false) {
            window.localStorage.setItem("theme", "light");
            $('#idLogoHome').attr("src","images/icon_light/logo-type-light/home_logo.png");
        }

    } else {

        $('#logoHeader').attr("src","images/icon_light/logo-mark-light.png");
        $('#idXSquare>img').attr("src","images/icon_light/x-square-light-icon.png");
        $('#idLogoHome').attr("src","images/icon_light/logo-type-light/home_logo.png");
        $('#logoFooter').attr('src', "images/icon_light/logo-mark-light.png");
        $('#sloganFooter').attr("src","images/icon_light/logo-type-light/home_logo.png");
        $('#imgToggle').attr("src","images/icon_light/mode-light-icon.png");
        $('.icon-plus').attr("src","images/icon_light/plus-light-icon.png");
        $('#nextDouble').attr("src","mages/icon_light/next-double-light-icon.png");
        if(isChangeTheme !== false) {
            window.localStorage.setItem("theme", "dark");
            $('#idLogoHome').attr("src","images/icon_dark/logo-type-dark/home_logo.png");
        }
    }
}
$( document ).ready(function() {
    toggleTheme(false);
    $('#idLogoHome').css('width', defaultWith);
    $('.dropdown-content').css('width', defaultWith);
    $('.full-width-img').css('width', defaultWith);
    $('.model-list-show').css('width', defaultWith);
    $('#idMoveHome').css('width', defaultWith);
    $('.navbar-custom-content').css('width', defaultWith);
    $('.grid-model-container').css('width', defaultWith-2);
    $('.grid-model-gender-container').css('width', defaultWith-2);
    $('.year-detail-box').css('width', defaultWith);
    $('.list-ranking-choose').css('width', defaultWith/2-2);
    $('.list-ranking-choose-right').css('width', defaultWith/2-2);
    $('.list-ranking-choose-right').css('margin-left', defaultWith/2-2);
    $('.year-item').css('width', defaultWith/3-1);
    $('.filter-bg').css('width', defaultWith/3-2);
    $('.model-item ').css('width', defaultWith/4);
    $('.ranking-title').css('width', defaultWith);
    $('.ranking-title .title-item').css('width', defaultWith/3-1);
    $('.studio-review').css('width', defaultWith);
    $('#calendar').css('width', defaultWith);
    $('#calculatePrice').css('width', defaultWith);
    $('.contact-detail-form, .model-review').css('width', defaultWith);

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
            if(menuClickedConst === false) {
                $('#navBar').css('animation', 'hiddenNavBar 500ms ease-in 0s forwards');
            }
        } else {
            $('#navBar').css('animation', 'showNavBar 500ms ease-in 0s forwards');
        }
        lastScrollTop = st;
    });
    getWishList();

});
getWishList = () => {
    if(localStorage.getItem('models')) {
        models = JSON.parse(localStorage.getItem('models'));
        wishList = models.filter(model => model.wished === true);
        $('#wishlistLink').text('WISH LIST['+wishList.length+']');
    }
}
let menuClickedConst = false;
const menuClicked = () => {
  $('#myDropdown').css('display', 'flex');
  $('#idMenu').css('display', 'none');
  $('#idXSquare').css('display', 'block');
    menuClickedConst = true;
 }
const xSquareClicked = () => {
    $('#idXSquare').css('display', 'none');
    $('#idMenu').css('display', 'block');
    $('#myDropdown').css('display', 'none');
    menuClickedConst = false;
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
const  gotoBecomeModel = () => {
    let pattern = /.*.html/;
    location.replace(location.pathname.replace(pattern, 'become-model.html'));
    console.log(location)
}
const gotoStudio = () => {
    let pattern = /.*.html/;
    location.replace(location.pathname.replace(pattern, 'studio.html'));
    console.log(location)
}
const gotoReview = () => {
    let pattern = /.*.html/;
    location.replace(location.pathname.replace(pattern, 'review.html'));
    console.log(location)
}
const gotoContact = () => {
    let pattern = /.*.html/;
    location.replace(location.pathname.replace(pattern, 'contact.html'));
    console.log(location)
}
$('#wishlistLink').click(() => {
    let pattern = /.*.html/;
    location.replace(location.pathname.replace(pattern, 'wish-list.html'));
});
