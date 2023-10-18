var a = 5
var b = 7
var c = 9
var d = 12


function Moose(num1,num2){
    return num1 + num2
}
console.log(Moose(a,b))

function Cat(num1,num2,num3){
    return num1 + num2 + num3
}
console.log(Cat(a,b,c))

function lion(param1,param2,param3,param4){
    return param1 + param2 + param3 + param4
}
console.log(lion(a,b,c,d))

var mygoat = {
    "name": "Tyler",
    "legs": 4,
    "tails": 1
};
console.log(mygoat);
console.log(mygoat[`legs`]);
console.log(mygoat.name);
mygoat.noise = `baa`;
mygoat.name = `Tyler Woods`;

var mygoose = {
    "name": "Mark",
    "legs": 2,
    "wings": 2
};
console.log(mygoose);
console.log(mygoose[`wings`]);
console.log(mygoose.legs);
mygoose.food = `bread`;
mygoose.name = `Mark Hamburg`;

var mytiger = {
    "name": "Chales",
    "legs": 4,
    "tails": 1
};
console.log(mytiger);
console.log(mytiger[`name`]);
console.log(mytiger.tails);
mytiger.paw = `claws`;
mytiger.name = `Charles McNabb`

