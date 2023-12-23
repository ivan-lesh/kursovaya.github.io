let lists = document.querySelectorAll('.dropbtn');
lists.forEach((list) => {
  list.addEventListener('click', function() {
    if (list.classList.contains('active')) {
      list.classList.remove('active');
    } else {
      list.classList.add('active');
    }
  })
})