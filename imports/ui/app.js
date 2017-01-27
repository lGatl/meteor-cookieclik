
import {Template} from 'meteor/templating';

Session.set('score', 0);
Session.set('compteur', 1);

kc=1

import './gauche/gauche.js';
import './milieu/milieu.js';
import './droite/droite.js';

import './app.html';

import   '/imports/ui/responsive.js'
/*==================KONAMI CODE============================*/
if (window.addEventListener) {
	var kkeys = [],
		konami = "38,38,40,40,37,39,37,39,66,65";
	window.addEventListener("keydown", function(e) {
		kkeys.push(e.keyCode);
		if (kkeys.toString().indexOf(konami) >= 0) {
			kkeys = [];/* important de vider la liste d'evenements pour avoir a refaire le code en entier)*/
			Session.set('score', (
					 Session.get('score')+ kc * 1000
				));

			kc = kc * 10;
		};
	}, true);
};
