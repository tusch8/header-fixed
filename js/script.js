const header = document.querySelector("[data-header]");
const kv = document.querySelector("[data-header-hide]");
const headerHeight = header.clientHeight;
const kvHeight = kv.clientHeight;

const FIXED_CLASS = "is-fixed";
const SHOW_CLASS = "is-show";
const HIDE_CLASS = "is-hide";

let startPos = 0;
let scrollTop;

window.addEventListener("scroll", function () {
	scrollTop = window.scrollY;

	// 下にスクロールしたとき
	if (scrollTop > startPos) {
		header.classList.remove(SHOW_CLASS);

		// ヘッダーの高さよりスクロールしたとき
		if (scrollTop > headerHeight) {
			header.classList.add(FIXED_CLASS);

			// ヘッダーより上
		} else {
			header.classList.remove(FIXED_CLASS);
		}

		// キービジュアルより上だったら
		if (scrollTop < kvHeight) {
			header.classList.remove(HIDE_CLASS);
		}

		// キービジュアルより下だったら
		else {
			header.classList.add(HIDE_CLASS);
		}

		// 上にスクロールしたとき
	} else {
		// ヘッダーの高さよりスクロールしたとき
		if (scrollTop > headerHeight) {
			header.classList.add(FIXED_CLASS);

			// キービジュアルより上だったら
			if (scrollTop < kvHeight) {
				header.classList.remove(SHOW_CLASS);
				header.classList.add(HIDE_CLASS);
			}

			// キービジュアルより下だったら
			else {
				header.classList.remove(HIDE_CLASS);
				header.classList.add(SHOW_CLASS);
			}

			// ヘッダーより上
		} else {
			header.classList.remove(FIXED_CLASS, SHOW_CLASS, HIDE_CLASS);
		}
	}

	startPos = scrollTop;
});
