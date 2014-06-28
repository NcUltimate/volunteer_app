$(document).ready(function(){
          //$('#filterview').slideToggle(300);
          console.log("page ready");
          $( '#save' ).click(clicked);
	});

function clicked(){
	console.log("Save pressed");
	var selected = [];
	$("input:checkbox[name=filters]:checked").each( function(){
		selected.push( this.id );
	});
	return selected;
}