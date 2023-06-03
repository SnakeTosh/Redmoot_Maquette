
document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#countries');

    fetch("https://restcountries.com/v3.1/all").then(res => {
        return res.json();
    }).then(data => {
            let output = "";
        data.forEach(country => {
            output += `<option>${country.name.common}</option>`;  
        });

        selectDrop.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })
});

function initMap() {
    const myLatLng = { lat: 43.486645, lng: -1.464242 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 15,
        disableDefaultUI: true,
        draggable: false,
        // scaleControl: false,
        // scrollwheel: false,
        // mapTypeControl: false,
        navigationControl: false,
        streetViewControl: false,
        mapTypeId : google.maps.MapTypeId.ROADMAP,   
        
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });

    var newStyle = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#0c0b0b"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#090909"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#d4e4eb"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#fef7f7"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9b7f7f"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#fef7f7"
                }
            ]
        }
    ]
        
    map.setOptions({ styles: newStyle })

}

tippy('#idname', {
    content: "Fill with your name",
    trigger: 'focus'
  });

tippy('#idmail', {
    content: "Fill with your Email",
    trigger: 'focus'
});

tippy('#zonetexte', {
    content: "Fill with your message",
    trigger: 'focus'
});

const menuHamburger = document.getElementById("menu")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
