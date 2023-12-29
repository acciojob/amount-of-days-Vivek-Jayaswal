//your JS code here. If required.

let year = prompt( );

if(year%4 === 0)
{
	if(year%100 === 0){
		if(year%400 === 0)
		{
			alert("366");
		}
		else{
			alert("365");
		}
	}
}
else
{
	alert("365");
}




