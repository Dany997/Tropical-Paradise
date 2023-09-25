const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll(`.nav_item`);
const navBtnBars = document.querySelector('.burger-btn_bars');
const allSection = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer_year');

const handleNav = () => {
	nav.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimations();
};

const handleNavItemsAnimations = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSection.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

navBtn.addEventListener('click', handleNav);
window.addEventListener(`scroll`, handleObserver);
