/*$("h1 span").on('click',function(){
	$('input').fadeToggle("slow", "linear");
});*/

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});

 $("ul").on('click', "span" ,function(e){
 	$(this).parent().fadeOut("slow", function(){
 		$(this).remove();
 	});
 	e.stopPropagation();
 });

$("ul").on('click',"li",function(){
 	$(this).toggleClass("completed");
 });
$("input[type = 'text']").on('keypress',function( Enter ){
	if( Enter.which === 13 ) {
		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>")
  }
});

