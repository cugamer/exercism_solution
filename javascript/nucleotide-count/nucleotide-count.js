DNA = function(sequence){
	this.nucleotideCounts = { A : 0, C : 0, G : 0, T : 0 };
	this.getNucleotideCount = function(){
		for(var i = 0; i < sequence.length; i++){
			this.nucleotideCounts[sequence[i]]++;
		}
	};
	this.getNucleotideCount();
}

DNA.prototype.count = function(nucleotide){
	if(nucleotide in this.nucleotideCounts){
		return this.nucleotideCounts[nucleotide];
	}else if(nucleotide === "U"){
		return 0;
	}else{
		throw "Invalid Nucleotide";
	};
}

module.exports = DNA;