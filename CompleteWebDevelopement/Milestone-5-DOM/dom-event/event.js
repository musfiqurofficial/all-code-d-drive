const darkModeBtn = document.getElementById('darkMode');
darkModeBtn.style.backgroundColor = 'tomato';
darkModeBtn.style.color = 'white';
darkModeBtn.style.border = 'none';
darkModeBtn.style.fontSize = '18px';
darkModeBtn.style.fontWeight = '500';
darkModeBtn.style.padding = '15px 30px';
darkModeBtn.style.borderRadius = '8px';
function darkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}