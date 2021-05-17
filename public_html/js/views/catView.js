'use strict';
/* global app */

app.catView = {
    
    show: function(pointer){
        $('img').hide();
        $('#cat').show();
        $('#catLink').prop('disabled', true);
        $('#dogLink').prop('disabled', false);
        $('#catLink').addClass('disabled');
        $('#dogLink').removeClass('disabled');
        
        $('#nameSelect').val(pointer.params.name ? pointer.params.name : '');
        
        $('#greeting').text('I am a cat ' + pointer.params.name ? pointer.params.name : '');
    }
};


