$(document).ready(function(){


	

	var fizzGame=function(){

	$('#data p').remove();
	var userEntry=$('#fizzEntry').val();
		if(userEntry > 100){
			alert("Enter a number from 1 to 100");
			return false;
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

	userEntry=('');
};//end function fizzGame

$('.submit').click(function(){
	fizzGame();
});

});//end document ready