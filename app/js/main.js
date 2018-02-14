var lottie = require('lottie-web');
var animationData = require('./../img/data.json')


console.log(JSON.parse(animationData))


var Main = function( options ) {
	this.element = document.getElementById('main');


	lottie.loadAnimation({
		container: this.element,
		renderer: 'html',
		loop: true,
		autoplay: true,
		animationData: JSON.parse(animationData)
	});


	this.resize();
	this.step();
}

Main.prototype.resize = function( e ) {
	
}

Main.prototype.step = function( time ) {
	window.requestAnimationFrame( this.step.bind( this ) );

	
};

var root = new Main();