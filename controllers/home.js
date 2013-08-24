window.onload = function() {
    var chaptersSwiper = new Swiper('.chapters-swiper-container',{
        //Your options here:
        mode:'horizontal',
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        calculateHeight: true
    //etc..
    });
    var moreSwiper = new Swiper('.more-swiper-container',{
        //Your options here:
        mode:'horizontal',
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        calculateHeight: true
    //etc..
    });

}

function toggleTab(id){
    var curr = document.getElementById(id);
    if(curr.className.indexOf('show') > -1){
        curr.className = curr.className.replace('show' ,'hidden');
        return;
    }
    
    
    var play = document.getElementById('play');
    var chapters = document.getElementById('chapters');
    var features = document.getElementById('features');
    var more = document.getElementById('more');
    
    
    play.className = play.className.replace('show' ,'hidden');
    chapters.className = chapters.className.replace('show' ,'hidden');
    features.className = features.className.replace('show' ,'hidden');
    more.className = more.className.replace('show' ,'hidden');
    
    curr.className = curr.className.replace('hidden' ,'show');
}


