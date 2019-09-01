
mercately = {
	box:{ 
		classList:'',
		init: function (className) {
			self.classList =  Array.from(document.querySelectorAll('.box-actions .btn'));
			console.log(self.classList);
			self.classList.map(function(element) {
				console.log(element);
				element.addEventListener('click', function (e) {
					document.querySelector(className).style.visibility = 'hidden';
				})
			})
		}
	},
	menu: {
		init: function (className) {
			let classList = Array.from(document.getElementsByClassName('hamburger'));
			console.log(classList);
			classList.map(function(element) {
				console.log(element);
				element.addEventListener('click', function (e) {

					document.getElementsByClassName(className)[0].classList.toggle('active')
				})
			})
			console.log('Configurando menu');
		}
	}
}


window.onload = function () {
	mercately.menu.init('menu')	
	mercately.box.init('.box')	
}