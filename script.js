let drawer = document.getElementById('drawer');
let notifyButton = document.getElementById('firstbutton')
let isOpen = false;
/*let closedProperties = function(){
    if (isOpen === false){
        
    };
}

let openProperties = function(){
    if (isOpen === true){
        
    };
}*/

let openDrawer = function() {
    if (isOpen === false){
    drawer.style.animation = 'slidein-left 2s'
    }
    isOpen = true;
};

let closeDrawer = function() {
    if (isOpen === true){
    drawer.style.animation = 'slideout-right 2s'
    }
    isOpen = false;
};

notifyButton.addEventListener('click', openDrawer);
