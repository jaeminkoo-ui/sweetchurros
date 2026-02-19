/* ---------------------------------------------
 Contact reservations form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit_btn").click(function(){
        
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_phone = $('input[name=phone]').val();
        var user_topic = $('input[name=topic]').val();
        var user_message = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }
        
        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userPhone': user_phone,
                'userTopic': user_topic,
                'userMessage': user_message
            };
            
            $("#submit_btn").prop('disabled', true).text('SENDING...');

            $.ajax({
                url: '/api/contact',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(post_data),
                dataType: 'json',
                success: function(response) {
                    if (response.type == 'error') {
                        output = '<div class="error">' + response.text + '</div>';
                    } else {
                        output = '<div class="success">' + response.text + '</div>';
                        $('#contact_form input').val('');
                        $('#contact_form textarea').val('');
                    }
                    $("#result").hide().html(output).slideDown();
                    setTimeout(function(){ $("#result").slideUp(); }, 5000);
                },
                error: function() {
                    output = '<div class="error">Failed to send. Please try again.</div>';
                    $("#result").hide().html(output).slideDown();
                    setTimeout(function(){ $("#result").slideUp(); }, 5000);
                },
                complete: function() {
                    $("#submit_btn").prop('disabled', false).text('SEND');
                }
            });
            
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });
    
});
