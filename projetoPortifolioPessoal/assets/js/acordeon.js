const acordeonTrigger = document.querySelectorAll('.acordeon .trigger');

acordeonTrigger.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');

        if(isOpen) {
            acordeon.classList.remove('open');
            acordeon.querySelector('.content').style.display = 'none';      
        } else {
            acordeon.classList.add('open');
            acordeon.querySelector('.content').style.display = 'block';
        }
      
    });
});