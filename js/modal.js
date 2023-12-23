const blure = document.querySelector('.blure');
const line = document.querySelector('.modal__line'); 
const header = document.querySelector('.header');

let lastScrollPos = 0;
window.addEventListener('scroll', function() {
    let curScrollPos = document.documentElement.scrollTop;
    if (curScrollPos > lastScrollPos) {
        header.classList.add('header-out');
    } else {
        header.classList.remove('header-out');
    }
    lastScrollPos = curScrollPos;
})

function openModal(name) {
    const modal = document.getElementById(name);
    blure.style.display = 'block';
    setTimeout(() => {
        blure.style.opacity = '50%';
    }, 1);
    modal.classList.add('active'); 
    document.querySelector('html').style.overflowY = "hidden";
}

function openGreenModal() {
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(function (modal) {
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');  
        }
    })
    line.style.opacity = "1";
    openModal('modal-green');
    line.style.animationName = 'modal-line';
    const timer = setTimeout(() => {
        closeLine()
        closeModal('modal-green');
    }, 4900);
    blure.addEventListener('click', function() {
        closeLine()
        clearTimeout(timer);
    })
}

function closeLine() {
    setTimeout(() => {
        line.style.animationName = 'none';
        line.style.opacity = "0";
    }, 100);
    
}

function closeModal(name) {
    const modal = document.getElementById(name);
    modal.classList.remove('active');
    blure.style.opacity = '0';
    document.querySelector('html').style.overflowY = "scroll";
    setTimeout(() => {
        blure.style.display = 'none';
    }, 1000);
}

function closeBlure() {
    const allModals = document.querySelectorAll('.modal-elem');
    blure.style.opacity = '0';
    document.querySelector('html').style.overflowY = "scroll";
    setTimeout(() => {
        blure.style.display = 'none';
    }, 1000);
    allModals.forEach(function (modal) {
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');  
        }
    })
}






