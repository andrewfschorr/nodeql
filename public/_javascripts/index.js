window.APP = APP || {};
APP.main = (function(namespace, global, undefined) {

    function _init() {
        console.log(namespace);
    }

    return {
        init: _init,
    }

})(APP.main = APP.main || {}, this);

APP.main.init();