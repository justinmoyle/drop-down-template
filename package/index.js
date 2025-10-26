function displayDropDownMenu() {
    document.getElementById('my-dropdown').classList.add('visible');
}

function hideDropDownMenu() {
    document.getElementById('my-dropdown').classList.remove('visible');
}

const dropDownBtn = document.querySelector('.dropdown-menu-btn');

window.addEventListener('click', (e) => {
    if (e.target === dropDownBtn) {
        displayDropDownMenu();
    } else {
        hideDropDownMenu()
    }
});