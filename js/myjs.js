
function nene(){
    console.log("nene kargi gogoa");
   /* document.write("java is not javascript");*/
}
function witeli(){
    /*
    1.unda aantos witeli devicePixelRatio
    2.unda chaaqros yviteli divi
    3.unda chaaqros mwvane divi*/
    document.getElementById('witeli').style.backgroundColor='#F30808';
    document.getElementById('yviteli').style.backgroundColor='#ffffff';
    document.getElementById('mwvane').style.backgroundColor='#ffffff';
}
function yviteli(){
    /*
    1.unda aantos yviteli
    2.unda chaaqros witeli
    3.unda chaaqros mwvane*/
    document.getElementById('witeli').style.backgroundColor='#ffffff';
    document.getElementById('yviteli').style.backgroundColor='#EFFF29';
    document.getElementById('mwvane').style.backgroundColor='#ffffff';

}
function mwvane(){
    /*1.unda chaaqros witeli
    2.unda chaaqros yviteli
    3.unda aantos mwvane*/
    document.getElementById('witeli').style.backgroundColor='#ffffff';
    document.getElementById('yviteli').style.backgroundColor='#ffffff';
    document.getElementById('mwvane').style.backgroundColor='#24CB03';
}
function but(){
    document.getElementById('cat').style.backgroundImage='url(img/dog.jpg)';
    document.getElementById('dog').style.backgroundImage='url(img/cat.jpg)';
}
function but2(){
    document.getElementById('cat').style.backgroundImage='url(img/cat.jpg)';
    document.getElementById('dog').style.backgroundImage='url(img/dog.jpg)';
}


var x=5, y=10, z=x+y;
 
console.log(z);

var a="nene", b="kargi", c="gogoa";
var d=a+' '+b+' '+c;

console.log(d);

document.getElementById('statiatext').innerHTML=d;
