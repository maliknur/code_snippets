'use strict'

function sortArrayHelper(field, order) {
    var length = arguments.length;
    var fields, orders;
    
    if(length === 0) {
        return (a, b) => (a < b && -1) || (a > b && 1) || 0;
    }

    if(length === 1) {
        switch(typeof field) {
            case 'number':
                return field < 0 ?
                    ((a, b) => (a < b && 1) || (a > b && -1) || 0) :
                    ((a, b) => (a < b && -1) || (a > b && 1) || 0);
            case 'string':
                return (a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
        }
    }
    
    if(length === 2 && typeof order === 'number') {
        return order < 0 ?
            ((a, b) => (a[field] < b[field] && 1) || (a[field] > b[field] && -1) || 0) :
            ((a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0);
    }
    
    if(typeof field === 'object') {
        fields = Object.getOwnPropertyNames(field);
        orders = fields.map(key => field[key]);
        length = fields.length;
    } else {
        fields = [];
        orders = [];
        for(let i = length; i--;) {
            fields[i] = arguments[i];
            orders[i] = 1;
        }
    }
    return (a, b) => {
        for(let i = 0; i < length; i++) {
            if(a[fields[i]] < b[fields[i]]) return orders[i];
            if(a[fields[i]] > b[fields[i]]) return -orders[i];
        }
        return 0;
    };
}
