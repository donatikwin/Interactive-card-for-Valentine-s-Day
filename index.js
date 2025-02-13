const envelope = document.querySelector('.envelope-wrapper');
let isAnimating = false;

envelope.addEventListener('click', () => {
    if (isAnimating) return;
    
    envelope.classList.add('flap');
    isAnimating = true;

    setTimeout(() => {
        isAnimating = false;
        envelope.style.pointerEvents = 'none';

        const button = document.createElement('a');
        button.classList.add('next');
        button.textContent = 'Нажми сюда';

        document.querySelector('.letter .text').appendChild(button);

        setTimeout(() => {
            button.classList.add('fade-in');
        }, 100);

        button.addEventListener('click', () => {
            window.location.href = 'new.html';
        });
    }, 1700); 
});

