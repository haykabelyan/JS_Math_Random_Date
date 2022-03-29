

let a = Math.round(Math.random()*10);
console.log(a);




function random(min, max) {
	const diff = max - min + 1; 
	return Math.floor(Math.random()*diff)+ min;
}


function random2(min, max) {
	const diff = max - min; 
	return Math.round(Math.random()*diff)+ min;
}

