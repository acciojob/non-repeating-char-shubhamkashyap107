function firstNonRepeatedChar(str) {

	if(!str)
	{
		return null
	}


	
let freqObj = {}


for(let i = 0; i < str.length; i++)
{
    if(!freqObj[str.charAt(i)])
    {
        freqObj[str.charAt(i)] = 1
    }
    else
    {
        freqObj[str.charAt(i)] = freqObj[str.charAt(i)] + 1
    }
}


	
for(let item in freqObj)
{
    if(freqObj[item] == 1)
    {
		return item
    }
}
return null
	
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
