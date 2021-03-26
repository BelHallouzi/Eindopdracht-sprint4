const switchButton = document.querySelector('.button-switch');
if(switchButton) {
    switchButton.addEventListener('click', switchTheme);
}

function switchTheme(){
    const buttons = document.querySelectorAll('.body');
    const body = document.querySelector('.body');

    for(let i = 0; i < buttons.length; i++) {
        const changeButton = buttons[i];
        changeButton.classList.toggle('body_alter');
    }

    console.log("Knop werkt!")
}