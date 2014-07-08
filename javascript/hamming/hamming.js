module.exports = compute;

function compute(firstStrand, secondStrand){
	if(firstStrand === secondStrand){
		return 0;
	}else{
		hammingCount = 0;
		firstArr = firstStrand.split("")
		secondArr = secondStrand.split("")
		longerArr = firstArr.length <= secondArr.length ? firstArr.length : secondArr.length
		for(var i = 0; i < longerArr; i++){
			if(firstArr[i] != secondArr[i]){
				hammingCount++;
			}
		}
		return hammingCount;
	}
};

console.log(compute('AAAG', 'AAA'))