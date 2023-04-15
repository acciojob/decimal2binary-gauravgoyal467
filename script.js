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
	let output=0;
	for (let index = ans.length-1; index >=0; index--) {
		let num=ans[index]*Math.pow(10,index);
		output=output+num;
	}
  return output;
 }
let input=prompt("Enter a number");
alert(decimalToBinary(input));
module.exports = decimalToBinary;
