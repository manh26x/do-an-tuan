
$('.categories-area').click(() => {
    let parent = $('.categories-dropdown-area');
    parent.css({'visibility': 'unset', 'height':'auto'});
    let children=$('.categories-dropdown-area').children();
    children.each(function(idx, val){
        $(this).css('animation','showDropdown 0.1s ease-in ' + idx * 0.1 +'s forwards');
    });

});
$('.categories-dropdown-area').mouseleave(() =>  $('.categories-dropdown-area').css({'visibility': 'hidden', 'height':'0'}));
$('.gender-area').click(() => {
    let parent = $('.gender-dropdown-area');
    parent.css({'visibility': 'unset', 'height':'auto'});
    let children=parent.children();
    children.each(function(idx, val){
        $(this).css('animation','showDropdown 0.1s ease-in ' + idx * 0.1 +'s forwards');
    });
});
$('.gender-dropdown-area').mouseleave(() =>  $('.gender-dropdown-area').css({'visibility': 'hidden', 'height':'0'}));
$('.location-area').click(() => {
    let parent = $('.location-dropdown-area');
    parent.css({'visibility': 'unset', 'height':'auto'});
    let children=parent.children();
    children.each(function(idx, val){
        $(this).css('animation','showDropdown 0.1s ease-in ' + idx * 0.1 +'s forwards');
    });
});
$('.location-dropdown-area').mouseleave(() =>  $('.location-dropdown-area').css({'visibility': 'hidden', 'height':'0'}));
$('.measurements-area').click(() => {
    let parent = $('.measurements-dropdown-area');
    parent.css({'visibility': 'unset', 'height':'auto'});
    let children=parent.children();
    children.each(function(idx, val){
        $(this).css('animation','showDropdown 0.1s ease-in ' + idx * 0.1 +'s forwards');
    });

});
$('.measurements-dropdown-area').mouseleave(() =>  $('.measurements-dropdown-area').css({'visibility': 'hidden', 'height':'0'}));

$(document).ready(() => {
    generateModels();
});
let modelSize = 8;
const generateModels = () => {
    let modelsChildren = '';
    modelSize += 4;
    theme = window.localStorage.getItem("theme");
    let iconUrl = ''
    if(theme === 'dark') {

    }
    models.slice(0, modelSize).forEach((model,i) => {
        modelsChildren += '<div class="model-item" id="model' + i+'"></div>';
        model.id = i;
        setTimeout(() => {
            $('#model'+i).css('background-image', 'url(./images/models-page-full/' + model.image + '.jpg)');
            let htmlInfo =
                '                <div class="blur-cover" style="visibility: hidden; position: absolute; background-color: rgba(175,175,175,0.51); width: 29rem; height: 640px; filter: blur(2px); transform: translate(-25px,-25px)"></div>\n' +
                ' <div class="model-item-title"><h6>'+model.name+'</h6><img src="images/icon_dark/heart-dark-icon.png"> </div>\n' +
                '                <p style="visibility: hidden">Height: '+model.height+'</p>\n' +
                '                <p  style="visibility: hidden">Bust: '+model.bust+'</p>\n' +
                '                <p  style="visibility: hidden">Waist: '+model.waist+'</p>\n' +
                '                <p  style="visibility: hidden">Hips: '+model.hips+'</p>\n' +
                '                <p  style="visibility: hidden">Shoe: '+model.shoe+'</p>\n' +
                '                <p  style="visibility: hidden">Hair: '+model.hair+'</p>\n' +
                '                <p  style="visibility: hidden">Eyes: '+model.eyes+'</p> </div>'+
                '                <div class="country" style="z-index: 3;"><h6>'+model.location+'</h6>';
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
            )
        }, 100)
    });
    $('.models').html(modelsChildren);
}

const models =[
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
        "describe": "Eiji is a model with a bright appearance and positive energy. He appeared on the catwalk during Korea Fashion Week, appeared on the pages of Vogue Magazine and Opium."
    },

    {
        "name": "Sensi Mia",
        "categories": "Main",
        "gender": "Female",
        "location": "Rusia",
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
        "describe": "Sensi Mia is a truly versatile person, she is a gifted tennis player and a talented designer of jewelry. Sensi worked  for such legendary brands as Valentino, Trussardi, Alexander McQueen, Paul Ka, The Row, Twin Set. Sensi’s father worked for Valentino."
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
        "describe": "Zing A just started his work as a model, and he already works with numerous photographers in China, walked for China Fashion Week and graced the pages of Millenium magazine."
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
        "describe": "Taylor Aliona is a model with a bright appearance and positive energy. She appeared on the catwalk during Newyork Fashion Week, appeared on the pages of Vogue Magazine and Opium."
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
        "describe":"Hanna Cris is a truly versatile person, she is a gifted tennis player and a talented designer of jewelry. Hanna worked  for such legendary brands as Valentino, Trussardi, Alexander McQueen, Paul Ka, The Row, Twin Set."
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
        "describe": "Tan Suan is a talented China model. She can boast a blooming career, working for top brands such as Armani Exchange and appearing in worldwide reputed editorials: Elle China, Glamour Mexico, Hunger London, HIA magazine London and many others."
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
        "describe":"Ivy Kenna is a model with a bright appearance and positive energy. She appeared on the catwalk during Spain Fashion Week, appeared on the pages of Vogue Magazine and Opium."
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
        "describe": "Ayo Chan is a model with a bright appearance and positive energy. He appeared on the catwalk during Taiwan Fashion Week, appeared on the pages of Vogue Magazine and Opium."
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
        "describe": "Yuri Manei is following her dream to become a well-known model. Despite of young age, he’s a self-confident and well-organized person. He has shot multiple fashion stories for industry-leading publications such as Elle Spain and L’officiel Thailand."
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
        "describe": "J.Molena is a model with a bright appearance and positive energy. She appeared on the catwalk during Italy Fashion Week, appeared on the pages of Vogue Magazine and Opium."
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
        "describe": "Taylor Nix is a young promising model with more than 5 years of experience in modeling. The boy boasts numerous shootings for international magazines."
    },

    {
        "name": "Helen Ast",
        "categories": "Development",
        "gender": "Female",
        "location": "Rusia",
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
        "describe": "Helen Ast is a young model with more than 5 years of experience in modeling. Helen Ast devotes her free time to yoga, her abilities help her in her work as a model, the girl starred for many brands of sportswear."
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
        "describe": "Brian Lawson is a model with a bright appearance and positive energy. He appeared on the catwalk during Canada Fashion Week, appeared on the pages of Vogue Magazine and Opium."
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
        "describe": "Lily Caki is a model with a bright appearance and positive energy. She appeared on the catwalk during Wachington DC Fashion Week, appeared on the pages of Vogue Magazine and Opium."
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
        "describe": "Albert Jankos is a model with a bright appearance and positive energy. He appeared on the catwalk during Newyork Fashion Week, appeared on the pages of Vogue Magazine and Opium."
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
        "describe": "Anna Vivchar is a model with a bright appearance and positive energy. She appeared on the catwalk during Wachington DC Fashion Week, appeared on the pages of Vogue Magazine and Opium."
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
        "describe": "Karsten Wine is a model with a bright appearance and positive energy. He appeared on the catwalk during Newyork Fashion Week, appeared on the pages of Vogue Magazine and Opium."
    }
]