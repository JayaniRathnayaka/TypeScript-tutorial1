function printHello() {
    console.log('Hello');
}
printHello();
function mul(a, b) {
    return a * b;
}
console.log('value is:' + mul(5, 5));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 5));
var logDetails = function (uid, item) {
    console.log('${item} has uid of {uid}');
};
var greet = function (user) {
    console.log('${user.name} say hello');
};
var greetAgain = function (user) {
    console.log('$(user.name} say hello');
};
