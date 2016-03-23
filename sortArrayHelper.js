/**
Helper function for Array.sort() to enable sorting numbers, strings, array of objects by its key's value/list of key values
in ASC and DESC directions, and for array of objects combined ASC/DESC ordering can be applied.

@constructor
@param {String} field - name of object property | ignored if number or string array provided 
@param {Number} order - select ASC or DESC type of ordering | by default ASC, DESC can be set by -1



Example how to use

var arrNumber = [3, 43, 6, 7, 6, 78 ,2, 5 ,54, 65, 6, 7, 3];

arrNumber.sort(sortArrayHelper())
// -> [ 2, 3, 3, 5, 6, 6, 6, 7, 7, 43, 54, 65, 78 ] sorted in ascending order

arrNumber.sort(sortArrayHelper(-1))
// -> [ 78, 65, 54, 43, 7, 7, 6, 6, 6, 5, 3, 3, 2 ] sorted in descending order

var arrString = ['Tim', 'Peter', 'David', 'Aaron', 'Baron', 'Dan', 'Larry'];

arrString.sort(sortArrayHelper())
// -> [ 'Aaron', 'Baron', 'Dan', 'David', 'Larry', 'Peter', 'Tim' ] sorted in ascending order

arrString.sort(sortArrayHelper(-1)) 
// ->  [ 'Tim', 'Peter', 'Larry', 'David', 'Dan', 'Baron', 'Aaron' ] sorted in descending order


var arrObject = [{id: 5, age:4, name: 'Tim'}, {id:3, age:6, name: 'Peter'}, {id:23, age: 56, name: 'David'}, {id:3, age:10, name: 'Aaron'}, {id: 11, age: 45, name: 'Baron'}, {id:3, age:26, name: 'Dan'}, {id: 88, age:8, name: 'Larry'}];

arrObject.sort(sortArrayHelper('age', -1))
// -> 
[ { id: 23, age: 56, name: 'David' },
  { id: 11, age: 45, name: 'Baron' },
  { id: 3, age: 26, name: 'Dan' },
  { id: 3, age: 10, name: 'Aaron' },
  { id: 88, age: 8, name: 'Larry' },
  { id: 3, age: 6, name: 'Peter' },
  { id: 5, age: 4, name: 'Tim' } ]
sorted by age in descending order

arrObject.sort(sortArrayHelper('name'))
// ->
[ { id: 3, age: 10, name: 'Aaron' },
  { id: 11, age: 45, name: 'Baron' },
  { id: 3, age: 26, name: 'Dan' },
  { id: 23, age: 56, name: 'David' },
  { id: 88, age: 8, name: 'Larry' },
  { id: 3, age: 6, name: 'Peter' },
  { id: 5, age: 4, name: 'Tim' } ]
  sorted by name in ascending order


// can be sorted by several fields same time
arrObject.sort(sortArrayHelper({
    id: -1,
    age: 1   
}));

// ->
[ { id: 3, age: 26, name: 'Dan' },
  { id: 3, age: 10, name: 'Aaron' },
  { id: 3, age: 6, name: 'Peter' },
  { id: 5, age: 4, name: 'Tim' },
  { id: 11, age: 45, name: 'Baron' },
  { id: 23, age: 56, name: 'David' },
  { id: 88, age: 8, name: 'Larry' } ]

  sorted by id in ascending order, if there are same values in ids, then sorted by age in descending order

*/ 

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
