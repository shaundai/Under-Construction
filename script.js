let drawer = document.getElementById('drawer');
let notifyButton = document.getElementById('firstbutton');
let page = document.getElementById('page');
let goAway = document.getElementById('goaway');
let progressBar = document.getElementById('progress');
let isOpen = false;

let openDrawer = function() {
    if (isOpen === false){
    drawer.style.animation = 'slidein-left 1s'
    };
    isOpen = true;
    drawer.style.transform = 'translateX(0)';
    page.style.display = "block";
};

let closeDrawer = function() {
    if (isOpen === true){
    drawer.style.animation = 'slideout-right 1.5s'
    };
    isOpen = false;
    drawer.style.transform = 'translateX(130%)';
    page.style.display = "none";
};

notifyButton.addEventListener('click', openDrawer);
goAway.addEventListener('click', closeDrawer);

