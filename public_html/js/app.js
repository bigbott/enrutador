var app = {
    init: function (routes) {
        enrutador.setRoutes(routes);
        $("#catLink").off().click(function () {

            //the only required parameter must be the one of the routeNames in the routes array
            let routeTo = 'cat';

            //optional replaceBool used internally by enrutador to decide which method to call: history.pushState or history.replaceState. 
            //Default false means history.pushState will be called
            let replaceBool = false;

            //optional. If provided will be passed to the route method as options.routeFrom
            let routeFrom = 'dog';

            //optional. Should be object literal with string or number properties like {id: 7, name: 'John'}
            //If provided will be: 1. passed to route method as options.params 
            //                     2. used to build url query part as: ?id=7&name=John
            let params = null;

            let name = $('#nameSelect').val();
            if (name) {
                params = {name};
            }


            let pointer = {routeTo, replaceBool, routeFrom, params};
            enrutador.go(pointer);
        });


        $("#dogLink").off().click(function () {
            let params = null;
            let name = $('#nameSelect').val();
            if (name) {
                params = {name};
            }
            let pointer = {routeTo: 'dog', params};
            enrutador.go(pointer);
        });


    }

};


