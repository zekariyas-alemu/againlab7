var counter = 0;
var indicator = document.querySelector('.carousel-indicators');
var slider_div = document.querySelector('.carousel-inner');

use_data();

async function get_data() {

    let response = await fetch('https://picsum.photos/v2/list');
    let data = await response.json();

    return data;

}
function use_data() {

    get_data().then(function(images) {

        let output = '';
        let slides = '';
        let url = '';

        images.forEach(function(img) {

            url = img.download_url;
            
            slides += `<li data-bs-target="#sildeShowContainer" data-bs-slide-to="${counter+=""}"></li>`
            

            if(counter == 0){

                output += `<div class="carousel-item active">
                <img class="d-block" src="${url}"width = 600px; height=400px;>
                </div>`
            }

            else{

                output += `<div class="carousel-item">
                <img class="d-block" src="${url}""width = 600px; height=400px;>
                </div>`
            }

            counter+=1;
           
 });
                
            indicator.innerHTML = slides;
            slider_div.innerHTML = output;
             
      })
        .catch(function(err) {
            console.log(err);
         
        });

}