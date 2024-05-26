let images = [                   // array für die images
    "./img/jp-1.jpg",
    "./img/jp-2.jpg",
    "./img/jp-3.jpg",
    "./img/jp-4.jpg",
    "./img/jp-5.jpg",
    "./img/jp-6.jpg",
    "./img/jp-7.jpg",
    "./img/jp-8.jpg",
    "./img/jp-9.jpg",
    "./img/jp-12.jpg",
    "./img/jp-13.jpg",
    "./img/jp-14.jpg",
    "./img/jp-15.jpg",
    "./img/jp-16.jpg",
    "./img/jp-17.jpg",
    "./img/jp-18.jpg",
    "./img/jp-19.jpg",
    "./img/jp-20.jpg"
];



function load() { // funktion für das rendern der imgContainer
    for (let i = 0; i < images.length; i++) {
        document.getElementById('imgContainer').innerHTML += ` 
        <img onclick="openImage('${i}')" class ="imgbox" src="${images[i]}">
    `;
    }

}

function openImage(i) {  // funktion um das ausgewählte Bild zu öffnen 
    let image = images[i]

    document.getElementById('imgContainer').innerHTML +=
        `
    <div class="open-image" id="opendImage">
     <div class="close-button">
       <img src="img/square-xmark-solid.svg" class="close-img-a" onclick="closeImage(${i})" href="">
      </div>
      
      <div class="img-container-opendImage">
       <img onclick="positionBack(${i - 1})" class="arrow" src="img/arrow-left-solid.svg" alt="">
       <img  class="opend-image"  src="${image}">
       <img onclick="positionNext(${i + 1})" class="arrow" src="img/arrow-right-solid.svg" alt="">
   

    </div>
   
</div> `;

    document.getElementById('opendImage').classList.remove('d-none');

}

function closeImage() {  // funktion um das Bild wieder zu schließen

    document.getElementById('opendImage').classList.add('d-none');
    document.getElementById('imgContainer').innerHTML = '';

    load();

}


function positionBack(i) {   // funktion um mit den arrows eine position zurück im array zu gehen 
    if (i == -1) {
        i = images.length - 1;
    }
    openImage(i)
}

function positionNext(i) {  // funktion um im array mit den arrows eine position for zu gehen 
    if (i == images.length) {
        i = 0;
    }
    openImage(i)

}