
window.enrutador = (function () {

    let routes;

    const setRoutes = function (routesArg) {
        routes = routesArg;
        loadFromUrl();
    };

    const executeFunctionByName = function (functionName, context /*, args*/) {
        var args = Array.prototype.slice.call(arguments, 2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(context, args);
    };

    const go = function (pointer) {
        setState(pointer);
        route(pointer);
    };

    const route = function (pointer) {
        let method = getMethodByRouteName(pointer.routeTo);
        let options = {routeFrom: pointer.routeFrom, params: pointer.params};
        executeFunctionByName(method, window, options);
        console.log(window.history);
    };

    const setState = function (pointer) {
        let hash = '#/' + pointer.routeTo + '?';
        if (pointer.params) {
            for (let key in pointer.params) {
                
                hash = hash + key + '=' + pointer.params[key];
                hash = hash + '&';
            }
            
        }
        if (hash.endsWith('&') || hash.endsWith('?')) {
                hash = hash.substring(0, hash.length - 1);
            }
        if (pointer.replaceBool) {
            window.history.replaceState(pointer, pointer.routeTo, hash);
        } else {
            window.history.pushState(pointer, pointer.routeTo, hash);
        }
    };

    const arrayGetObjectByAttribute = function (array, key, value) {
        for (let i = 0; i < array.length; i++) {
            if (value === array[i][key]) {
                return array[i];
            }
        }
    };

    const getMethodByRouteName = function (route) {
        return arrayGetObjectByAttribute(routes, 'routeName', route).method;
    };

    const loadFromUrl = function () {
        let url = window.location.href;
        if (!url.includes('#')) {
            goDefaultRoute();
            return;
        }
        let indexOfHash = url.indexOf('#');
        if (!url.includes('?')) {
            let routeName = url.substring(indexOfHash + 2);
            go({routeTo: routeName, replaceBool: true});
            return;
        }
        let indexOfQuestion = url.indexOf('?');
        let routeName = url.substring(indexOfHash + 2, indexOfQuestion);
        var paramsStr = url.substring(indexOfQuestion + 1);
        var paramArr = paramsStr.split('&');
        var params = {};
        for (let i = 0; i < paramArr.length; i++) {
            let key = paramArr[i].split('=')[0];
            let value = paramArr[i].split('=')[1];
            params[key] = value;
        }
        go({routeTo: routeName, params: params, replaceBool: true});
    };

    const goDefaultRoute = function () {
        let defaultRouteObj = arrayGetObjectByAttribute(routes, 'defaultRoute', true);
        let pointer = {routeTo: defaultRouteObj.routeName, replaceBool: true};
        go(pointer);
    };

    window.onpopstate = function (event) {
        if (!event.state) {
            return;
        }
        route(event.state);
    };

    return {
        setRoutes: setRoutes,
        go: go
    };
}());





