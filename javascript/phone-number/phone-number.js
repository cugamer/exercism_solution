Phone = function(inputNum){
	this.inputNum = inputNum;
}

Phone.prototype.number = function(){
	workingNum = this.inputNum.replace(/[- ().]/g, "");
	if(parseInt(workingNum[0]) === 1 && workingNum.length === 11){
		workingNum = workingNum.slice(1, workingNum.length);
	}else if(workingNum[0] != 1 && workingNum.length >= 11 || workingNum.length < 10){
		return "0000000000";
	}
	return workingNum;
}

Phone.prototype.areaCode = function(){
	processedNum = this.number();
	if(processedNum.length === 10){
		return processedNum.slice(0 ,3);
	};
}

Phone.prototype.toString = function(){
	processedNum = this.number()
	return "(" + processedNum.slice(0, 3) + ") " + processedNum.slice(3, 6) + "-" + processedNum.slice(6, 10)
};

module.exports = Phone;