var names = prompt('Ismingizni Kiriting');
console.log(names)
var age = prompt('yoshingizni kiriting');

if( age <= 0 || age <= 18){
    alert('Yoshsiz , Oqishingiz kerak!')

} else if ( age <= 50 ){

 alert('Ishlashingiz kerak!')

}else if (age <= 59 ){

    alert('Yaqinda pensiyaga chiqasiz')

}else if ( age <= 150 ){
    alert('Pensionerga oxshaysiz, agar tirik bolsangiz  ')
}
else{
    alert ('nimadir notogri ketib qoldi')
}


var example = prompt('5+7= ?')

if (example == 12){
    alert('siz togri son kiritdingiz = ' + example );
}else if (isNaN(example)) {
    alert('siz sondan boshqa narsa kiritdingiz');
}
 else if(example != 12) {
    alert('siz notogri son kiritdingiz.' + 'Togri javob = 12' );
}


var example = prompt('8-5= ?')
if (example == 3) {
    alert('siz togri son kiritdingiz = ' + example);
 
}
else if (isNaN(example)) {
    alert('siz sondan boshqa narsa kiritdingiz');
}

 else if (example != 3) {
    alert('siz notogri son kiritdingiz.' + 'Togri javob = 3');
}
   


var example = +prompt('4*4= ?')
if (example == 16) {
    alert('siz togri son kiritdingiz = ' + example);
}else if (isNaN(example))  {
    alert('siz sondan boshqa narsa kiritdingiz');
}
 else if (example != 16) {
    alert('siz notogri son kiritdingiz.' + 'Togri javob = 16');
} 

var example = +prompt('25/5= ?') 
if (example == 5) {
    alert('siz togri son kiritdingiz = ' + example);
}
 else if (isNaN(example)) {
    alert('siz sondan boshqa narsa kiritdingiz');
}
 else if (example != 5) {
    alert('siz notogri son kiritdingiz.' + 'Togri javob = 5');
}

var num1 = +prompt('1-son sonni kiritig') 

var num2 = +prompt('2-son sonni kiritig')

var num3 = +prompt('3-son sonni kiritig')



if( num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3){
    alert('1-son')
}
else if  (num2 < num1 && num2 > num3 || num2 > num1 && num2< num3) {
    alert('2-son  orta qiymat ')
}
else if ( num3 < num1 && num3 > num2 || num3 > num1 && num3 < num2 ){
    alert('3-son')
}

alert('natijalar')