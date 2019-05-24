var persones = [];
function addPerson(person) {
    if (!persones.some(function (x) { return x.id === person.id; })) {
        persones.push(person);
        console.log("\u7528\u6237\u5DF2\u6DFB\u52A0\uFF1A", persones);
    }
    else {
        console.log("\u7528\u6237\u5DF2\u5B58\u5728\uFF1A", persones);
    }
}
var setPerson = function setPerson(person) {
    var index = persones.length && persones.findIndex(function (x) { return x.id === person.id; });
    if (index !== -1) {
        persones[index] = person;
    }
    return person;
};
addPerson({
    id: 1,
    name: 'he',
    age: 26,
    sex: '男',
    occupation: 'web'
});
setPerson({
    id: 1,
    name: 'he777',
    age: 26,
    sex: '女',
    occupation: 'web'
});
