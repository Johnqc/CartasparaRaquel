var bgImageArray = ["bg1.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg1.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg1.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg4.jpg", "bg6.jpg", "bg3.jpg", "bg5.jpg", "bg1.jpg", "bg6.jpg", "bg3.jpg", "bg1.jpg", "bg4.jpg", "bg5.jpg", "bg1.jpg", "bg6.jpg", "bg4.jpg", "bg3.jpg", "bg1.jpg", "bg6.jpg", "bg4.jpg", "bg6.jpg", "bg3.jpg", "bg1.jpg", "bg6.jpg", "bg3.jpg"],
base = "./media/",
secs = 5;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();