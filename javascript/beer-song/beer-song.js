function Beer(){};

Beer.verse = function(count){
	newCount = count - 1;
	newCount > 1 ? newS = "s" : newS = "";
	count != 1 ? oldS = "s" : oldS = "";
	if(newCount === 0){
		return count + " bottle of beer on the wall, " + count + " bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
	}else if(count === 0){
		return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
	}else{
		return count + " bottle" + oldS + " of beer on the wall, " + count + " bottle" + oldS + " of beer.\nTake one down and pass it around, " + newCount + " bottle" + newS + " of beer on the wall.\n";
	};
}

Beer.sing = function(startCount, endCount){
	song = [];
	if(endCount === undefined){endCount = 0};
	for(var i = startCount; i >= endCount; i--){
		song.push(Beer.verse(i));
	}
	return song.join("\n");
}

module.exports = Beer;