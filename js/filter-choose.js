let items = document.querySelectorAll('.hero__schedule-date-item')
items.forEach(item => {
    item.addEventListener('click', function(){
        items.forEach(elem => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active');
            }
        })
        item.classList.add('active');
    })
})