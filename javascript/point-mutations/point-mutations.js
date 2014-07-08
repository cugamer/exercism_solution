DNA = function(inputDNA){
	this.dnaSequence = inputDNA
};

DNA.prototype.hammingDistance = function(testStrand){
	hammingCount = 0;
	longerStrand = this.dnaSequence.length <= testStrand.length ? this.dnaSequence.length: testStrand.length
	for(var i = 0; i < longerStrand; i++){
		if(this.dnaSequence[i] != testStrand[i]){
			hammingCount++;
		}
	}
	return hammingCount;
};

module.exports = DNA;
