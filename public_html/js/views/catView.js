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
        
       let name = pointer.params && pointer.params.name ? pointer.params.name : '';
        
        $('#nameSelect').val(name);
        
        $('#greeting').text('I am a cat ' + name);
    }
};


