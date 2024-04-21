let i = [
    "1",
    4,
    "4",
    4,
]

function findsc(list, val) {
    let numinval = 0 
    for (let count in list) {
        if (list[count] === val) {
            numinval++;
            continue;
        }
        else {
            continue;
        }
    }
    return numinval;
}
function find(list, val) {
    let numinval = 0 
    for (let count in list) {
        if (list[count] == val) {
            numinval++;
            continue;
        }
        else {
            continue;
        }
    }
    return numinval;
}

value = findsc(i, 4)

console.log(value)