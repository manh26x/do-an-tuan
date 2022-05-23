
$(document).ready(() => {

    generateWishListPage();
});
generateWishListPage = () => {
    if(wishList.length === 0) {
        $('.wish-list-empty').css('display', 'flex');
        $('.grid-model-container').css('display', 'none');
    } else {
        $('.grid-model-container').css('display', 'grid');
        $('.wishlist-area').css('display', 'grid');
        generateWishList();
    }
}
const generateWishList = () => {
    let modelsChildren = '';
    let models = JSON.parse(localStorage.getItem('models'));
    let wishList = models.filter(m => m.wished === true);
    $('#quantity').html('['+wishList.length+']');
    wishList.forEach((model,i) => {
        modelsChildren += '<div class="model-item" id="modelWish' + i+'"></div>';
        model.id = i;
        setTimeout(() => {
            $('#modelWish'+i).css('background-image', 'url(./images/models-page-full/' + model.image + '.jpg)');
            let htmlInfo =
                '           <div class="blur-cover" style="visibility: hidden; position: absolute; background-color: rgba(175,175,175,0.51); width: 29rem; height: 640px; filter: blur(2px); transform: translate(-25px,-25px)"></div>\n' +
                ' <div class="model-item-content">     <div class="model-item-title"><h6>'+model.name+'</h6><img class="heart-icon" src="images/icon_dark/x-dark-icon.png"> </div>\n' +
                '                <p style="visibility: hidden">Height: '+model.height+'</p>\n' +
                '                <p  style="visibility: hidden">Bust: '+model.bust+'</p>\n' +
                '                <p  style="visibility: hidden">Waist: '+model.waist+'</p>\n' +
                '                <p  style="visibility: hidden">Hips: '+model.hips+'</p>\n' +
                '                <p  style="visibility: hidden">Shoe: '+model.shoe+'</p>\n' +
                '                <p  style="visibility: hidden">Hair: '+model.hair+'</p>\n' +
                '                <p  style="visibility: hidden">Eyes: '+model.eyes+'</p> </div>'+
                '                <div class="country" style="z-index: 3;"><h6>'+model.location+'</h6></div>';
            $('#modelWish'+i).html(htmlInfo);
            $('#modelWish'+i).hover(
                () => {
                    $('#modelWish'+i).css('background-image', ' url(./images/models-page-full/' + model.imageHover + '.jpg)');
                    $('#modelWish'+i + ' .blur-cover').css('visibility', 'unset');
                    $('#modelWish'+i + ' p').css('visibility', 'unset');
                },
                () => {
                    $('#modelWish'+i).css('background-image', 'url(./images/models-page-full/' + model.image + '.jpg)');
                    $('#modelWish'+i + ' .blur-cover').css('visibility', 'hidden');
                    $('#modelWish'+i + ' p').css('visibility', 'hidden');
                }
            );
            setTimeout(() => {
                $('#modelWish'+i + ' .heart-icon').click(() => {
                    debugger
                   let findedModel = models.filter(m => m === wishList[i]);
                    findedModel[0].wished = false;
                    localStorage.setItem('models', JSON.stringify(models));
                    generateWishListPage();
                });
            }, 150);
            setTimeout(() => {
                $('.model-item').css('width', defaultWith/4);
                $('#modelWish'+i + ' .blur-cover').css('width', defaultWith/4);
                $('.model-item .model-item-content').css('width', defaultWith / 4 - 50);
            }, 100);
        }, 100);
    });
    $('#wishlist').html(modelsChildren);
}
