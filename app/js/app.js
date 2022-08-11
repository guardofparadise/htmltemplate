// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {


	document.querySelector('.table_preview_data').addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.toggle('rotate_arrow');
		document.querySelector('.table_info').classList.toggle('showcase_info');
		document.querySelector('.inspections_list').classList.toggle('showcase_info');
	})


	document.querySelectorAll('.modal-toggle').forEach((item,idx) => {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.modal').classList.toggle("is-visible");
		})
	})


	function menuOnClick() {
		document.getElementById("menu-bar").classList.toggle("change");
		document.getElementById("nav").classList.toggle("change");
		document.getElementById("menu-bg").classList.toggle("change-bg");
	}

	document.getElementById("menu-bar").addEventListener('click', menuOnClick)

	// Change option selected
	const label = document.querySelector('.dropdown__filter-selected')
	const options = Array.from(document.querySelectorAll('.dropdown__select-option'))

	options.forEach((option) => {
		option.addEventListener('click', () => {
			label.textContent = option.textContent
		})
	})

	// Close dropdown onclick outside
	document.addEventListener('click', (e) => {
		const toggle = document.querySelector('.dropdown__switch')
		const element = e.target

		if (element == toggle) return;

		const isDropdownChild = element.closest('.dropdown__filter')		
		
		if (!isDropdownChild) {
			toggle.checked = false
		}
	})

})

