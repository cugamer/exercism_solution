function Song(lyrics){
	this.versesArray = lyrics;
}

Song.prototype.buildVerse = function(verseCount, leed){
	if(verseCount === this.versesArray.length - 1){
		return this.versesArray[this.versesArray.length - 1][0];
	}else if(leed === true && verseCount > 0){
		return this.versesArray[verseCount][0] + this.versesArray[verseCount][1] + this.buildVerse(verseCount - 1, false);
	}else if(verseCount > 0){
		return this.versesArray[verseCount][1] + this.buildVerse(verseCount - 1, false);
	}else if (verseCount === 0 && leed === true){
		return this.versesArray[verseCount][0] + this.versesArray[verseCount][1];
	}else{
		return this.versesArray[verseCount][1];
	};
}

Song.prototype.verse = function(versPos){
	return this.buildVerse(versPos - 1, true);
}

Song.prototype.verses = function(startVer, endVer){
	output = [];
  for(var i = startVer; i <= endVer; i++){
  	output.push(this.buildVerse(i - 1, true));
  }
  return output.join("\n") + "\n";
}

Song.prototype.sing = function(){
	return this.verses(1, this.versesArray.length);
}

spiffyLyrics = [["I know an old lady who swallowed a fly.\n", "I don't know why she swallowed the fly. Perhaps she'll die.\n"], 
		["I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n", "She swallowed the spider to catch the fly.\n"], 
		["I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\n", "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n"], 
		["I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\n", "She swallowed the cat to catch the bird.\n"], 
		["I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\n", "She swallowed the dog to catch the cat.\n"], 
		["I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\n", "She swallowed the goat to catch the dog.\n"], 
		["I know an old lady who swallowed a cow.\nI don't know how she swallowed a cow!\n", "She swallowed the cow to catch the goat.\n"], 
		["I know an old lady who swallowed a horse.\nShe's dead, of course!\n"]];

song = new Song(spiffyLyrics);

module.exports = song;