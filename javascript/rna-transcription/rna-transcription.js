toRna = function(dnaStrand){
	transKey = {"G" : "C", "C": "G", "T": "A", "A": "U"  }
	rnaStrand = [];
	for(var i = 0; i < dnaStrand.length; i++){
		rnaStrand.push(transKey[dnaStrand[i]]);
	}
	return rnaStrand.join("")
}

module.exports = toRna;