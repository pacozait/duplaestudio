/////////////// CHANGE DIV COLOR RANDOM

var random = Math.floor(Math.random() * $('.color-blend').length);
$('.color-blend').hide().eq(random).show();

///////////////START SCROLL MAGIC AND GREEN SOCK

var controller =new ScrollMagic.Controller();

//Header Scene
var tlHeader = new TimelineMax ();

tlHeader
.to('#headerSect', 1, { opacity:0})

var SceneHeader = new ScrollMagic.Scene({
	triggerElement: '#HeaderTrigger',
	triggerHook:.7,
	duration:"60%"
})

.setTween(tlHeader)
//.addIndicators()
.addTo(controller);

//Photo Scene
var tlPhoto = new TimelineMax ();

tlPhoto
.from('.photoScale', 1, { opacity:0})

var ScenePhoto = new ScrollMagic.Scene({
	triggerElement: '.triggerPhoto',
	triggerHook:.3,
	duration:"70%"
})

.setTween(tlPhoto)
//.addIndicators()
.addTo(controller);

//Photo TEXT
var tlPhotoText = new TimelineMax ();

tlPhotoText
.to('.photoText', 2, { y:-50 , opacity:1 , ease:Power1.easeOut})

var ScenePhotoText = new ScrollMagic.Scene({
	triggerElement: '.photoText',
	triggerHook:.85,
	duration:"30%"
})

.setTween(tlPhotoText)
//.addIndicators()
.addTo(controller);


var tlwords = new TimelineMax ();

tlwords

.to('.words1', 1, { color:'#000', opacity: 1 , duration: 3})
.to('.words1 span', 1, { color:'#000', fontWeight: 700, duration: 2})
.to('.words1', 1, { color:'#999' , duration: 3}, "=1") //AQUI CAMBIAR EL COLOR EN CADA WORD# A FFF PARA QUE DESAPAREZCA
.to('.words1 span', 1, { color:'#999', duration: 2})
.to('.words2', 1, { color:'#000', opacity: 1 , duration: 3})
.to('.words2 span', 1, { color:'#000', fontWeight: 700, duration: 2})
.to('.words2', 1, { color:'#999' , duration: 3}, "=1")
.to('.words2 span', 1, { color:'#999', duration: 2})
.to('.words3', 1, { color:'#000', opacity: 1 , duration: 3})
.to('.words3 span', 1, { color:'#000', fontWeight: 700, duration: 2})
.to('.words3', 1, { color:'#999' , duration: 3}, "=1")
.to('.words3 span', 1, { color:'#999', duration: 2})
.to('.words4', 1, { color:'#000', opacity: 1 , duration: 3})
.to('.words4 span', 1, { color:'#000', fontWeight: 700, duration: 2})
.to('.words4', 1, { color:'#999' , duration: 3}, "=1")
.to('.words4 span', 1, { color:'#999', duration: 2})
.to('.words5', 1, { color:'#000', opacity: 1 , duration: 3})
.to('.words5 span', 1, { color:'#000', fontWeight: 700, duration: 2})
.to('.words5', 1, { color:'#999' , duration: 3}, "=1")
.to('.words5 span', 1, { color:'#999', duration: 2})

//past code .to('.words2', 1, { x:10 , opacity:1 , duration: 3})
//past code .to('.words2 span', 1, { fontWeight: 700, duration: 2})
//past code .to('.words2', 1, { opacity:.1 , duration: 3}, "=1")


//Scene Words

var SceneWords = new ScrollMagic.Scene({
	triggerElement: '.wordTrigger',
	triggerHook:.15,
	duration:"170%"
})

.setTween(tlwords)
.setPin('.wordTrigger')
//.addIndicators()
.addTo(controller);



// SCENE ABOUT video 1
var tlAbout = new TimelineMax ();

tlAbout

.from('.textAboutH', 1, { y:240, duration: 2})
.to('.scroll-downAbout', 1, { y:20, opacity: 0, duration: 2}, "-=1")
.from('.textAbout1', 1, { y:20 , opacity: 0 , duration: 2}, "-=0.5")
.from('.textAbout1B', 1, { opacity: 0 , duration: 2})
.from('.textAbout2A', 1, { opacity: 0 , duration: 2})
.from('.textAbout2B', 1, { opacity: 0 , duration: 2})
.from('.w1', 1, { opacity: 0 , duration: 1})
.from('.w2', 1, { opacity: 0 , duration: 1}, "-=0.5")
.from('.w3', 1, { opacity: 0 , duration: 0}, "-=0.5")


var SceneAboutV1 = new ScrollMagic.Scene({
	triggerElement: '#VideoAbout1',
	triggerHook:0,
	duration:"260%"
})

.setTween(tlAbout)
.setPin('#VideoAbout1')
//.addIndicators()
.addTo(controller);
