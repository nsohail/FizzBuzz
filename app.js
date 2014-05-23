$(document).ready(function(){

	var userEntry=$('#fizzEntry').val();
	$('#data p').remove();

	var fizzGame=function(){
		if(userEntry > 5){
			alert("Enter a number from 1 to 100");
			//return false;
		}
		else{
			alert('yay');
			//evalFunction(userEntry);
		}

	for(i=1;i<=100;i++){

	if(i%3===0){
		$('#data').append("<p>fizz</p>");
	}else if(i%5===0){
		$('#data').append("<p>buzz</p>");
	}else if(i%3 && i%5 ===0){
		$('#data').append("<p>fizz buzz</p>");
	}
	else {
		$('#data').append('<p></p>'+i+'<p></p>');
	}

	}
};

$('.submit').click(function(){
	fizzGame();

});

});//end of document ready function

