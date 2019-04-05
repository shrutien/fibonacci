
function formSubmit(elementId)
		{ 
			document.getElementById(elementId).submit();
		}


function pUp(URL) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=525px,height=525px,left =50%,top =50%');");
	}



function check(){
                        
			document.registration.button1.value='Response Submitted!';
                        
		}


function validate() {

                    var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i ;


                    var submit_ok='true';


                    var errmsg1='';


                    if (document.registration.firstName.value=='')

                      {errmsg1+="Enter your first name.\n";

                      submit_ok='false';

                       }



                    if (document.registration.lastName.value=='')

                      {errmsg1+="Enter your last name.\n";

                      submit_ok='false';
                       }


                    var result= emailfilter.test(document.registration.emailAddress.value);


   		    if (result==false)

                        { errmsg1+="Enter your full email address.\n";

                        submit_ok='false';

      		        }


		    if (document.registration.roleType.value=="None")

			{errmsg1+="Select an option from dropdown box.\n";

                        submit_ok='false';

                        }



                    if (submit_ok=='false')
 
			{

 			alert(errmsg1);

			return false;

			}

		else {

		  check();}

                } 




function validate1() {

                    var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i ;


                    var submit_ok='true';


                    var errmsg1='';


                    if (document.formCombine.firstName1.value=='')

                      {errmsg1+="Enter your first name.\n";

                      submit_ok='false';

                       }



                    if (document.formCombine.lastName1.value=='')

                      {errmsg1+="Enter your last name.\n";

                      submit_ok='false';
                       }


                    var result= emailfilter.test(document.formCombine.email1.value);


   		    if (result==false)

                        { errmsg1+="Enter your full email address.\n";

                        submit_ok='false';

      		        }



		    if (document.formCombine.phone1.value.length <10)
			{ errmsg1 += "Not enough digits for a phone number. Enter 10 digit number: '999-999-9999' \n";
			submitOK="False"; }  


                    if (document.formCombine.school1.value=='')

                      {errmsg1+="Enter your school's name.\n";

                      submit_ok='false';

                       }



                    if (document.formCombine.headCoach1.value=='')

                      {errmsg1+="Enter your head coach's name.\n";

                      submit_ok='false';

                       }


                    if (document.formCombine.class1.value=='None')

                      {errmsg1+="Enter your year of graduation.\n";

                      submit_ok='false';

                       }




		    if (document.formCombine.primaryPosition1.value=="None")

			{errmsg1+="Select a position from dropdown box.\n";

                        submit_ok='false';

                        }



		    if (document.formCombine.registrationDate1.value=="None")

			{errmsg1+="Select a Combine Date.\n";

                        submit_ok='false';

                        }





                    if (submit_ok=='false')
 
			{

 			alert(errmsg1);

			return false;

			}

		else 	{

		  formSubmit('formCombine');
			}

                }



function validate2() {

                    var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i ;


                    var submit_ok='true';


                    var errmsg1='';


                    if (document.preLaunchForm.firstName.value=='')

                      {errmsg1+="Enter your first name.\n";

                      submit_ok='false';

                       }



                    if (document.preLaunchForm.lastName.value=='')

                      {errmsg1+="Enter your last name.\n";

                      submit_ok='false';
                       }


                    var result= emailfilter.test(document.preLaunchForm.emailAddress.value);


   		    if (result==false)

                        { errmsg1+="Enter your full email address.\n";

                        submit_ok='false';

      		        }


		    if (document.preLaunchForm.roleType.value=="None")

			{errmsg1+="Select an option from dropdown box.\n";

                        submit_ok='false';

                        }



                    if (submit_ok=='false')
 
			{

 			alert(errmsg1);

			return false;

			}

		else 	{

		   formSubmit('preLaunchForm');
			}

                }



function check3(){
                        
			document.getElementById('cLogin').value='Information Sent!';
                        
		}


function validate3() {

                    var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i ;


                    var submit_ok='true';


                    var errmsg1='';




		    if (document.signUpForm.role.value=="None" || document.signUpForm.role.value=='' )

			{errmsg1+="Select an option from dropdown box.\n";

                        submit_ok='false';

                        }


                    var result= emailfilter.test(document.signUpForm.email.value);


   		    if (result==false)

                        { errmsg1+="Enter your full email address.\n";

                        submit_ok='false';

      		        }





                    if (submit_ok=='false')
 
			{

 			alert(errmsg1);

			return false;

			}

		else {

		  check3();

		     }

                }

function validate4() {

	var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i ;


	var submit_ok='true';


	var errmsg1='';



	var result= emailfilter.test(document.signUpForm.email.value);


	if (result==false)

	{ errmsg1+="Enter your full email address.\n";

		submit_ok='false';

	}





	if (submit_ok=='false')

	{

		alert(errmsg1);

		return false;

	}

	else {

		check3();

	}

}

function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}

function transformUrl(elementId) {

	var submit_ok='true';
	var errmsg = '';
	var urlValue ='';
	var escapedUrlValue = '';

        if (document.getElementById('id_videoNumber').value=='' && document.getElementById('id_videoAction').value=="") {
				errmsg='Select an action and a video.\n';
                          	submit_ok='false';
			}

        if (document.getElementById(elementId).value=='' && document.getElementById('id_videoAction').value=="upload") {
				errmsg='Enter a valid url.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_videoNumber').value=='' && document.getElementById('id_videoAction').value!="") {
				errmsg='Select a video.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_videoNumber').value!='' && document.getElementById('id_videoAction').value=="") {
				errmsg='Select an action.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_videoNumber').value!='' && document.getElementById('id_videoAction').value=="delete") {
				document.getElementById(elementId).value = document.getElementById(document.getElementById('id_videoNumber').value).href;
			}

	document.getElementById(elementId).value = trim(document.getElementById(elementId).value);

	urlValue=document.getElementById(elementId).value;
	
	escapedUrlValue = encodeURIComponent(urlValue);
	
	document.getElementById('id_videoLink').value = escapedUrlValue;

	if (submit_ok=='false') {
				alert(errmsg);
                         	return false;
				}
	}




function validateForSubmit() {

	var submit_ok='true';
	var errmsg = '';

        if (document.getElementById('id_interestAction').value=='' ) {
				errmsg+='Select an action: Update or Delete College Interests.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_interestNumber').value=='' ) {
				errmsg+='Select a school ranking number to update or delete.\n';
                          	submit_ok='false';
			}


        if (document.getElementById('id_interestSchool').value=='' ) {
				errmsg+='Select a school to update or delete.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_interestActivity').value=='') {
				errmsg+='Select an activity to update or delete.\n';
                          	submit_ok='false';
			}


	if (submit_ok=='false') {
				alert(errmsg);
                         	return false;
				}
	}
	
	

function validateForEventSubmit() {

	var submit_ok='true';
	var errmsg = '';

        if (document.getElementById('id_eventAction').value=='' ) {
				errmsg+='Select an action: Update or Delete Event Interest.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_eventNumber').value=='' ) {
				errmsg+='Select an event ranking number to update or delete.\n';
                          	submit_ok='false';
			}


        if (document.getElementById('id_eventName').value=='' ) {
				errmsg+='Select an event to update or delete.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_eventActivity').value=='') {
				errmsg+='Select an activity to update or delete.\n';
                          	submit_ok='false';
			}


	if (submit_ok=='false') {
				alert(errmsg);
                         	return false;
				}
	}
















 
function reviewPhotoSubmit(elementId) {
	var submit_ok='true';
	var errmsg = '';
	var urlValue ='';

        if (document.getElementById('id_photoNumber').value=='' && document.getElementById('id_photoAction').value=="") {
				errmsg='Select an action and a photo.\n';
                          	submit_ok='false';
			}

        if (document.getElementById(elementId).value=='' && document.getElementById('id_photoAction').value=="upload") {
				errmsg='Enter a valid image file location.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_photoNumber').value=='' && document.getElementById('id_photoAction').value!="") {
				errmsg='Select a photo.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_photoNumber').value!='' && document.getElementById('id_photoAction').value=="") {
				errmsg='Select an action.\n';
                          	submit_ok='false';
			}

        if (document.getElementById('id_photoNumber').value!='' && document.getElementById('id_photoAction').value=="delete") {
				document.getElementById(elementId).value = document.getElementById(document.getElementById('id_photoNumber').value).src;
			}

	document.getElementById(elementId).value = trim(document.getElementById(elementId).value);

	if (submit_ok=='false') {
				alert(errmsg);
                         	return false;
				}
	}




function validateOffenseSurvey() 
	{
		var submit_ok='true';
                var errmsg='';
                if (document.getElementById('id_offenseStyle').value=='')
                	{
				errmsg+="Select an offensive style.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_offenseScheme').value=='')
                	{
				errmsg+="Select % of pass plays.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_teamWins').value=='')
                	{
				errmsg+="Select number of wins.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_qbStyle').value=='')
                	{
				errmsg+="Select a Quarterback style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_rbStyle').value=='')
                	{
				errmsg+="Select a Running Back style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_wrStyle').value=='')
                	{
				errmsg+="Select a Wide Receiver style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}

                if (document.getElementById('id_teStyle').value=='')
                	{
				errmsg+="Select a Running Back style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_linemanStyle').value=='')
                	{
				errmsg+="Select a Lineman style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}

                if (document.getElementById('id_kickerStyle').value=='')
                	{
				errmsg+="Select a Kicker style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}
                if (submit_ok=='false')
                    	{
				alert(errmsg);
                         	return false;
			}

	}



function validateDefenseSurvey() 
	{
		var submit_ok='true';
                var errmsg='';
                if (document.getElementById('id_defenseStyle').value=='')
                	{
				errmsg+="Select a defensive style.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_defenseScheme').value=='')
                	{
				errmsg+="Select % of zone plays.\n";
                          	submit_ok='false';
			}

                if (document.getElementById('id_ilbStyle').value=='')
                	{
				errmsg+="Select an Inside Linebacker style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_olbStyle').value=='')
                	{
				errmsg+="Select an Outside Linebacker style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}

                if (document.getElementById('id_cbStyle').value=='')
                	{
				errmsg+="Select a Corner Back style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}

                if (document.getElementById('id_safetyStyle').value=='')
                	{
				errmsg+="Select a Safety style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}
                if (document.getElementById('id_dtStyle').value=='')
                	{
				errmsg+="Select a Defensive Tackle style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}

                if (document.getElementById('id_deStyle').value=='')
                	{
				errmsg+="Select a Defensive End style or Select 'Does not apply'.\n";
                          	submit_ok='false';
			}
                if (submit_ok=='false')
                    	{
				alert(errmsg);
                         	return false;
			}

	}

function validateAssessmentItem() 
	{
		var submit_ok='true';
                var errmsg='';
                if (document.getElementById('id_response').value=='')
                	{
				errmsg+="Enter or select a response to this question.\n";
                          	submit_ok='false';
			}

                if (submit_ok=='false')
                    	{
				alert(errmsg);
                         	return false;
			}

	}
	
	function validateAssessmentRadioItem() {
		var submit_ok = 'false';
		var errmsg = "Select a response to this question.\n";
		var option = document.getElementsByName('option');
		for (i = 0; i < option.length; i++) {
			if (option[i].checked || option[i].value!='') {
				submit_ok = 'true';
				errmsg = '';
			}


		}
		if (submit_ok == 'false') {
			alert(errmsg);
			return false;
		}
	}




	
	


function pwdValidation(mx, my)  
	{  
		
		var submit_ok='true';
                var errmsg='';

		var newPwd1Len = document.getElementById('id_newPassword1').value.length;
		var newPwd2Len = document.getElementById('id_newPassword2').value.length;



		if (document.getElementById('id_newPassword1').value=='')
                      	{
				errmsg+="Enter the new password.\n";
                          	submit_ok='false';
			}

		if (newPwd1Len > my || newPwd1Len <= mx)
			{
				errmsg+="The new password length should be between "+mx+" to "+my+" characters.\n";
                          	submit_ok='false';
			}

		if (document.getElementById('id_newPassword2').value=='')
                      	{
				errmsg+="Enter the new verified password.\n";
                          	submit_ok='false';
			}


		if (newPwd2Len > my || newPwd2Len <= mx)
			{
				errmsg+="The new verified password length should be between "+mx+" to "+my+" characters.\n";
                          	submit_ok='false';
			}

		if (document.getElementById('id_newPassword1').value !=document.getElementById('id_newPassword2').value)
                      	{
				errmsg+="The new password and verified password values do not match.\n";
                          	submit_ok='false';
			}


                if (submit_ok=='false')
                    	{
				alert(errmsg);
                         	return false;
			}   
  
	} 



function validateInputs()
	{
		var submit_ok='true';
                var errmsg='';
                if (document.getElementById('id_username').value=='')
                	{
				errmsg="Enter your username.\n";
                          	submit_ok='false';
			}
		if (document.getElementById('id_password').value=='')
                      	{
				errmsg+="Enter your password.\n";
                          	submit_ok='false';
			}
                if (submit_ok=='false')
                    	{
				alert(errmsg);
                         	return false;
			}
         
	}


function popup(myform) 
	{

	var winW = 630, winH = 460;
	if (document.body && document.body.offsetWidth) 
		{
 			winW = document.body.offsetWidth;
 			winH = document.body.offsetHeight;
		}
	if (document.compatMode=='CSS1Compat' && document.documentElement &&
    document.documentElement.offsetWidth ) 
		{
 			winW = document.documentElement.offsetWidth;
 			winH = document.documentElement.offsetHeight;
		}
	if (window.innerWidth && window.innerHeight) 
		{
 			winW = window.innerWidth;
 			winH = window.innerHeight;
		}

	var browser=navigator.appName;
	var b_version=navigator.appVersion;
	var version=parseFloat(b_version);

	if (! window.focus) return true; 

	var d = new Date(); 

	windowname = d.getTime(); 
	window.open('',windowname,'height='+winH+',width='+winW+',location=no,toolbar=no,resizable=no,scrollbars=yes,status=no,history=no,titlebar=no');

	myform.target=windowname; 

	} 

function closeWin()
	{
 		var exit = confirm("You are about to exit this site?");  
     		if(exit==true)
			{
        		window.close();
     			}
	}