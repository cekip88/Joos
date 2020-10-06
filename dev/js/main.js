let burgerBtn = document.querySelector('.head-burger'),
    head = document.querySelector('.head');
burgerBtn.addEventListener('click',function (e) {
   e.preventDefault();
   head.classList.toggle('head-active')
});