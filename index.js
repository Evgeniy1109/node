let a = [2, 6, 5, 4, 5, 8, 2, 3];

const {sort} = require('fast-sort');

const ascSorted = sort(a).asc();

console.log(ascSorted);