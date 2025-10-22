// Gorilla/Grey theme particles
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": { "enable": true, "value_area": 700 }
      },
      "color": { "value": ["#fdf", "#fdf", "#fdf"] },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#fdf" },
        "polygon": { "nb_sides": 6 }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": { "enable": false }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": { "enable": false }
      },
      "line_linked": {
        "enable": false,
        "distance": 140,
        "color": "#757575",
        "opacity": 0.5,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": { "enable": false }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "bubble" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 200,
          "size": 10,
          "duration": 2,
          "opacity": 0.8,
          "speed": 2
        },
        "push": { "particles_nb": 3 },
        "remove": { "particles_nb": 2 }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": true,
      "background_color": "#000",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);