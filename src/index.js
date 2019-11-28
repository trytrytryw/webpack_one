import './assets/css/style.css';
import './assets/css/reset.css';
// test git

import html2canvas from 'html2canvas';

// 截屏
function screenShots() {
	console.log(window);

	document.querySelector('.screenshots').addEventListener('click', function () {
		html2canvas(document.getElementById('app')).then(function(canvas) {
				// document.getElementById('app').appendChild(canvas);
				document.querySelector('#back').setAttribute('class', '');
				document.querySelector('#screen_img').setAttribute('class', '');
				document.querySelector('#screen_img').setAttribute('src', canvas.toDataURL());
		});
	});

	document.querySelector('#back').addEventListener('click', function () {
		document.querySelector('#back').setAttribute('class', 'hide');
		document.querySelector('#screen_img').setAttribute('class', 'hide');
	})
}

screenShots();

