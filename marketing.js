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



// 1. Function to calculate and set the heights for sticky positioning
function getStackHeight() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav.main-nav');
    const headerH = header ? header.offsetHeight : 0;
    const navH = (window.innerWidth >= 768 && nav) ? nav.offsetHeight : 0;
    
    // Update the CSS variables so aside and scroll-margin-top use the real values
    document.documentElement.style.setProperty('--header-h', `${headerH}px`);
    document.documentElement.style.setProperty('--nav-h', `${navH}px`);
    
    return headerH + navH;
}

// Scroll spy: match each sidebar link to the element identified by its href.
const navLinks = [...document.querySelectorAll('aside a[href^="#"]')];

const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

const offsetLine = 25;

function updateActiveLink() {
    const target = getStackHeight() + offsetLine;
    let activeSection = null;

    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= target) {
            activeSection = section;
        }
    });

    navLinks.forEach(link => {
        const targetSection = document.querySelector(link.getAttribute('href'));
        const isActive = targetSection === activeSection;
        link.classList.toggle('active', isActive);
    });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
window.addEventListener('resize', () => {
    getStackHeight();
    updateActiveLink();
}, { passive: true });

window.addEventListener('load', () => {
    getStackHeight();
    updateActiveLink();
});

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

     if (!theTargetTwo.classList.contains('theTargetTwo')) {
        theTargetTwo.classList.add('theTargetTwo');
        icon.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
        switc = true;   // <-- the missing reset
    }
}

// Event Listeners
hamburgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Close menu when clicking on the dark overlay
overlay.addEventListener('click', closeMenu);


const mgt = document.querySelector('li a.theTarget');
const theTargetTwo = document.querySelector('ul.theTargetTwo');
const icon = document.querySelector('li a.theTarget span');

let switc = true;

mgt.addEventListener('click', (e) => {
    e.preventDefault();

    theTargetTwo.classList.toggle('theTargetTwo');

    
    if (switc) {
        icon.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        switc = false;
    }
    
     else {
        icon.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
        switc = true;
    }
})

