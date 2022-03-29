

function random(min, max) {
	const diff = max - min + 1; 
	return Math.floor(Math.random()*diff)+ min;
}

let numbers = [];
for(let i=0; i<5; i++){
	numbers.push( random(100, 200) );
}

let max = numbers[0];
for(let i=1; i<numbers.length; i++){
	if(numbers[i] > max) max = numbers[i];
}
console.log('max = '+ max);
