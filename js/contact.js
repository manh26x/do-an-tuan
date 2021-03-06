$(document).ready(() => {
   const alphabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let renderAlphabetFilter = '<span id="filterAll" onclick="filterLetter(null,0,10)" class="filterSelected">ALL</span>';
   alphabetArr.split("").forEach(letter => renderAlphabetFilter += '<span id="filter'+letter+'" onclick="filterLetter(\''+letter+'\',0,10)">'+letter+'</span>')
   $('.letter-filter-box').html(renderAlphabetFilter);
   filterLetter(null, 0, 10)
});

const filterLetter = (letter, page, size) => {
   debugger
   $('.letter-filter-box > span').removeClass('filterSelected');
   if(letter === 'novalue') {
      letter =  localStorage.getItem('letter');
      if(letter === 'null') letter = null;
   }
   if(letter === null) {
      $('#filterAll').addClass('filterSelected');
   } else {
      $('#filter'+letter).addClass('filterSelected');
   }
   localStorage.setItem('letter', letter);
   let result = contactsJSON
       .filter(contact => contact.name[0] === letter || letter === null)

       .map(contact => {
          let contactItemSocial = contact.social ?  contact.social.split("").map(social =>  "<span class=\"letter-social\">"+social+"</span>").join("") : '<span></span>';
          return '<div class="contact-item border-bottom" style="cursor: pointer" onclick="gotoMemberDetail()">\n' +
              '                <span class="contact-item-index">['+contact.id+']</span>\n' +
              '                <span class="contact-item-name">'+contact.name+'</span>\n' +
              '                <span class="contact-item-position">'+contact.position+'</span>\n' +
              '                <span class="contact-item-social">\n' +
              contactItemSocial+
              '                </span>\n' +
              '            </div>'
       });
   let pagination = '';
   let sizePage = parseInt(result.length/size +'') + (result.length %size > 0 ? 1 : 0);
   console.log(sizePage)
   for(let i= 1; i <= sizePage; i++) {
      pagination += ' <a  style="cursor: pointer" onclick="filterLetter(\'novalue\',' +(i-1)+',10)"><h1 id="number'+i+'">'+i+'</h1></a>';
   }

   setTimeout(() => {
      $('#number'+(page +1)).css('color', '#C4C4C4');
      if(page=== 0) {
         $('#previous').css('color', '#C4C4C4');
      } else {
         $('#previous').css('color', 'var(--text-dark)');
      }
      if(page === (sizePage-1)) {
         $('#next').css('color', '#C4C4C4');
      } else {
         $('#next').css('color', 'var(--text-dark)');
      }

   },100)
   result = result  .slice(page * size, (page+1)*size)
   $('.pagination .number').html(pagination);
   $('.list-contact').html(result.join(""));
}

const contactsJSON = [
   {
      "id": "01",
      "name": "Alakov",
      "position": "CEO / Director",
      "social": "MOP",
      "img" : "img/Alakov"
   },
   {
      "id": "02",
      "name": "Alicia",
      "position": "CEO / Director",
      "social": "MOP",
      "img" : "img/Alicia"
   },
   {
      "id": "03",
      "name": "Barbara",
      "position": "Marketing Leader",
      "social": "MOP",
      "img" : "img/Barbara"
   },
   {
      "id": "04",
      "name": "Bella",
      "position": "Marketing Leader",
      "social": "MOP",
      "img" : "img/Bella"
   },
   {
      "id": "05",
      "name": "Ben",
      "position": "Photographer",
      "social": "MOP",
      "img" : "img/Ben"
   },
   {
      "id": "06",
      "name": "Chinel",
      "position": "Content writer",
      "social": "MOP",
      "img" : "img/Chinel"
   },
   {
      "id": "07",
      "name": "Coco",
      "position": "Fashion Stylist",
      "social": "MOP",
      "img" : "img/Coco"
   },
   {
      "id": "08",
      "name": "Daisy",
      "position": "Art Direction",
      "social": "MOP",
      "img" : "img/Daisy"
   },
   {
      "id": "09",
      "name": "Edward",
      "position": "Fashion Stylist",
      "social": "MOP",
      "img" : "img/Edward"
   },
   {
      "id": "10",
      "name": "Emark",
      "position": "Content Writer",
      "social": "MOP",
      "img" : "img/Emark"
   },
   {
      "id": "11",
      "name": "Ethan",
      "position": "Fashion stylist",
      "social": "MOP",
      "img" : "img/Ethan"
   },
   {
      "id": "12",
      "name": "George",
      "position": "Model Manager",
      "social": "MOP",
      "img" : "img/George"
   },
   {
      "id": "13",
      "name": "Ginger",
      "position": "Model Manager",
      "social": "MOP",
      "img" : "img/Ginger"
   },
   {
      "id": "14",
      "name": "Hanna",
      "position": "Model Manager",
      "social": "MOP",
      "img" : "img/Hanna"
   },
   {
      "id": "15",
      "name": "Horda",
      "position": "Model Manager",
      "social": "MOP",
      "img" : "img/Horda"
   },
   {
      "id": "16",
      "name": "Ibra",
      "position": "Customer Care",
      "social": "MOP",
      "img" : "img/Ibra"
   },
   {
      "id": "17",
      "name": "Imposter",
      "position": "Customer Care",
      "social": "MOP",
      "img" : "img/Imposter"
   },
   {
      "id": "18",
      "name": "James",
      "position": "Model Manager",
      "social": "MOP",
      "img" : "img/James"
   },
   {
      "id": "19",
      "name": "Jane",
      "position": "Fashion Design",
      "social": "MOP",
      "img" : "img/Jane"
   },
   {
      "id": "20",
      "name": "Jimmy",
      "position": "Model Manager",
      "social": "MOP",
      "img" : "img/Jimmy"
   },
   {
      "id": "21",
      "name": "Kim",
      "position": "Fashion Stylist",
      "social": "MOP",
      "img" : "img/Kim"
   },
   {
      "id": "22",
      "name": "Koala",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Koala"
   },
   {
      "id": "22",
      "name": "Koala",
      "position": "Makeup Artist",
      "img" : "img/Koala",
      "social": ""
   },
   {
      "id": "23",
      "name": "Leon",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Leon"
   },
   {
      "id": "24",
      "name": "Loki",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Loki"
   },
   {
      "id": "25",
      "name": "Louis",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Louis"
   },
   {
      "id": "26",
      "name": "Malp",
      "position": "Accountant",
      "social": "",
      "img" : "img/Malp"
   },
   {
      "id": "27",
      "name": "Maria",
      "position": "Accountant",
      "img" : "img/Maria"
   },
   {
      "id": "28",
      "name": "Nane",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Nane"
   },
   {
      "id": "29",
      "name": "Nick",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Nick"
   },
   {
      "id": "30",
      "name": "Olayla",
      "position": "Art Direction",
      "social": "",
      "img" : "img/Olayla"
   },
   {
      "id": "31",
      "name": "Oscar",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Oscar"
   },
   {
      "id": "32",
      "name": "Paul",
      "position": "CEO/Director",
      "social": "",
      "img" : "img/Paul"
   },
   {
      "id": "33",
      "name": "Picas",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Picas"
   },
   {
      "id": "34",
      "name": "Qi",
      "position": "Makeup Artist",
      "img" : "img/Qi"
   },
   {
      "id": "35",
      "name": "Renata",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Renata"
   },
   {
      "id": "36",
      "name": "Risky",
      "position": "Creator",
      "social": "",

      "img" : "img/Risky"
   },
   {
      "id": "37",
      "name": "Roger",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Roger"
   },
   {
      "id": "38",
      "name": "Savan",
      "position": "Leader",
      "social": "",
      "img" : "img/Savan"
   },
   {
      "id": "39",
      "name": "Sawn",
      "position": "Makeup Artist",
      "social": "",
      "img" : "img/Sawn"
   },
   {
      "id": "40",
      "name": "Ted",
      "position": "Photographer",
      "social": "",
      "img" : "img/Ted"
   },
   {
      "id": "41",
      "name": "Thorn",
      "position": "Developer",
      "social": "",
      "img" : "img/Thorn"
   },
   {
      "id": "42",
      "name": "UkuLe",
      "position": "Photographer",
      "social": "",
      "img" : "img/UkuLe"
   },
   {
      "id": "43",
      "name": "Vault San",
      "position": "Developer",
      "social": "",
      "img" : "img/Vault San"
   },
   {
      "id": "44",
      "name": "Wick",
      "position": "Developer",
      "social": "",
      "img" : "img/Wick"
   },
   {
      "id": "45",
      "name": "Yasin",
      "position": "Tester",
      "social": "",
      "img" : "img/Yasin"
   },
   {
      "id": "46",
      "name": "Yedda",
      "position": "Developer",
      "social": "",
      "img" : "img/Yedda"
   },
   {
      "id": "47",
      "name": "Zlatan",
      "position": "Developer",
      "social": "",
      "img" : "img/Zlatan"
   }

]
