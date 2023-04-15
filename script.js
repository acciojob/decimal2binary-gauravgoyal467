function decimalToBinary(input) {
// write your code here
	let ans=[];
	while(input!=0){
		if(input%2==1){
			ans.push(1);
			input=input-1;	
		}else{
			ans.push(0);
		}
		input=input/2;
	}
	let output;
	for (let index = ans.length-1; index >=0; index--) {
		let num=ans[index]*1e(index);
		output=output+num;
	}
	
  return output;
 }
let input=prompt("Enter a number");
alert(decimalToBinary(input));
module.exports = decimalToBinary;
