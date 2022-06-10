function saxelisgamotana(){
    var saxeli = document.getElementById('name').value;
    document.getElementById('demo').innerHTML = saxeli;
}

var saxeli = 'salome';

document.getElementById('demo2').innerHTML = saxeli;
{
    let x=15;
    var y=10;

    console.log(x);
    console.log(x);
}

//console.log(x);
console.log(y);

var x = 10,  y = 5;

console.log(x, y);

x = x+y; //x = 10 + 5

console.log(x);
x = x+y; //x =15+5
console.log(x);

x += y; // x = x+y; 20 + 5 =25;
console.log(x);

x-= y; //x=x-y; x=25 - 5 x=20;
console.log(x);

x *= y; // x = x* y = 20*5 =100
console.log(x);

x /=y; //x= x/y = 100/5 = 20
console.log(x);

y = 2;
x %= y; // x = x % y = (x / y) 20/2 10
console.log(x);

x++; // 2 ++ 3
console.log(x);

x--; //3 -- -1 2
console.log(x);

var number = -15;

if(number == 0 ){
    console.log('nulis tolia');
}

else if(number > 0){
    console.log(number, 'dadebiti ricxvia');
}
else{
    console.log(number, 'uaryofiti ricxvia');
}

switch(number){
    case 0:
        console.log('nulis tolia');
    break;
    case 15:
        console.log('15-is tolia');
    break;
    default:
    console.log('arcerti piroba ar sruldeba');
}

function checknumber(){
    var num = document.getElementById('ricxvi').value;
    console.log(num) ;
/*

    if(num == 0){
        
        document.getElementById('answer').innerHTML = 'ნულის ტოლია'
    }
    else if (num > 0){
        document.getElementById('answer').innerHTML = 'დადებით რიცხვია'
    }
    else{
        document.getElementById('answer').innerHTML = 'უარყოფითი რიცხვია'
    }
    */
   if(num >= 0 & num <= 10 ){
       document.getElementById('answer').innerHTML = 'რიცხი არის 1-დან 10-მდე შუალედში'
   }
   else{
    document.getElementById('answer').innerHTML = 'რიცხი არ არის 1-დან 10-მდე შუალედში'
   }
}