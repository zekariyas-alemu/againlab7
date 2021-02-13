// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const images_spin = document.getElementById('spinner')
postDiv3.style.display = 'none';
//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});


//load post from fake api functio 
function load_fromPlaceHolder() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res) {
        return res.json(); //return the JSON Promise
    })
    .then(function(posts) {
        //iterate over each post [100 posts]
        let output = '';
        posts.forEach(function(post) {
            output += `
    
            <div class="item">
            <div class="image">
                <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
            </div>
            <div class="content">
                <a class="header" href="#" id="bTitle">
                ${post.title.toUpperCase()}
                </a>
                <div class="description">
                    <p id="bDesc">
                    ${post.body}
                    </p>
                </div>
                <div class="extra">
                    <a class="ui floated basic violet button" href="#">Read Mores</a>
                </div>
            </div>
        </div>
    
    `;
        });
        postDiv3.innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });

}
//async await
async function load_fromPlaceHolder_new() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();

    return data;



}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
        //iterate over each post [100 posts]
        let output = '';
        posts.forEach(function(post) {
            output += `

    <div class="item">
    <div class="image">
        <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
    </div>
    <div class="content">
        <a class="header" href="#" id="bTitle">
        ${post.title.toUpperCase()}
        </a>
        <div class="description">
            <p id="bDesc">
            ${post.body}
            </p>
        </div>
        <div class="extra">
            <a class="ui floated basic violet button" href="#">Read Mores</a>
        </div>
    </div>
</div>

`;
        });
        postDiv3.innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
}

setTimeout(() => {
    images_spin.style.display = 'none';
    postDiv3.style.display = 'block';
}, 2000);