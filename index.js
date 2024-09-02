const dropdownBtn = document.getElementById('button1');
const dropdownList = document.getElementById('dropdown-list');

dropdownBtn.addEventListener('click', () => {
    if (dropdownList.style.display === 'block') {
        dropdownList.style.display = 'none';
    } else {
        dropdownList.style.display = 'block';
    }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn')) {
        if (dropdownList.style.display === 'block') {
            dropdownList.style.display = 'none';
        }
    }
});