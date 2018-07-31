console.log("Welcome to JS World");
var tab =1;
var runTime = "HTML"; //CONSOLE OR HTML

function displayCmd(v1, v2, result, opr)	{
	console.log( v1 +" " + opr +" "+ v2 +" = " + result );
}
function displayHTML(v1, v2, result, opr)	{
	document.getElementById("test").innerHTML += v1 +" " + opr +" "+ v2 +" = " + result +"<br/>";
}

var displayMode = null;
if( runTime === "CONSOLE"){ 
	displayMode = displayCmd;
} else if( runTime === "HTML") {
	displayMode = displayHTML;
}

function display(i, opr, oprFuntion, mode)	{
	for ( var j = 1 ; j <= 10 ; j++)	{
		displayMode( i, j, oprFuntion(i, j), opr);
	}
}



function add(v1, v2)	{
	return v1 + v2;
}
function sub(v1, v2)	{
	return v1 - v2;
}
function mul(v1, v2)	{
	return v1 * v2;
}
function div(v1, v2)	{
	return v1 / v2;
}
function modOpr(v1, v2)	{
	return v1 % v2;
}


var action = "+"
var operation = null;
function findOpr(_action) {
	action  = _action;
	console.log(_action)
	if( '+' === _action) {
		operation = add;
	} else if( '-' === _action)  {
		operation = sub;
	} else if( '*' === _action)  {
		operation = mul;
	} else if( '/' === _action)  {
		operation = div;
	} else if( '%' === _action)  {
		operation = modOpr;
	}
}
findOpr(action);
//display(tab, action, operation);