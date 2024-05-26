let notices = [];
let titels = [];
let noticesTrash = [];
let titelsTrash = [];

load();


function render() { // function zum rendern 
  let content = document.getElementById('content');
  content.innerHTML = '';
  content.innerHTML += /*html*/ ` 
 <section id="my-notices" class="my-notice"></section>`;
  let myNotice = document.getElementById('my-notices');
  myNotice.innerHTML = '';
  for (let i = 0; i < notices.length; i++) {
    myNotice.innerHTML += /*html*/ `
      <div class="notice-container">
        <b class="font-title">${titels[i]}</b>
        <span>${notices[i]}</span> 
        <div class="button-container">
          <a class="delete-button" onclick="deleteNotice(${i})" href="">X</a> 
        </div>
      </div>
    `;

  }
  document.getElementById('input-notice').value = '';
  document.getElementById('input-titel').value = '';
}


function rendertrash() { // function zum rendern 
   let content = document.getElementById('content');
   content.innerHTML = '';
   content.innerHTML += /*html*/ ` 
   <section id="my-notices" class="my-notice"></section>`;
   let myNotice = document.getElementById('my-notices');
   myNotice.innerHTML = '';

   
  for (let i = 0; i < noticesTrash.length; i++) {
    
     myNotice.innerHTML += /*html*/ `
    <div id="notice-container"  class="notice-container">
      <b class="font-title">${titelsTrash[i]}</b>
      <span>${noticesTrash[i]}</span> 
      <div class="button-container">
       <a class="delete-button" onclick="deleteTrash(${i})" href="">X</a>
      </div>
      <div class="restore-button-container">
       <button class="restore-button"   onclick="restoreNotice(${i})">wiederherstellen</button>
      </div> 
    </div>
   `;   
  }
 

}

 
    
  

  
  

  




function addNotice() {  // function um Notizen hinzuzufügen
  let notice = document.getElementById('input-notice').value;
  let titel = document.getElementById('input-titel').value;
  console.log(notice);
  notice = notice.replace(/\n/g, '<br>\n');

  if (notice, titel == '') {

    alert("Bitte notiz und titel eingeben");

  } else {
    notices.push(notice);
    
    titels.push(titel);
    
  }

  render()
  save();

}


function deleteNotice(i) {  // funtion um notizen und Tittel zu löschen
  let notice = notices [i];
  let titel = titels[i];
  
  noticesTrash.push(notice);
  titelsTrash.push(titel);

  titels.splice(i, 1);
  notices.splice(i, 1);

  render()
  save();

}


function deleteTrash(i) {   // funtion um notizen und Tittel zu löschen
  titelsTrash.splice(i, 1);
  noticesTrash.splice(i, 1);
  rendertrash();
  save();

}

function restoreNotice(i) {
  let noticestrash = noticesTrash [i];
  let titelstrash = titelsTrash [i];  
  notices.push(noticestrash);
  titels.push(titelstrash);
  titelsTrash.splice(i, 1);
  noticesTrash.splice(i, 1);
  rendertrash();
  save();

}


function save() { // funktion um  die eingebenen notizen in localstorage zu speichern
  let noticesastext = JSON.stringify(notices);
  localStorage.setItem('notices', noticesastext);
  let titelsastext = JSON.stringify(titels);
  localStorage.setItem('titels', titelsastext);
  let noticesTrashastext = JSON.stringify(noticesTrash);
  localStorage.setItem('noticesTrash', noticesTrashastext);
  let titelsTrashastext = JSON.stringify(titelsTrash);
  localStorage.setItem('titelsTrash', titelsTrashastext);


}


function load() { // funktion um die daten aus dem local storage wieder auszugeben aus dem local storage
  let noticesastext = localStorage.getItem('notices');
  let titelsastext = localStorage.getItem('titels');
  let noticesTrashastext = localStorage.getItem('noticesTrash');
  let titelsTrashastext = localStorage.getItem('titelsTrash');

  if (titelsastext && noticesastext, noticesTrashastext && titelsTrashastext) {

    titels = JSON.parse(titelsastext);
    notices = JSON.parse(noticesastext);
    titelsTrash = JSON.parse(titelsTrashastext);
    noticesTrash = JSON.parse(noticesTrashastext);
  }


}


