$(document).ready(function(){
	$('.submit').click(function(){
		var userEntry=$('#fizzEntry').val();
		validateEntry(userEntry);
	});

});


var validateEntry=function(x){
	if(x>100 || x<0){
		alert("NO!");
	}
	else{
		$('#data p').remove();
		populateEntry(userEntry);
	}
};

var populateEntry=function(number){
	for(i=1;i<=number;i++){

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