$(document).ready(function(){
	//SHOW HIDE FIELDSET "YOUR COLLEAGUE SUBSCRIPTION"
	$('#otherMember').click(function(){
		//CHECKED -> SHOW (SLIDE)
		if ($('#otherMember').is(':checked')){
			$('.subscription2').slideDown();
			//$('.subscription2').show();
		}
		//UNCHECKED -> HIDE
		else{
			$('.subscription2').slideUp();
			//$('.subscription2').hide();
			$('.required2, .subscription2 div').removeClass('error');
		}
	});
	
	//SHOW FIELDSET "YOUR COLLEAGUE SUBSCRIPTION" IF CHECKBOX CHECKED
	if($('#otherMember').prop('checked')){
		$('.subscription2').show();
	}
});

//FUNCTION TO CHECK IF IT IS AN E-MAIL ADDRESS
function validateEmail($email){
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test($email)){
		return false;
	}
	else{
		return true;
	}
}

function checkForm(){ 
  //CHECK ALL FIELDS WITH CLASS="REQUIRED"
  $('.required').each(function(){
	  //FIELD EMPTY -> ADD CLASS="ERROR"
	  if($(this).val()==''){
		  $(this).addClass('error');
	  }
	  //FIELD FILLED -> REMOVE CLASS="ERROR"
	  else{
		  $(this).removeClass('error');
	  }
  });
  
  //CHECKBOXES NOT CHECKED -> ADD CLASS="ERROR" TO PREVIOUS <DIV> USING .IS(':CHECKED')
  if((!$('#d1').is(':checked')) && (!$('#d2').is(':checked'))){
	  $('#d1').prev('div').addClass('error');
	  
	  //ADD CLASS="ERROR" TO NEXT <LABEL>S
	  //$('#d1, #d2').next('label').addClass('error');
  }
  else{
	  $('#d1').prev('div').removeClass('error');
	  //$('#d1, #d2').next('label').removeClass('error');
  }
  
  //RADIO BUTTONS NOT CHECKED -> ADD CLASS="ERROR" TO PREVIOUS <DIV> USING .PROP('CHECKED')
  if((!$('#mrs').prop('checked')) && (!$('#mr').prop('checked'))){
	  $('#mrs').prev('div').addClass('error');
  }
  else{
	  $('#mrs').prev('div').removeClass('error');
  }
  
  //CHECK E-MAIL FIELD : EMPTY OR NOT E-MAIL -> ADD CLASS="ERROR"
  if($('#email').val()!='' && !validateEmail($('#email').val())){
	  $('#email').addClass('error');
  }
  else if($('#email').val()!='' && validateEmail($('#email').val())){
	  $('#email').removeClass('error');
  }
  
  //CHECK SELECT OPTION VALUE : SELECTED (DEFAULT OPTION) -> ADD CLASS="ERROR"
  if ($('#country option').prop('selected')){
	  $('#country').addClass('error');
  }
  else{
	  $('#country').removeClass('error');
  }
  
  //CHECK IF FIELDSET "YOUR COLLEAGUE SUBSCRIPTION" MUST BE VALIDATED
  if($('#otherMember').is(':checked')){
	  $('.required2').each(function(){
		  if($(this).val()==''){
			  $(this).addClass('error');
		  }
		  else{
			  $(this).removeClass('error');
		  }
	  });
	  
	  if((!$('#d1-2').is(':checked')) && (!$('#d2-2').is(':checked'))){
		  $('#d1-2').prev('div').addClass('error');
	  }
	  else{
		  $('#d1-2').prev('div').removeClass('error');
	  }
	  
	  if((!$('#mrs2').prop('checked')) && (!$('#mr2').prop('checked'))){
		  $('#mrs2').prev('div').addClass('error');
	  }
	  else{
		   $('#mrs2').prev('div').removeClass('error');
	  }
	  
	  if($('#email2').val()!='' && !validateEmail($('#email2').val())){
		  $('#email2').addClass('error');
	  }
	  else if($('#email2').val()!='' && validateEmail($('#email2').val())){
		  $('#email2').removeClass('error');
	  }
  }
  
  //NO CLASS="ERROR" -> OK
  if($('.error').length == 0){
	  //REPLACE THE VALIDATION LINK TO AVOID MULTIPLE SENDINGS
	  $('a').replaceWith('<a href="javascript:void(0);">Please wait...</a>');
	  //TRANSFORM FORM DATA TO ADD THE VALUES
	  var postData = $('#dataForm').serializeArray();
	  //START AJAX TREATMENT
	  $.ajax({
		//SPECIFY METHOD (POST OR GET)
		type: 'POST',
		//SPECIFY THE URL OF THE TREATMENT PAGE
		url: 'post.php',
		//SPECIFY THE DATA TO SEND
		data: postData, //WITHOUT SERIALIZE(), WILL BE data : 'fname=' + fname + '&name=' + name + '&email=' + email + ect...,
		//IF SUCCESS -> LAUNCH THIS FUNCTION
		success: function(data)
        {
			//REPLACE THE <FORM> BY RETURNED DATA
			$('#dataForm').replaceWith(data);
			$(window).scrollTop(0);
        },
		//IF ERROR -> LAUNCH THIS FUNCTION
        error: function(data)
        {
            //REPLACE THE <FORM> BY ANOTHER HTML CODE (ERROR MESSAGE)
			$('#dataForm').replaceWith('<h3>Error</h3><p>An error occurred while processing data. <a href="javascript:void(0);" onClick="javascript:location.reload();" style="text-decoration:underline;">Please try again</a>.</p>');
        }
	  });
	  //alert('Thank you');
	  return false;
  }
  //SOME CLASS="ERROR" -> NOT OK
  else{
	  alert('Please complete the required information');
	  return false;
  }
}