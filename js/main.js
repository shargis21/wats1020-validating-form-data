/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
$(document).on('ready', function(){
// 2. Define a validation object for use on your page.
      $('#order-form').validate({
        submitHandler: function(form) {
          // 3. Connect the validation object to an event handler tied to the submit button.
            form.submit();
        },

         rules: {
            "your-name": {
                required: true,
                maxlength: 128
            },
            "your-state": {
                required: true,
                maxlength: 2
            },
            "your-zip": {
                required: true,
                maxlength: 5,
                digits: true
            },
            "card-holder-name": {
                required: true,
                maxlength: 128
            },
            "card-number": {
                required: true,
                creditcard: true
            },
            "cvv": {
                required: true,
                maxlength: 3,
                digits: true
            }
        }
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});