/* const hamburger = document.querySelector('i');
const dropdownMenu = document.querySelector('.dropdown-menu');

hamburger.addEventListener('click', (e) => {
    dropdownMenu.style.display = 'block';
    hamburger.style.display = 'none';
})

const closeIcon = document.querySelector('.dropdown-menu .fa-xmark');

closeIcon.addEventListener('click', (e) => {
    dropdownMenu.style.display = 'none';
    hamburger.style.display = 'block';
})
    */

const hamburgerBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-menu');
const mobileDrawer = document.querySelector('.mobile-menu-drawer');
const overlay = document.querySelector('.menu-overlay');

// Function to open the menu
function openMenu() {
    mobileDrawer.classList.add('open');
    overlay.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    // Prevent scrolling on the body when menu is open
    document.body.style.overflow = 'hidden'; 
}

// Function to close the menu
function closeMenu() {
    mobileDrawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    // Restore scrolling
    document.body.style.overflow = ''; 
}

// Event Listeners
hamburgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Close menu when clicking on the dark overlay
overlay.addEventListener('click', closeMenu);

const dropdown = document.querySelector('ul li.dropdown');
const dropDiv = document.querySelector('div.drop');

let hideTimeout;

dropdown.addEventListener('mouseover', () => {
    clearTimeout(hideTimeout); // cancel any pending hide
    const dropdownPos = dropdown.getBoundingClientRect();
    dropDiv.style.display = 'block';
    dropDiv.style.left = dropdownPos.left + 'px';
    dropDiv.style.top = dropdownPos.bottom + 'px';
});

dropdown.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        dropDiv.style.display = 'none';
    }, 100); // small delay gives cursor time to reach dropDiv
});

dropDiv.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // cursor arrived — cancel the hide
});

dropDiv.addEventListener('mouseleave', () => {
    dropDiv.style.display = 'none'; // cursor left dropDiv entirely — now hide
});