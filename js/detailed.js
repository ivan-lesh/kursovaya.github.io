let sched_start = document.querySelectorAll('.hero__schedule-start');
let sched_end = document.querySelectorAll('.hero__schedule-end');
let sched_all = document.querySelectorAll('.hero__schedule-item');

sched_start.forEach(elem => {
    elem.addEventListener('click', function() {
        const sched_el = elem.closest('.hero__schedule-item');
        let chooseEnd = sched_el.querySelector('.hero__schedule-end');
        sched_all.forEach(sched => {
            if (sched.classList.contains('active')) {
                sched.querySelector('.hero__schedule-end').style.opacity = '0';
                sched.classList.remove('active')
            }
        });
        setTimeout(function() {
            chooseEnd.style.opacity = '1';
        }, 1)
        sched_el.classList.add('active');
        
    })
})

sched_end.forEach(elem => {
    elem.addEventListener('click', function() {
        const sched_el = elem.closest('.hero__schedule-item');
        sched_el.querySelector('.hero__schedule-end').style.opacity = '0';
        sched_el.classList.remove('active');
    })
})