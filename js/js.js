$("body").on("touchmove",function(event){
    event.preventDefault;
}, false);


var h = $(document).height();
// console.log(h)
$('.footer').height(h);
if ((/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent))) {
    $('.videos').html('<video poster="img/banner.jpg" id="video" src="video/2.mp4" width="640" preload="auto" webkit-playsinline="true" x-webkit-airplay="true"  playsinline="true"  x5-video-player-type="h5" x5-video-player-fullscreen="true"  x5-video-orientation="portraint" style="object-fit:fill;"></video>');
    $('.body,html').css({
        background: 'url("img/banner.jpg") #E5E8ED no-repeat'
    })
}else if (/(Android)/i.test(navigator.userAgent)) {
    $('.videos').html('<video id="video" src="video/3.mp4" width="640" preload="auto" webkit-playsinline="true" x-webkit-airplay="true"  playsinline="true"  x5-video-player-type="h5" x5-video-player-fullscreen="true"  x5-video-orientation="portraint" style="object-fit:fill;"></video>');
    $('.body,html').css({
        background: '#E5E8ED',
    });
    $('.footer').css({
        'background-size' : '100% auto'
    })
}

var i = 0;
var t = 15;
var video = document.getElementById('video');
var banner = document.getElementById('banner');
var vide = document.getElementById('vide');

video.controls = false;

var time = setInterval(function () {
    i++;
    $('.load span').html(i + '%');
    if(0<i) {
        $('.cur3').show();
        $('.zg3').css({
            'z-index' : 2
        });
        $('.zg3').animate({
            top : '-178'
        },t * 25)
    }
    if (25 < i) {
        $('.cur4').show();
        $('.zg4').css({
            'z-index' : 1
        });
        $('.cur3').hide();
        $('.zg4').animate({
            left: '228'
        },t * 25)
    }
    if (50 < i) {
        $('.cur1').show();
        $('.zg1').css({
            'z-index' : 2
        });
        $('.cur4').hide();
        $('.zg1').animate({
            top: '108'
        },t * 25)
    }
    if (75 < i) {
        $('.cur2').show();
        $('.zg2').css({
            'z-index' : 2
        });
        $('.cur1').hide();
        $('.zg2').animate({
            right: '233'
        },t * 25)
    }
    if (i > 99) {
        $('.cur2').hide();
        clearInterval(time)
    }


    if (i == 100) {
        var show = $('.banner').css('display');
        if (show == 'block') {
            $('.banner img').animate({
                opacity: '1'
            },2000);
        }
        setInterval(function () {
            $('.loading').fadeOut();
        },300)
    }
},15);

function videos() {
    $('.videos').show();
    $('.banner').fadeOut();
    $('.footer').hide();
    video.play();


    video.addEventListener('ended', function () {
        // $('.videos').fadeOut();
        $('.footer').show();
    })
}

banner.addEventListener('touchstart',function () {
    videos();
});

vide.addEventListener('touchstart',function () {
    videos();
});