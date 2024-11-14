function firstNonRepeatedChar(str) {
 // Write your code here

	for(let i = 0; i < str.length - 1; i++)
	{
		let flag = false;
		for(let j = i + 1; j < str.length; j++)
			{
				if(str.chartAt(i) == str.charAt(j))
				{
					flag = true;	
				}
			}

		if(flag == false)
		{
			return str.charAt(i)
		}
	}

	return null
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
