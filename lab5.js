

function random(min, max) {
	const diff = max - min + 1; 
	return Math.floor(Math.random()*diff)+ min;
}

const numbers = [];
for(let i=0; i<5; i++){
	numbers.push( random(-1, 1) );
}

console.log(numbers);