///////////////////////////////////////////////////////

$(window).resize(function(){location.reload();});

///////////////////////////////////////////////////////

var vw = $(window).width();

var numParticles = 50;

// mobile view
if (vw < 427) {
	numParticles = 20;
}

// tablet view
else if (vw < 1024 && vw > 426) {
	numParticles = 35;
}

///////////////////////////////////////////////////////

function bind (id, run) {
	var effect = run();
}

///////////////////////////////////////////////////////

bind ('#particles', function() {

	return new Particleground.particle( '#particles', {

		// Number of particles
		num: numParticles,

		// Max size
		maxR: 4,

		// Min Size
		minR: 1,

		// Distance between particles
		proximity: 6,

		// line width
		lineWidth: .3,

		// 'spider' or 'cube'
		lineShape: 'spider',

		// lines (0 == no line)
		// range: 2,

		// Max animation speed
		maxSpeed: 0.5,
	});
});

///////////////////////////////////////////////////////

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

///////////////////////////////////////////////////////

$("#home-link").on("click", function() {
	window.scrollTo(0, 0);
});

$("#about-link").on("click", function() {
	window.scrollTo(0, 742);
});

$("#skills-link").on("click", function() {
	window.scrollTo(0, 1651);
});

$("#work-link").on("click", function() {
	window.scrollTo(0, 801);
});

$("#contact-link").on("click", function() {
	window.scrollTo(0, 801);
});

///////////////////////////////////////////////////////

$(function() {
	$(window).scroll(function() {
		if (window.pageYOffset>741) {
			$("#wtf").css("display", "flex");
		}
		else {
			$("#wtf").css("display", "none");
		}
	});
});

///////////////////////////////////////////////////////

const particlesJSON = {
	"particles": {
		"number": {
			"value": numParticles,
			"density": {
				"enable": true,
                "value_area": 700 // Gets Denser when the number reduces
            }
        },
        "color": { //The color for every node, not the connecting lines.
            "value": "#00a613" // use an array of colors like ["#9b0000", "#001378", "#0b521f"]
        },

        "shape": {
            "type": "edge", //Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
            "stroke": { //The border
            	"width": 0,
            	"color": "000000"
            },
            "polygon": { //if the shape is a polygon
            	"nb_sides": 6
            },
            "image": { //If the shape is an image
            	"src": "#",
            	"width": 100,
            	"height": 100
            }
        },
        "opacity": {  
        	"value": 0.5,
        	"random": true
        },
        "size": {
        	"value": 7,
        	"random": true
        },
        "line_linked": {
        	"enable": false,
            "distance": 150, //The radius before a line is added, the lower the number the more lines.
            "color": "#008f11",
            "opacity": 1,
            "width": 1
        },
        "move": {
        	"enable": true,
        	"speed": 9,
            "direction": "bottom", //Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
            "random": true,  //Whether one will move faster than the other.
            "straight": true, //Whether they'll shift left and right while moving.
            "out_mode": "out", //What it'll do when it reaches the end of the canvas, either "out" or "bounce".
            "bounce": false, 
            "attract": { //Make them start to clump together while moving.
            	"enable": false,
            	"rotateX": 600,
            	"rotateY": 1200
            }
        }
    },

  //Negate the default interactivity
  "interactivity": {
  	"detect_on": "canvas",
  	"events": {
  		"onhover": {
  			"enable": true,
  			"mode": ["bubble"]
  		},
  		"onclick": {
  			"enable": false,
  			"mode": "repulse"
  		},
  		"resize": true
  	},
  	"modes": {
  		"grab": {
  			"distance": 200,
  			"line_linked": {
  				"opacity": "1"
  			}
  		},
  		"bubble": {
  			"distance": 300,
  			"size": 9,
  			"duration": 2,
  			"opacity": 0.8,
  			"speed": 3
  		},
  		"repulse": {
  			"distance": 400,
  			"duration": 0.4
  		},
  		"push": {
  			"particles_nb": 4
  		},
  		"remove": {
  			"particles_nb": 5
  		}
  	}
  },
  "retina_detect": false
};

particlesJS("particles-js", particlesJSON);
// particlesJS("particles-js2", particlesJSON);