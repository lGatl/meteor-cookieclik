

	var redim = function() {
		cookie=document.getElementById("cookie");
		var largeur = window.innerWidth;
		var hauteur = window.innerHeight;

		if (largeur < 500) {
			if ((hauteur - 130) > (largeur / 2)) {
				cookie.style.lineHeight = largeur / 2 + "px";
				cookie.style.marginLeft=0+"px";
				cookie.style.width  = 100+"%";
			} else {
				cookie.style.lineHeight = hauteur - 130 + "px";
				cookie.style.width  = hauteur - 130 + "px";
					var marg=((largeur / 2)-(hauteur - 130))/2;
				cookie.style.marginLeft=marg+"px";

			}
		} else {
			if ((hauteur - 130) > (largeur / 3)) {
				cookie.style.lineHeight = largeur / 3 + "px";
				cookie.style.marginLeft=0+"px";
				cookie.style.width  = 100+"%";
			} else {
				cookie.style.lineHeight = hauteur - 130 + "px";
				cookie.style.width  = hauteur - 130 + "px";
				var marg=((largeur / 3)-(hauteur - 130))/2;
				cookie.style.marginLeft=marg+"px";
			}
		}
	}
		document.addEventListener('DOMContentLoaded', () => {
			redim()
		window.onresize = redim;
	})







