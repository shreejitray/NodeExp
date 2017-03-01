/**
 * Created by schaud3 on 12/5/16.
 */
"use strict";

const parent = {
    type: 'Parent',
    print: function () {
        console.log('inside parent');
    }
}

//const child = Object.create(parent);
const child = parent;
parent.type = 'Child';
console.log(`child ${child.type}`);
console.log(`parent ${parent.type}`);
child.print();
