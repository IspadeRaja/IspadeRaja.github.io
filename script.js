let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');
let para_heading = document.getElementsByClassName('para-heading')[0];

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.01 + 'px';
    road.style.top = value * 0.5 + 'px';
    text.style.top = value * 1 + 'px';

    if (value > 600) {
        para_heading.style.background = '#ffffff';
        para_heading.style.color = "#0a2a43";
    } else {
        para_heading.style.background = '#0a2a43';
        para_heading.style.color = "#ffffff";
    }
});
