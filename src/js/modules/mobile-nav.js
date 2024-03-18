/**
 * Function to handle mobile navigation functionality.
 * This function toggles the mobile navigation menu and updates the navigation button icon accordingly.
 * It also toggles the body scroll when the mobile navigation menu is open.
 * @function mobileNav
 */
function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;