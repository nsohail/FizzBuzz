
$(document).ready(function(){



	var fizzGame=function(){


	$('#data p').remove();
	var userEntry=$('#fizzEntry').val();
	

		if(userEntry > 100 || userEntry <= 0 || isNaN(userEntry) || userEntry===""){
			alert("Enter a number from 1 to 100");
			return false;
	}
		else{
			for(i=1;i<=userEntry;i++){

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

	}
	

	$('#fizzEntry').val('');
};//end function fizzGame

$('.submit').click(function(){
	fizzGame();
});

});//end document ready