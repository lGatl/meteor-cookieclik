/*--------------------------------------------------------------*/
/*DEMANDER A TONY COMMENT RAFRAICHIR LE PRIX*/
/*-------------------------------------------------------------*/
import  './droite.html';

import elements from '/imports/components/storeElements.js'


Template.droite.helpers({
	storeElements: elements

});


Template.element.helpers({
	isDisabled: (price)=>{
		if(Session.get('score')<price){
			return 'disabled'
		}
	},

	isVisible: (price)=>{
		if(Session.get('score')<price/10){
			return 'invisible'
		}
	}

})

	Template.droite.events({
	'click .bout' (e){
		if (Session.get('score')>=this.price){
			Session.set('score',Session.get('score')-this.price);
			this.price=this.price*2
			Session.set ('compteur',Session.get ('compteur')*2)
		}

	}

});



