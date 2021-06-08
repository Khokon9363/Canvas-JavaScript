document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

// ----------------------- Home page topics -----------------
const topics = [
    {
        url: 'Ball Movement/index.html',
        name: 'Ball Movement'
    },
    {
        url: 'Break Out Game/index.html',
        name: 'Break Out Game'
    }
]

const wrapper = document.querySelector('.lessons')
if(wrapper){
    var html = ''
    
        for (let i = 0; i < topics.length; i++) {
            html += '<li>' +
                        '<a href="'+ topics[i].url +'">'+ topics[i].name +'</a>' +
                    '</li>'
        }
    
    wrapper.innerHTML = html
}