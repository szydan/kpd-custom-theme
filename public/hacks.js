import 'plugins/kpd_custom_theme/css/style.less';
import favicon from './images/logo.png';

// Source partially from: https://stackoverflow.com/a/35960429/1843511
const changeFavicon = link => {
	let $favicon = document.querySelector("link[rel*='icon']");
	// If one or multiple favicon elements already exists,
	// change the href of each element to the given link.
	if ($favicon !== null) {
		$("link[rel*='icon']").each(function(){
			$(this).attr('href', link);
		});
		// Otherwise, create a new element and append it to <head>.
	} else {
		$favicon = document.createElement("link");
		$favicon.rel = "icon";
		$favicon.href = link;
		document.head.appendChild($favicon);
	}
}

changeFavicon(favicon);