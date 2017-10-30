import WidgetModel from './model.js';

window.APP = window.APP || {}
APP.main = (function(namespace, global) {
    function _init() {
        const widgetEls = [...document.querySelectorAll('.widget')];
        this.widgets = widgetEls.map((widget) => {
            return makeWidget(widget);
        });
    }

    function makeWidget(widget) {
        return new WidgetModel(widget);
    }

    return {
        init: _init
    }
})(window.APP || {}, this);

APP.main.init();
