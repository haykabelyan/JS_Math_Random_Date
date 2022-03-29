// Math.random()
// talis e patahakan tiv 0-1 aranqum


for(let i=0; i<100000000; i++){
	let x = Math.random();
	if(x===0  || x===1 ) console.log('YES');
}
console.log('Finished');
