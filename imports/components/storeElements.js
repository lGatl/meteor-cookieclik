import StoreElement from './storeElement.js';

let elements=[];

let multi = new StoreElement('Multiplicateur',10,'main.png');
elements.push(multi);

let gm = new StoreElement('Grandmere',100,'/mamie.png');
elements.push(gm);

export default elements;

