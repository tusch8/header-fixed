
const header = document.querySelector('.js-header');
const kv = document.querySelector('.js-kv');
const headerHeight = header.clientHeight;
const kvHeight = kv.clientHeight;
let startPos = 0;
let scrollTop;

	window.addEventListener('scroll', function () {
		scrollTop = window.scrollY;

		if (scrollTop > headerHeight) {
			header.classList.add('is-hide');
		} else {
			header.classList.remove('is-hide');
		}

		// 下にスクロールしたとき
		if (scrollTop > startPos) {
			header.classList.remove('is-show');
		}
		// 上にスクロールしたとき
		else {
			if (scrollTop < kvHeight) {
				header.classList.remove('is-show');
			} else {
				header.classList.add('is-show');
			}
		}
		startPos = scrollTop;
	});
