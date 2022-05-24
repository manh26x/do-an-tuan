$(document).ready(() => {
   const alphabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let renderAlphabetFilter = '<span id="filterAll" onclick="filterLetter(null,0,10)" class="filterSelected">ALL</span>';
   alphabetArr.split("").forEach(letter => renderAlphabetFilter += '<span id="filter'+letter+'" onclick="filterLetter(\''+letter+'\',0,10)">'+letter+'</span>')
   $('.letter-filter-box').html(renderAlphabetFilter);
   filterLetter(null, 0, 10)
});

const filterLetter = (letter, page, size) => {
   $('.letter-filter-box > span').removeClass('filterSelected');
   if(letter === null) {
      $('#filterAll').addClass('filterSelected');
   } else {
      $('#filter'+letter).addClass('filterSelected');
   }
   $('.list-contact').html(contactsJSON
       .filter(contact => contact.name[0] === letter || letter === null)
       .slice(page * size, (page+1)*size)
       .map(contact => {
          let contactItemSocial = contact.social.split("").map(social =>  "<span class=\"letter-social\">"+social+"</span>").join("");
          return '<div class="contact-item border-bottom">\n' +
              '                <span class="contact-item-index">['+contact.id+']</span>\n' +
              '                <span class="contact-item-name">'+contact.name+'</span>\n' +
              '                <span class="contact-item-position">'+contact.position+'</span>\n' +
              '                <span class="contact-item-social">\n' +
                contactItemSocial+
              '                </span>\n' +
              '            </div>'
       }).join(""));
}

const contactsJSON = [
   {
      "id": "01",
      "name": "Giap Manh Tuan",
      "position": "CEO / Director",
      "social" : "MOP"
   },
   {
      "id": "02",
      "name": "Nguyen Huu Luong",
      "position": "CEO / Director",
      "social" : "MOP"
   }

]
