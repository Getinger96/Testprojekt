
let posts = [

    {
        'icon': 'img/autor-getinger.jpg',
        'author': 'Erich_Getinger',
        'image': 'img/jp-3.jpg',
        'description': 'Der Frühling beginnt',
        'location': 'Japan,Tokyo',
        'isliked': true,
        'likes': 67,
        'comment': []

    },
    {
        'icon': 'img/sissi.jpg',
        'author': 'Sissi_blond',
        'image': 'img/pic-2.jpg',
        'description': 'Der Frühling beginnt',
        'location': 'Deutschland, Berlin',
        'isliked': true,
        'likes': 50,
        'comment': []
    },
    {
        'icon': 'img/jeffreybrrok.jpg',
        'author': 'Brrokolii_jfy',
        'image': 'img/pic-3.jpg',
        'description': 'Der Frühling beginnt',
        'location': 'USA, Florida',
        'isliked': true,
        'likes': 54,
        'comment': []


    },
    {
        'icon': 'img/Memekinator.jpg',
        'author': 'Meme_kinator',
        'image': 'img/pic-5.jpg',
        'description': 'Der Frühling beginnt',
        'location': '',
        'isliked': true,
        'likes': 20,
        'comment': []

    },
    {
        'icon': 'img/sharuismael.jpg',
        'author': 'Sharu_Ismael',
        'image': 'img/pic-4.jpg',
        'description': 'nothing',
        'location': 'Indien',
        'isliked': true,
        'likes': 25,
        'comment': []
    },

];

if(localStorage.getItem('posts')){
    load()
}else{
    show()
}

function show() {
 
    let postContainer = document.getElementById('postcontainer');
    postContainer.innerHTML = '';
    for (let indexPost = 0; indexPost < posts.length; indexPost++) {
        const post = posts[indexPost];

        

        document.getElementById('postcontainer').innerHTML += `
        <div  class="post">
         
        <div class="post-header">
          <div class="post-author">
           <img class="profileImg" src= ${post['icon']}> 
          </div>
          <div class="post-location">
           <div>${post['author']}</div>
           <div class="font-grey">${post['location']}</div>
          </div>
         </div> 
          <img class="postImg" src="${post['image']}">
         <div id="postIcon${indexPost}" class="post-icons">
            <img  onclick="addLike(${indexPost})" class="post-heart-img" src="img/heart-solid.svg">
            <span>Gefällt ${post['likes']} Mal</span>
         </div>
       
                   
          <div class="description-section">
          <b>${post['author']}</b> :

            ${post['description']}
          </div>
         <div id="comment${indexPost}" class="comment-section" >

         </div>
         <div id class="add-comment-section">
         <textarea id="input${indexPost}" class="textarea-comment" placeholder="Kommentieren"></textarea><a onclick="addComment(${indexPost})" class="comment-post" href="">posten</a>
         </div>
                
        </div>
        `;

        let postComment = document.getElementById(`comment${indexPost}`);
        for (let indexComment = 0; indexComment < post['comment'].length; indexComment++) {
            const comment = post['comment'][indexComment];
            postComment.innerHTML += `<div>${comment} <button onclick="deleteComment(${indexPost},${indexComment})">x</button> </div> `;
        }

        if (  posts[indexPost]['isliked']) {
            let heart = document.getElementById(`postIcon${indexPost}`);
            heart.innerHTML = '';
            heart.innerHTML += `<img  onclick="removeLike(${indexPost})" class="post-heart-img" src="img/heart-red +.svg">
           <span>Gefällt ${posts[indexPost]['likes']} Mal</span>`;
        }else
        {  let heart = document.getElementById(`postIcon${indexPost}`);
            heart.innerHTML = '';
            heart.innerHTML += `<img  onclick="addLike(${indexPost})" class="post-heart-img" src="img/heart-solid.svg">
       <span>Gefällt ${posts[indexPost]['likes']} Mal</span>`;
        }

    }
    document.getElementById('postcontainer').innerHTML +=` <div class="bg-section">
    <div class="bg-option-container">
        <div class="options">
            <div class="profile-container">
                <div>
                    <img class="profileImg" src="img/autor-getinger.jpg" alt="">

                </div>
                <div class="profile">
                    <div>Erich_Getinger</div>
                    <div class="font-grey">Erich Getinger</div>
                </div>
                <div><a class="link" href="#">Wechseln</a></div>
            </div>
            <div class="option-container">
                <span class="font-grey"> <b>Vorschläge für dich</b> </span>
                <a class="link-black" href="#">Alle ansehen</a>
            </div>
            <div class="profile-container-options">
                <div>
                    <img class="profileImg" src="img/jojofun.jpg" alt="">

                </div>
                <div class="profile-options">
                    <div>jojo_fun</div>
                    <div class="font-grey">Follows you</div>
                </div>
                <div><a class="link" href="#">Abonieren</a></div>
            </div>
            <div class="profile-container-options">
                <div>
                    <img class="profileImg" src="img/zickzack.jpg" alt="">

                </div>
                <div class="profile-options">
                    <div>zick_zack</div>
                    <div class="font-grey">Follows you</div>
                </div>
                <div><a class="link" href="#">Abonieren</a></div>
            </div>
            <div class="profile-container-options">
                <div>
                    <img class="profileImg" src="img/sippi.png" alt="">

                </div>
                <div class="profile-options">
                    <div>sippi</div>
                    <div class="font-grey">Vorschläge für dich</div>
                </div>
                <div><a class="link" href="#">Abonieren</a></div>
            </div>
            <div class="profile-container-options">
                <div>
                    <img class="profileImg" src="img/kukui.jpg" alt="">

                </div>
                <div class="profile-options">
                    <div>kukui</div>
                    <div class="font-grey">Vorschläge für dich</div>
                </div>
                <div><a class="link" href="#">Abonieren</a></div>
            </div>
        </div>


    </div>

 </div>       
 `;

}




function addLike(i) {
    posts[i]['likes']++;
    posts[i]['isliked']= true;

    let heart = document.getElementById(`postIcon${i}`);
    heart.innerHTML = '';
    heart.innerHTML += `<img  onclick="removeLike(${i})" class="post-heart-img" src="img/heart-red +.svg">
   <span>Gefällt ${posts[i]['likes']} Mal</span>`;
    
    save();
    
}

function removeLike(i) {
    posts[i]['likes']--;
    posts[i]['isliked']= false;
    let heart = document.getElementById(`postIcon${i}`);
    heart.innerHTML = '';
    heart.innerHTML += `<img  onclick="addLike(${i})" class="post-heart-img" src="img/heart-solid.svg">
   <span>Gefällt ${posts[i]['likes']} Mal</span>`;
   
    save();

}

function addComment(i) {
    let comment = document.getElementById(`input${i}`).value;
    if(comment ==''){
        alert('bitte Kommentar eingeben ')

    }else{
        posts[i]['comment'].push(comment);

    }

    save();
}


function deleteComment(indexPost,indexComment) {
  posts[indexPost]['comment'].splice(indexComment,1);
    
    
      save();
      show();
}

function save() {
    let postsastext = JSON.stringify(posts);
    localStorage.setItem('posts', postsastext);
}


function load() {
    let postsastext = localStorage.getItem('posts');
    posts = JSON.parse(postsastext);
}

