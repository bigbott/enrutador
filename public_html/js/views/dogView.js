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
        
       $('#nameSelect').val(pointer.params.name ? pointer.params.name : '');
        
        $('#greeting').text('I am a dog ' + pointer.params.name ? pointer.params.name : '');
    }
};


