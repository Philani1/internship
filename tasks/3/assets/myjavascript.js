
$(document).ready(function() {
    $('#ifYes').hide();
    $('#ifYesDoctor').hide();
    $('#btnSubmit').hide();

    $('input[name="interacted"]').click(function() 
    {
        // Hide 1 div
        $('#ifYes').hide();

        // Show by current checkbox
        var value = $(this).val();
        if (value == 'interactedYes'){
            $('#ifYes').show();;
        }
        else{
            $('#ifYes').hide();
        }

        
    });

    $('input[name="doctor"]').click(function() 
    {
        // Hide 1 div
        $('#ifYesDoctor').hide();

        // Show by current checkbox
        var value = $(this).val();
        if (value == 'yesDoctor'){
            $('#ifYesDoctor').show();;
        }
        else{
            $('#ifYesDoctor').hide();
        }

        
    });

    $('input[name="declaration"]').click(function() 
    {
        // Hide 1 div
        $('#btnSubmit').hide();

        // Show by current checkbox
        var value = $(this).val();
        if (value == 'declaration'){
            $('#btnSubmit').show();;
        }
        else{
            $('#btnSubmit').hide();
        }

        
    });


    //disables all other checkboxes if checkbox none is ticked
    $('#none').on('change', function(){        
        var check1 = $('input[id^=none]').prop('checked');
          if(check1 == true){
            $('input[id^=epilepsy]').prop('checked', false);
            $('input[id^=tb]').prop('checked', false);
            $('input[id^=asthma]').prop('checked', false);
            $('input[id^=pregnant]').prop('checked', false);
            $('input[id^=diabetes]').prop('checked', false);
            $('input[id^=hypertension]').prop('checked', false);
          }
        });
    
        //disables all other checkboxes if checkbox none is ticked
    $('#none1').on('change', function(){        
        var check1 = $('input[id^=none1]').prop('checked');
          if(check1 == true){
            $('input[id^=fever]').prop('checked', false);
            $('input[id^=cough]').prop('checked', false);
            $('input[id^=sorethroat]').prop('checked', false);
            $('input[id^=shortbreath]').prop('checked', false);
            $('input[id^=bodyaches]').prop('checked', false);
            $('input[id^=smell]').prop('checked', false);
            $('input[id^=taste]').prop('checked', false);
            $('input[id^=nausea]').prop('checked', false);
            $('input[id^=vomiting]').prop('checked', false);
            $('input[id^=diarrhoea]').prop('checked', false);
            $('input[id^=fatigue]').prop('checked', false);
          }
        });
        
        

});

function checkForm(form)
  {
    
    if(!form.declaration.checked) {
      alert("Please indicate that you accept the Terms and Conditions");
      form.declaration.focus();
      return false;
    } 

    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
    alert("Name must be filled out");
    return false;
    }   

    var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
    alert("Surname must be filled out");
    return false;
    } 

    var z = document.forms["myForm"]["email"].value;
    if (z == "") {
    alert("email must be filled out");
    return false;
    }

    return true;    
  
  }