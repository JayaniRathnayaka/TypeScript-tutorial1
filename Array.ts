//ARRAY
var a = ['sam', 'Liyo', 'mary', 'july'];
a.push('ann');

var b = [2,5,44,66,77];
b.push(88);
b[4] = 99;

var c = ['mary', 5,96,'Ann'];
c.push('sam');
c.push(5);

console.log(a , b , c);



//OBJECTS
let x ={
    name: 'sam',
    age: 25,
    location: 'colombo'

};
x.name;
x.age;
x.location;


let y ={
    name: 'Ann',
    age : 29,
    location : 'matara',
    married : 'yes'

};

console.log(y);
console.log(x);

//any KEYWORD

let age: any = 25;

age = true;
age = 'mary';
console.log(age);

let mixed:any[] = [];
mixed.push(3);
mixed.push('kamal');
mixed.push(false);

console.log(mixed);

let ninja: {name:any , age:any};
ninja = {name:25, age:'abcd'};

console.log(ninja);


