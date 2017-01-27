
import  './gauche.html';





Template.gauche.events({
	'click #cookie' (e){
		let newScore=Session.get('score')+Session.get ('compteur');
		Session.set('score',newScore);
	}
});
/*-----------------------ANIMATION CLIQ--------------------*/
Template.gauche.events({
	'mousedown #cookie' (e){
		Session.set('anicliq',"enfonc");
	}
});
Template.gauche.events({
	'touchstart #cookie' (e){
		Session.set('anicliq',"enfonc");
	}
});

Template.gauche.events({
	'mouseup #cookie' (e){
		Session.set('anicliq',"");
	}
});
Template.gauche.events({
	'touchend #cookie' (e){
		Session.set('anicliq',"");
	}
});
/*-------------------------------------------------------*/



Template.gauche.helpers({
	anicliq: ()=>{return Session.get('anicliq')},
	score: ()=>{ return Math.round(Session.get('score'))
}})
