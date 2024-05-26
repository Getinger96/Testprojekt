let names = ['Erica Mustermann', 'John Doe'];
let phonenumbers = ['015712345678', '015798765432'];
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`;
    content.innerHTML += `
    <div>
      <input placeholder ="Name" id= "name">
      <input placeholder = "Telefon" id ="phone">
      <button onclick="addcontact()">Hinzufügen</button>
    </div>
      `;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phonenumber = phonenumbers[i];

        content.innerHTML += `
         <div class="card">
           <b> Name: </b> ${name} <br>
           <b>Telefon: </b> ${phonenumber} <br>
           <button onclick="deletecontact(${i})">Löschen</button>
         </div>
          `;


    }
}

function addcontact() {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    
    names.push(name.value);
    phonenumbers.push(phone.value);

    render()
    saver();
}

function deletecontact(i) {
    names.splice(i, 1);
    phonenumbers.splice(i, 1);

    render();
    saver();
} 

function saver() {
    let namesastext = JSON.stringify(names);
    localStorage.setItem('names', namesastext);
    let phonesastext = JSON.stringify(phonenumbers);
    localStorage.setItem('phonenumbers', phonesastext);
}

function load() {
    let namesastext = localStorage.getItem('names');
    let phonenumbersastext = localStorage.getItem('phonenumbers');
    if (namesastext && phonenumbersastext) {

        names = JSON.parse(namesastext);
        phonenumbers = JSON.parse(phonenumbersastext); 
    


    }

   

}
