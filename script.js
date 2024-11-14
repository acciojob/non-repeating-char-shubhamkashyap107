function firstNonRepeatedChar(str) {

	if(!str)
        {
            return null
        }

       let count = {}


       for(let i = 0; i < str.length; i++)
       {
        let char = str.charAt(i)
        // console.log(char)
        if(!count[char])
        {
            count[char] = 1
        }
        else
        {
            count[char] = count[char] + 1
        }
       }

       for(let item in count)
       {
        if(count[item] == 1)
        {
            return item
        }
       }


       return null
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
