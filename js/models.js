let toggle1 = true;
$('.categories-area').click(() => {
    if(toggle1) {
        let parent = $('.categories-dropdown-area');
        parent.css({'visibility': 'unset', 'height':'auto'});
        let children=$('.categories-dropdown-area').children();
        children.each(function(idx, val){
            $(this).css('animation','showDropdown 0.1s ease-in ' + idx * 0.1 +'s forwards');
        });
        $('.categories-area .icon-small').css('transform', 'rotate(-45deg)')

    } else {
        $('.categories-dropdown-area').css({'visibility': 'hidden', 'height': '0'});
        $('.categories-area .icon-small').css('transform', 'rotate(0deg)')
    }
    toggle1 =!toggle1;

});
let gender = '';
let category = '';
let country = '';
$('.categories-area').hover(() => {
        const theme = window.localStorage.getItem("theme");
        if (theme === "dark") {
            $('.categories-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");
        } else {
            $('.categories-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");
        }
    },
    () => {
        const theme = window.localStorage.getItem("theme");
        if (theme === "dark") {
            $('.categories-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");

        } else {
            $('.categories-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");

        }
    });
let toggle2 = true;
$('.gender-area').click(() => {
    if(toggle2) {
        let parent = $('.gender-dropdown-area');
        parent.css({'visibility': 'unset', 'height':'auto'});
        let children=parent.children();
        children.each(function(idx, val){
            $(this).css('animation','showDropdown 0.1s ease-in ' + idx * 0.1 +'s forwards');
        });
        $('.gender-area .icon-small').css('transform', 'rotate(-45deg)');
    } else {
        $('.gender-area .icon-small').css('transform', 'rotate(0deg)');
        $('.gender-dropdown-area').css({'visibility': 'hidden', 'height':'0'});
    }
    toggle2 = !toggle2;

});

$('.gender-area').hover(() => {
        const theme = window.localStorage.getItem("theme");
        if (theme === "dark") {
            $('.gender-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");
        } else {
            $('.gender-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");
        }
    },
    () => {
        const theme = window.localStorage.getItem("theme");
        if (theme === "dark") {
            $('.gender-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");

        } else {
            $('.gender-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");

        }
    });
let toggle3 = true;
$('.location-area').click(() => {
    if(toggle3) {
        let parent = $('.location-dropdown-area');
        parent.css({'visibility': 'unset', 'height':'auto'});
        let children=parent.children();
        children.each(function(idx, val){
            $(this).css('animation','showDropdown 0.1s ease-in ' + idx * 0.1 +'s forwards');
        });
        $('.location-area .icon-small').css('transform', 'rotate(-45deg)');
    } else {
        $('.location-dropdown-area').css({'visibility': 'hidden', 'height':'0'});
        $('.location-area .icon-small').css('transform', 'rotate(0deg)');
    }
    toggle3 = !toggle3;

});
$('.location-area').hover(() => {
        const theme = window.localStorage.getItem("theme");
        if (theme === "dark") {
            $('.location-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");
        } else {
            $('.location-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");
        }
    },
    () => {
        const theme = window.localStorage.getItem("theme");
        if (theme === "dark") {
            $('.location-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");

        } else {
            $('.location-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");

        }
    });
let toggle4 = true;
$('.measurements-area').click(() => {
    if(toggle4) {
        let parent = $('.measurements-dropdown-area');
        parent.css({'visibility': 'unset', 'height':'auto'});
        let children=parent.children();
        children.each(function(idx, val){
            $(this).css('animation','showDropdown 0.1s ease-in ' + idx * 0.1 +'s forwards');
        });
        $('.measurements-area .icon-small').css('transform', 'rotate(-45deg)');
    } else {
        $('.measurements-dropdown-area').css({'visibility': 'hidden', 'height':'0'});
        $('.measurements-area .icon-small').css('transform', 'rotate(0deg)');
    }
    toggle4 = !toggle4
});
$('.measurements-area').hover(() => {
        const theme = window.localStorage.getItem("theme");
        if (theme === "dark") {
            $('.measurements-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");
        } else {
            $('.measurements-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");
        }
    },
    () => {
        const theme = window.localStorage.getItem("theme");
        if (theme === "dark") {
            $('.measurements-area .icon-plus').attr("src","images/icon_light/plus-light-icon.png");

        } else {
            $('.measurements-area .icon-plus').attr("src","images/icon_dark/plus-dark-icon.png");

        }
    });

$(document).ready(() => {
    try {
        if(localStorage.getItem('models')) {
            models = JSON.parse(localStorage.getItem('models'));
        } else  {
            localStorage.setItem('models', JSON.stringify(models));
        }
        $('#quantityModel').text('['+models.length+']')
        generateModels(false);
        for(let i =1; i<=4; i++) {
            conChoTuan(i);
        }
    } catch (e) {

    }
    let modelId = parseInt(localStorage.getItem('modelId'));
    if(modelId !== -1) {
        try {
            let model = models[modelId];
        $('#modelName').text(model.name);
        $('#height').text(model.height);
        $('#bust').text(model.bust);
        $('#waist').text(model.waist);
        $('#hips').text(model.hips);
        $('#shoe').text(model.shoe);
        $('#hair').text(model.hair);
        $('#eyes').text(model.eyes);
        $('#descripModel').text(model.describe);
        $('#videoModel').attr('src', 'images/models-page-full/'+model.video+'.mp4');
        $('.model-detail .national').text('Nationality: ' + model.location);
        $('')
        let imgHtml = '';
        model.img.forEach(img => imgHtml += '<img alt="" src="images/models-page-full/'+img+'.jpg">');
        $('.photos-grid-col-3').html(imgHtml);
            $('#imgAvt').attr('src', 'images/models-page-full/'+model.image+'.jpg');
            model.img.slice(3).forEach((img, i) => {
                $('.img-area'+(i+1) + ' img').attr('src','images/models-page-full/' + img + '.jpg');
            });

        } catch (e) {

        }
    }


});
const filterModelGender = (element, g) => {
    gender = g
    $('.gender-dropdown-area button').removeClass('active-model');
    element.classList.add('active-model');

    generateModels(false);
}
const filterModelLocation = (element, c) => {
    country = c
    $('.location-dropdown-area button').removeClass('active-model')
    element.classList.add('active-model');

    generateModels(false);
}
const filterModel = (event, type) => {
    category = type;
    $('.categories-dropdown-area button').removeClass('active-model')
    event.classList.add('active-model');

    generateModels(false);
}
const addWishList = (index, clicked) =>{
    models[index].wished = true;
    localStorage.setItem('models', JSON.stringify(models));
    if(clicked === true) {
        $('.modal').removeClass('hidden-modal');
        $('.modal').addClass('show-modal');
        $('.modal').css('animation', 'showModal 500ms ease-in 0ms ')
        $('.modal-content-text').text(models[index].name.toUpperCase() + ' ADDED TO WISH LIST!');
        setTimeout(() => closeModal() , 3000);
    }

    generateModels(false);
    getWishList();



}

let modelSize = 12;
const clearFilter = () => {
    gender = '';
    category = '';
    country = '';
    generateModels(false);
    $('.categories-dropdown-area button').removeClass('active-model');
    $('.location-dropdown-area button').removeClass('active-model');
    $('.gender-dropdown-area button').removeClass('active-model');

}
const generateModels = (expaned) => {
    let modelsChildren = '';
    if(expaned) {
        modelSize += 4;
    }
    let lastI = 0;
    models = JSON.parse(localStorage.getItem('models'));
    if(category !== '') {
        models = models.filter(m => m.categories === category );
    } else {
        if(localStorage.getItem('models')) {
            models = JSON.parse(localStorage.getItem('models'));
        } else  {
            localStorage.setItem('models', JSON.stringify(models));
        }
    }
    if(gender !== '') {
        models = models.filter((m => m.gender=== gender));
    }
    if(country !== '') {
        models = models.filter((m => m.location === country));
    }
    models.slice(0, modelSize).forEach((model,i) => {
        modelsChildren += '<div class="model-item" id="model' + i+'"></div>';
        model.id = i;
        lastI = i;
        setTimeout(() => {
            $('#model'+i).css('background-image', 'url(./images/models-page-full/' + model.image + '.jpg)');
            let htmlInfo =
                '           <div class="blur-cover defaultWith_div_4"  style="visibility: hidden; position: absolute; background-color: rgba(175,175,175,0.51);  height: 640px; filter: blur(2px); transform: translate(-20px,-20px)" ></div>\n' +
                ' <div class="model-item-content" >     <div class="model-item-title" ><h6>'+model.name+'</h6><div class="bg-grey"><img class="heart-icon" src="images/icon_dark/heart-dark-icon.png" onclick="addWishList('+i+', true)"> </div></div>\n' +
                '                <p style="visibility: hidden">Height: '+model.height+'</p>\n' +
                '                <p  style="visibility: hidden">Bust: '+model.bust+'</p>\n' +
                '                <p  style="visibility: hidden">Waist: '+model.waist+'</p>\n' +
                '                <p  style="visibility: hidden">Hips: '+model.hips+'</p>\n' +
                '                <p  style="visibility: hidden">Shoe: '+model.shoe+'</p>\n' +
                '                <p  style="visibility: hidden">Hair: '+model.hair+'</p>\n' +
                '                <p  style="visibility: hidden">Eyes: '+model.eyes+'</p> ' +
                '<div class="country" style="z-index: 3;" ><h6>'+model.location+'</h6></div></div>' +
                ' <div  style=" position: absolute;  width: 22.5rem; height: 640px; z-index: 11; transform: translate(-20px,-20px) cursor: pointer" onclick="gotoModelDetail('+i+')"></div>'+
                '                ';
            $('#model'+i).html(htmlInfo);
            $('#model'+i).hover(
                () => {
                    $('#model'+i).css('background-image', ' url(./images/models-page-full/' + model.imageHover + '.jpg)');
                    $('#model'+i + ' .blur-cover').css('visibility', 'unset');
                    $('#model'+i + ' p').css('visibility', 'unset');
                },
                () => {
                    $('#model'+i).css('background-image', 'url(./images/models-page-full/' + model.image + '.jpg)');
                    $('#model'+i + ' .blur-cover').css('visibility', 'hidden');
                    $('#model'+i + ' p').css('visibility', 'hidden');
                }
            );

            setTimeout(() => {
                $('.model-item .model-item-content').css('width', defaultWith / 4 - 50);
                $('.defaultWith_div_4').css('width', defaultWith/4+1);
                if(model.wished === true) {
                    $('#model' + i + ' .heart-icon').attr('src', 'images/fill-heart-dark-icon.png');
                } else {
                    $('#model' + i + ' .heart-icon').hover(
                        () => $('#model' + i + ' .heart-icon').attr('src', 'images/fill-heart-dark-icon.png'),
                        () => $('#model' + i + ' .heart-icon').attr('src', 'images/icon_dark/heart-dark-icon.png')
                    );

                }
            }, 100);
        }, 100);
    });
    $('#models').html(modelsChildren);
    if(modelSize > 12 && expaned) {
        $('html,body').animate({
            scrollTop: $('#model'+lastI).position().top
        });
    }

}

let models =[
    {
        "name": "Insta Eiji",
        "categories": "Main",
        "gender": "Male",
        "location": "Korea",
        "height": "180",
        "bust": "96",
        "waist": "78",
        "hips": "98",
        "shoe": "42",
        "hair": "Black",
        "eyes": "Brown",
        "image": "img/Insta1",
        "imageHover": "img/Insta2",
        "birthdate": "October 10, 1995",
        "describe": "Eiji is a model with a bright appearance and positive energy. He appeared on the catwalk during Korea Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video": "video/video-insta",
        "img": ["InstaEiji/insta1","InstaEiji/insta2","InstaEiji/insta3","InstaEiji/insta4","InstaEiji/insta5","InstaEiji/insta6","InstaEiji/insta7","InstaEiji/insta8","InstaEiji/insta9"]
    },

    {
        "name": "Sensi Mia",
        "categories": "Main",
        "gender": "Female",
        "location": "Russia",
        "height": "170",
        "bust": "100",
        "waist": "58",
        "hips": "98",
        "shoe": "38",
        "hair": "Blonde",
        "eyes": "Blue",
        "image": "img/sensi1",
        "imageHover": "img/sensi2",
        "birthdate": "May 10, 1999",
        "describe": "Sensi Mia is a truly versatile person, she is a gifted tennis player and a talented designer of jewelry. Sensi worked  for such legendary brands as Valentino, Trussardi, Alexander McQueen, Paul Ka, The Row, Twin Set. Sensi’s father worked for Valentino.",
        "video": "video/video-tan",
        "img": ["SensiMia/sensi1","SensiMia/sensi2","SensiMia/sensi3","SensiMia/sensi4","SensiMia/sensi5","SensiMia/sensi6","SensiMia/sensi7","SensiMia/sensi8","SensiMia/sensi9"]
    },

    {
        "name": "Zing A",
        "categories": "Main",
        "gender": "Male",
        "location": "China",
        "height": "185",
        "bust": "88",
        "waist": "74",
        "hips": "78",
        "shoe": "40",
        "hair": "Black",
        "eyes": "Brown",
        "image": "img/Zing1",
        "imageHover": "img/Zing2",
        "birthdate": "June 02, 1997",
        "describe": "Zing A just started his work as a model, and he already works with numerous photographers in China, walked for China Fashion Week and graced the pages of Millenium magazine.",
        "video": "video/video-insta",
        "img": ["ZingA/Zing1","ZingA/Zing2","ZingA/Zing3","ZingA/Zing4","ZingA/Zing5","ZingA/Zing6","ZingA/Zing7","ZingA/Zing8","ZingA/Zing9"]
    },

    {
        "name": "Taylor Aliona",
        "categories": "Main",
        "gender": "Female",
        "location": "USA",
        "height": "175",
        "bust": "98",
        "waist": "55",
        "hips": "86",
        "shoe": "37",
        "hair": "Sandy",
        "eyes": "Yellow",
        "image": "img/Aliona1",
        "imageHover": "img/Aliona2",
        "birthdate": "October 15, 1998",
        "describe": "Taylor Aliona is a model with a bright appearance and positive energy. She appeared on the catwalk during Newyork Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video": "video/video-tylor",
        "img":["TylorAliona/1","TylorAliona/2","TylorAliona/3","TylorAliona/4","TylorAliona/5","TylorAliona/6","TylorAliona/7","TylorAliona/8","TylorAliona/9"]
    },

    {
        "name": "Hanna Cris",
        "categories": "Main",
        "gender": "Female",
        "location": "France",
        "height": "167",
        "bust": "70",
        "waist": "55",
        "hips": "80",
        "shoe": "39",
        "hair": "Ginger",
        "eyes": "Blue",
        "image": "img/Hanna1",
        "imageHover": "img/Hanna2",
        "birthdate": "January 31, 2000",
        "describe":"Hanna Cris is a truly versatile person, she is a gifted tennis player and a talented designer of jewelry. Hanna worked  for such legendary brands as Valentino, Trussardi, Alexander McQueen, Paul Ka, The Row, Twin Set.",
        "video": "video/video-women",
        "img":["HannaCris/1","HannaCris/2","HannaCris/3","HannaCris/4","HannaCris/5","HannaCris/6","HannaCris/7","HannaCris/8","HannaCris/1"]
    },

    {
        "name": "Tan Suan",
        "categories": "Main",
        "gender": "Female",
        "location": "China",
        "height": "169",
        "bust": "75",
        "waist": "56",
        "hips": "82",
        "shoe": "37",
        "hair": "Black",
        "eyes": "Brown",
        "image": "img/Tan1",
        "imageHover": "img/Tan2",
        "birthdate": "December 02, 2001",
        "describe": "Tan Suan is a talented China model. She can boast a blooming career, working for top brands such as Armani Exchange and appearing in worldwide reputed editorials: Elle China, Glamour Mexico, Hunger London, HIA magazine London and many others.",
        "video": "video/video-tan",
        "img":["TanSuan/Tan1","TanSuan/Tan2","TanSuan/Tan3","TanSuan/Tan4","TanSuan/Tan5","TanSuan/Tan6","TanSuan/Tan7","TanSuan/Tan8","TanSuan/Tan9"]
    },

    {
        "name": "Ivy Kenna",
        "categories": "Main",
        "gender": "Female",
        "location": "Spain",
        "height": "173",
        "bust": "81",
        "waist": "65",
        "hips": "80",
        "shoe": "38",
        "hair": "Blonde",
        "eyes": "Brown",
        "image": "img/Ivy1",
        "imageHover":"img/Ivy2",
        "birthdate": "December 02, 2001",
        "describe":"Ivy Kenna is a model with a bright appearance and positive energy. She appeared on the catwalk during Spain Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "img":["IvyKenna/1","IvyKenna/2","IvyKenna/3","IvyKenna/4","IvyKenna/5","IvyKenna/1","IvyKenna/2","IvyKenna/3","IvyKenna/4"]
    },

    {
        "name": "Moca Chinel",
        "categories": "Main",
        "gender": "Female",
        "location": "Spain",
        "height": "169",
        "bust": "74",
        "waist": "58",
        "hips": "89",
        "shoe": "37",
        "hair": "Black Curly",
        "eyes": "Black",
        "image": "img/Chinel1",
        "imageHover": "img/Chinel2",
        "birthdate": "November 09, 1996",
        "describe": "Moca Chinel is a gorgeous Spain model, who successfully works in the world. She shot editorial for Grazia Netherlands, Harper’s Bazaar Spain and walked for London Fashion Week.",
        "video": "video/video-women",
        "img":["MocaChinel/moca1","MocaChinel/moca2","MocaChinel/moca3","MocaChinel/moca4","MocaChinel/moca5","MocaChinel/moca6","MocaChinel/moca1","MocaChinel/moca2","MocaChinel/moca3"]
    },

    {
        "name": "Ayo Chan",
        "categories": "Main",
        "gender": "Male",
        "location": "Taiwan",
        "height": "185",
        "bust": "79",
        "waist": "76",
        "hips": "87",
        "shoe": "43",
        "hair": "Brown Curly",
        "eyes": "Brown",
        "image": "img/Ayo1",
        "imageHover": "img/Ayo2",
        "birthdate": "November 10, 1999",
        "describe": "Ayo Chan is a model with a bright appearance and positive energy. He appeared on the catwalk during Taiwan Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video": "video/video-insta",
        "img":["AyoChan/chan1","AyoChan/chan2","AyoChan/chan3","AyoChan/chan4","AyoChan/chan5","AyoChan/chan6","AyoChan/chan7","AyoChan/chan8","AyoChan/chan9"]
    },

    {
        "name": "Yuri Manei",
        "categories": "Main",
        "gender": "Male",
        "location": "Thailand",
        "height": "179",
        "bust": "78",
        "waist": "59",
        "hips": "89",
        "shoe": "41",
        "hair": "Short Black",
        "eyes": "Black",
        "image": "img/Yuri1",
        "imageHover": "img/Yuri2",
        "birthdate": "August 29, 1995",
        "describe": "Yuri Manei is following her dream to become a well-known model. Despite of young age, he’s a self-confident and well-organized person. He has shot multiple fashion stories for industry-leading publications such as Elle Spain and L’officiel Thailand.",
        "video": "video/video-insta",
        "img":["YuriManei/yuri1","YuriManei/yuri2","YuriManei/yuri3","YuriManei/yuri4","YuriManei/yuri5","YuriManei/yuri6","YuriManei/yuri7","YuriManei/yuri2","YuriManei/yuri1"]
    },

    {
        "name": "J.Molena",
        "categories": "Main",
        "gender": "Female",
        "location": "Italy",
        "height": "169",
        "bust": "77",
        "waist": "59",
        "hips": "90",
        "shoe": "39",
        "hair": "Sandy",
        "eyes": "Blue",
        "image": "img/Molena1",
        "imageHover": "img/Molena2",
        "birthdate": "July 21, 2000",
        "describe": "J.Molena is a model with a bright appearance and positive energy. She appeared on the catwalk during Italy Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video": "video/video-women",
        "img":["Molena/molena1","Molena/molena2","Molena/molena3","Molena/molena4","Molena/molena5","Molena/molena6","Molena/molena7","Molena/molena8","Molena/molena1"]
    },

    {
        "name": "Taylor Nix",
        "categories": "Main",
        "gender": "Male",
        "location": "Thailand",
        "height": "177",
        "bust": "77",
        "waist": "65",
        "hips": "87",
        "shoe": "44",
        "hair": "Black",
        "eyes": "Brown",
        "image": "img/Nix1",
        "imageHover": "img/Nix2",
        "birthdate": "February 21, 1998",
        "describe": "Taylor Nix is a young promising model with more than 5 years of experience in modeling. The boy boasts numerous shootings for international magazines.",
        "video": "video/video-insta",
        "img":["TylorNix/1","TylorNix/2","TylorNix3","TylorNix/5","TylorNix/7","TylorNix/8","TylorNix/9","TylorNix/10","TylorNix/11"]
    },

    {
        "name": "Helen Ast",
        "categories": "Development",
        "gender": "Female",
        "location": "Russia",
        "height": "177",
        "bust": "72",
        "waist": "56",
        "hips": "81",
        "shoe": "37",
        "hair": "Black",
        "eyes": "Blue",
        "image": "img/Helen1",
        "imageHover": "img/Helen2",
        "birthdate": "February 19, 1998",
        "describe": "Helen Ast is a young model with more than 5 years of experience in modeling. Helen Ast devotes her free time to yoga, her abilities help her in her work as a model, the girl starred for many brands of sportswear.",
        "video":"video/video-women",
        "img":["Molena/molena1","Molena/molena2","Molena/molena3","Molena/molena4","Molena/molena5","Molena/molena6","Molena/molena7","Molena/molena8","Molena/molena1"]
    },

    {
        "name": "Brian Lawson",
        "categories": "Development",
        "gender": "Male",
        "location": "Canada",
        "height": "187",
        "bust": "79",
        "waist": "76",
        "hips": "89",
        "shoe": "43",
        "hair": "Smoke Gray",
        "eyes": "Blue",
        "image": "img/Brian1",
        "imageHover": "img/Brian2",
        "birthdate": "February 19, 1998",
        "describe": "Brian Lawson is a model with a bright appearance and positive energy. He appeared on the catwalk during Canada Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video":"video/video-insta",
        "img":["TylorNix/1","TylorNix/2","TylorNix3","TylorNix/5","TylorNix/7","TylorNix/8","TylorNix/9","TylorNix/10","TylorNix/11"]
    },

    {
        "name": "Lily Caki",
        "categories": "Development",
        "gender": "Female",
        "location": "USA",
        "height": "167",
        "bust": "77",
        "waist": "56",
        "hips": "89",
        "shoe": "37",
        "hair": "Black Dreadlock",
        "eyes": "Brown",
        "image": "img/Lily1",
        "imageHover": "img/Lily2",
        "birthdate": "February 19, 1998",
        "describe": "Lily Caki is a model with a bright appearance and positive energy. She appeared on the catwalk during Wachington DC Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video":"video/video-women",
        "img":["Molena/molena1","Molena/molena2","Molena/molena3","Molena/molena4","Molena/molena5","Molena/molena6","Molena/molena7","Molena/molena8","Molena/molena1"]
    },

    {
        "name": "Albert Jankos",
        "categories": "Development",
        "gender": "Male",
        "location": "USA",
        "height": "187",
        "bust": "77",
        "waist": "76",
        "hips": "89",
        "shoe": "45",
        "hair": "Black",
        "eyes": "Brown",
        "image": "img/Albert1",
        "imageHover": "img/Albert2",
        "birthdate": "February 19, 1996",
        "describe": "Albert Jankos is a model with a bright appearance and positive energy. He appeared on the catwalk during Newyork Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video":"video/video-insta",
        "img":["TylorNix/1","TylorNix/2","TylorNix3","TylorNix/5","TylorNix/7","TylorNix/8","TylorNix/9","TylorNix/10","TylorNix/11"]
    },

    {
        "name": "Anna Vivchar",
        "categories": "New faces",
        "gender": "Female",
        "location": "Australia",
        "height": "171",
        "bust": "77",
        "waist": "56",
        "hips": "89",
        "shoe": "37",
        "hair": "Black",
        "eyes": "Blue",
        "image": "img/Anna1",
        "imageHover": "img/Anna2",
        "birthdate": "February 19, 1998",
        "describe": "Anna Vivchar is a model with a bright appearance and positive energy. She appeared on the catwalk during Wachington DC Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video":"video/video-women",
        "img":["Molena/molena1","Molena/molena2","Molena/molena3","Molena/molena4","Molena/molena5","Molena/molena6","Molena/molena7","Molena/molena8","Molena/molena1"]
    },

    {
        "name": "Karsten Wine",
        "categories": "New faces",
        "gender": "Male",
        "location": "USA",
        "height": "187",
        "bust": "77",
        "waist": "76",
        "hips": "89",
        "shoe": "45",
        "hair": "Black",
        "eyes": "Brown",
        "image": "img/Karsten1",
        "imageHover": "img/Karsten2",
        "birthdate": "February 19, 1996",
        "describe": "Karsten Wine is a model with a bright appearance and positive energy. He appeared on the catwalk during Newyork Fashion Week, appeared on the pages of Vogue Magazine and Opium.",
        "video":"video/video-insta",
        "img":["TylorNix/1","TylorNix/2","TylorNix3","TylorNix/5","TylorNix/7","TylorNix/8","TylorNix/9","TylorNix/10","TylorNix/11"]
    }
]
