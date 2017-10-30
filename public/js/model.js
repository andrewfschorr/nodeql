class WidgetModel {
    constructor(el) {
        this.el = el;
        [...this.el.classList].forEach((classList) => {
            if (classList.indexOf('id-') > -1) {
                classList = classList.split('-');
                this.id = parseInt(classList[1], 10);
            }
        });
        this.el.querySelector('.delete').addEventListener('click', this.deleteWidget.bind(this));
        this.el.querySelector('.mark-complete').addEventListener('click', this.markComplete.bind(this));
    }

    deleteWidget(e) {
        console.log(e.target);
    }

    markComplete() {
        console.log(this);
        fetch('/', {

        })
    }

    getId() {
        return this.id;
    }
}

export default WidgetModel;