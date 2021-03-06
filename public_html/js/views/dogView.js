'use strict';
/* global app */

app.dogView = {

    show: function (pointer) {
        $('img').hide();
        $('#dog').show();
        $('#dogLink').prop('disabled', true);
        $('#catLink').prop('disabled', false);
        $('#dogLink').addClass('disabled');
        $('#catLink').removeClass('disabled');
        
       let name = pointer.params && pointer.params.name ? pointer.params.name : '';
        
        $('#nameSelect').val(name);
        
        $('#greeting').text('I am a dog ' + name);
    }
};


