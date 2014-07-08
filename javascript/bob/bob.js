function Bob(){};

// Bob.prototype.hey = function(words){
// 	if(words.match(/^[ ]*$/)){
// 		return 'Fine. Be that way!'
// 	}else if(words.match(/^[^a-z]*[ÖÄÜäöü]*[^a-z]*$/)){
// 		if(words.match(/^[^a-zA-Z]*\?$/)){
// 			return 'Sure.'
// 		}else if(words.match(/^[A-Z ]*$/)){
// 			return 'Woah, chill out!'
// 		}
// 		else if(words.match(/^[0-9 ]*$/) || words.match(/^.*[^!?]$/)){
// 			return 'Whatever.'
// 		}else{
// 			return 'Woah, chill out!'
// 		}
// 	}else if(words.match(/^[^a-z]*\?$/)){
// 		return "Woah, chill out!"
// 	}else if(words.match(/\?$/)){
// 		return 'Sure.'
// 	}else{
// 		return 'Whatever.'
// 	}
// }


Bob.prototype.hey = function(words){
	if(words.match(/^[ ]*$/)){
		return 'Fine. Be that way!'
	}else if(words.match(/[A-Z ]*[0-9a-z]+[A-Z ]*\?$/)){
		return 'Sure.'
	}else if(words.match(/^[0-9, A-ZäöüÖÄÜ]*$/) && words.match(/[a-zäöüÖÄÜ0-9]/)){
		return 'Whatever.'
	}else if(words.match(/^[^a-z]*[ÖÄÜ]*[^a-z]*$/)){
		return 'Woah, chill out!'
	}else{
		return 'Whatever.'
	}
}

module.exports = Bob;