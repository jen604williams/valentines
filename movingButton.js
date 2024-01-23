const movingButton = document.getElementById('no');

movingButton.addEventListener('mouseover', () => {
    moveButtonRandomly();
});

function moveButtonRandomly(){
    const container = document.getElementById('noButton');
    const buttonWidth = movingButton.offsetWidth;
    const buttonHeight = movingButton.offsetHeight;

    const maxX = container.clientWidth - buttonWidth;
    const maxY = container.clientHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    movingButton.style.left = `${randomX}px`;
    movingButton.style.top = `${randomY}px`;
}

function handleYesClick(){
    alert("Jennavieve appreciates your particpation <3");
    window.location.href = 'success.html';
}