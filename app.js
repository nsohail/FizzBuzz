
$(document).ready(function(){

$('.fizzEntry').click(function(){
var input=prompt('Please enter a number from 0 to 100');
	if(inputNumber(input)){
		addNumber(input);
	}

});

});//document ends here


function inputNumber(input){
	if(input > 100 || input <= 0 || isNaN(input) || input===""){
		alert('Enter a number from 1 to 100');
		return false;
	}
	return true;
}


function addNumber(limit){
	$('#data p').remove();
	for(var i=1;i<=limit;i++){

		classStyle=[];

	if(i%3 && i%5 ===0){
			value="fizz buzz";
			classStyle.push("fizz_buzz");
		}
		else if(i%5===0){
			value="buzz";
			classStyle.push("buzz");
		}
		else if(i%3===0){
			value="fizz";
			classStyle.push("fizz");
		}
		else {
			value=i;
			classStyle.push("plain");
		}

		$('#data').append(
			$('<p>'),
			{class:classStyle.join(" ")}).text(value);

}

}






/*
		if(i%3 && i%5 ===0){
			$('#data').append("<p>fizz buzz</p>").addClass('.fizz_buzz');
		}else if(i%5===0){
			$('#data').append("<p>buzz</p>");
		}else if(i%3===0){
			$('#data').append("<p>fizz</p>");
		}
		else {
			$('#data').append('<p>'+i+'</p>');
		}
	
	}
}

*/
