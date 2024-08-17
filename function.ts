function printHello() : void{
    console.log('Hello');
    
}
printHello();


function mul(a:number , b:number){
    return a*b;
}
console.log('value is:' + mul(5,5));


function add (a:number , b:number , c?:number){
    return a+b+(c||0);
}
console.log(add(2,5));



//aliases

type StringOrNum = String | number;
type objWithName = {name:String, uid:StringOrNum};

const logDetails = (uid:StringOrNum, item:string)=> {
    console.log('${item} has uid of {uid}');
}

const greet = (user:objWithName) =>{
    console.log('${user.name} say hello');
}

const greetAgain = (user:objWithName) =>{
    console.log('$(user.name} say hello');
}
