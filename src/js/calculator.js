var preVal;
function c(val)
{
	if(val == "Infinity" || val == "-Infinity") {
		alert("Not defined. Please try again");
		document.getElementById("d").value='';
	} else {
		document.getElementById("d").value=val;
	}
	preVal = val;
	$("#d").focus();
}
function v(val)
{
	if(isNaN(val)) {
		if(isOperator(val) && isOperator(preVal)) {
			$("#d").focus();
			return false;
		} else if(isOperator(val)) {
			document.getElementById("d").value+=val;
		}
		else {
			$("#d").focus();
			return false;
		}		
	} else 	
		document.getElementById("d").value+=val;
	preVal = val;
	$("#d").focus();
}
function e() 
{ 
try 
{
  	c(eval(document.getElementById("d").value))
  	$("#d").focus();
} 
catch(e) 
{
	alert("Error, please try again");
  	c('') 
} 
} 

function isOperator(val) {
	if(val == '+' || val == '-' || val == "/" || val == "*" || val == ".") 
		return true;
	else return false;
}