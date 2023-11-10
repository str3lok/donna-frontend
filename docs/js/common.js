document.addEventListener("DOMContentLoaded", function(event) {
	openMenu();

 $(window).on('load scroll touchmove resize', function(){
	headerFixed ();
 });

 	// searchShow
 (function searchShow() {
	var btnSearch = document.querySelectorAll('.btnSearchJs');
	if (!btnSearch.length) return
	btnSearch.forEach(function (btn) {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			let target = e.currentTarget;
			let searchBlock = target.closest('.header__search');
			searchBlock.classList.add('is-active');
		});
	});	

	document.querySelector('html').addEventListener('click', function (event) {
	 if (!event.target.closest('.header__search')) {
		let searchOpen = document.querySelectorAll('.header__search.is-active');
		if(searchOpen.length >= 1) {
		 for(let searchBlockActive of searchOpen) {
			searchBlockActive.classList.remove('is-active');
		 }
		}    
	 }
	});
 })()//- searchShow


 function openMenu() {
	var btnTouch = document.querySelectorAll('.btnTouchJs');
	if (!btnTouch.length) return
	btnTouch.forEach(function (btn) {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			let target = e.currentTarget;
			let menu = document.querySelector('.menu__container');
			let menuContent = menu.querySelector('.nav__content-container');
			let htmlBlock = document.querySelector('html');
			let body = document.querySelector('body');
			
			// .menu__container.is-active
			// .nav__content-body.is-show
			if (!target.classList.contains('is-active')) {
				menu.style.display = "block";
				
				setTimeout(function(){
					htmlBlock.classList.add('htmlFix');
					body.classList.add('navFix');
					target.classList.add('is-active');
					menu.classList.add('is-active');
				}, 300);

				setTimeout(function(){
					menuContent.classList.add('is-show');
				}, 400);

			} else {
				menu.classList.remove('is-active');

				setTimeout(function(){
					target.classList.remove('is-active');
					menuContent.classList.remove('is-show');
					menu.style.display = "none";
					htmlBlock.classList.remove('htmlFix');
					body.classList.remove('navFix');					
				}, 300);

			}

		});
	});	
}
 

 
$(".js-to-anchor").on("click", function (e) {

	if (this.hash !== "") {
		e.preventDefault();
		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function () {
			window.location.hash = hash;
		});
	}

});

});//- DOMContentLoaded

function headerFixed() {
	var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	if (top > 1) {
		$('.header').addClass('is-fixed');
	}else{
		$('.header').removeClass('is-fixed');
	}
}
								
const callback = (entries) => {
		//Step 4
		// The entries variable will contain the list of
		// elements that you are observing. When ever 
		// intersection occurs, you need to do forEach loop 
		// to find which one intersected. 
		// For this we check a flag on the element called "isIntersecting"
		entries.forEach(
				(entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('is-animated')
								// console.log("The element is intersecting >");
								//If intersecting then attach keyframe animation.
								//We do this by assigning the data attribute 
								//we coded in the markup to the style.animation 
								//of the element
								// entry.target.style.animation = 
								// entry.target.dataset.animate;
						} 
						// else {
						// 		//We take of the animation if not in view
						// 		entry.target.style.animation="none";
						// }
				}
		);       
}
								
const callbackContainer = (entries) => {

		entries.forEach(
				(entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('is-loaded')
						} 
				}
		);       
}

//1] Create a new intersectionObserver object, 
//which will accept a callback function as 
//a parameter.

let observer = new IntersectionObserver(callback);
let observerContainer = new IntersectionObserver(callbackContainer);


//2]Select all elements that have ".animate" 
//class.In our case we have three 
//elements (.image,<p> and h<2>).

const animationItems = document.querySelectorAll('.animate');
const containerItems = document.querySelectorAll('.page-container');


	//3]Loop through selected elements and add to the
	//observer watch list.      

	animationItems.forEach(item => {
		observer.observe(item)         
})
containerItems.forEach(item => {
	observerContainer.observe(item)         
})




