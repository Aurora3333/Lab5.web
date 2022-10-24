// alert(1)
// var name = 'IITU'
// const russian='МУИТ'
// let other=2022
//
// name = 'IT'
// console.log(name)

// let $ = 1; // declared a with "$“ in name
// let _ = 2; // variable with "_"
// alert($ + _); // 3

// const lastName ='Almaty' // string
// let year = '2022' // number
// var name ='Nur-sultan'
// const firstName=true // boolean
// name ='Astana'
// console.log (lastName)
// //alert ('City name is ' + lastName)
// // we can change type of veriables
// console.log (year +' ' + name)
// alert ('City name is ' + lastName)

// const lastName = prompt ('Insert name')
// alert ('Name is ' + lastName)

// const isP = true
// const name = 'Almaty'
// const year = 2022
// let x
// console.log (typeof isP)
// console.log (typeof name)
// console.log (typeof year)
// console.log (typeof x)
// console.log (typeof null)

// console.log(90071992547409919999999n - 90071992547440991999999n)


// document.body.style.background='red'
// setTimeout(()=> document.body.style.background='pink',3000)
//
// document.getElementById("demo").innerHTML="2022";

// const x = prompt ('Insert year')
// let x
// function func(x){
//     let days
//     if((x%400==0) || (x%4==0) && (x%100!=0)){
//         days = 366;
//     }
//     else{
//         days = 365;
//     }
//     return days;
//     alert(days)
// }

//1
function know(){
    var n,s;
    n = document.getElementById('num').value;
    s = document.getElementById('result');
    //6a 7v
    n = parseInt(n);
    // if (n<=0) {
    //     s.innerHTML = -n;
    // }
    // else if (n>0 && n<2) {
    //     s.innerHTML = n*n;
    // }
    // else if(n>=2){
    //     s.innerHTML = '4';
    // }


}

//2
function know2(){
    var n,s;
    n = document.getElementById('num2').value;
    s = document.getElementById('result2');
    //6a 7v
    n = parseInt(n);
    if (n<0) {
        s.innerHTML = 0;
    }
    else if ((n%2)==0) {
        s.innerHTML = 1;
    }
    else{
        s.innerHTML = -1;
    }
}

//3
function know3(){
    var n, s
    n = document.getElementById('num3').value;
    s = document.getElementById('result3');
    n = parseInt(n);
    if((n%400==0) || (n%4==0) && (n%100!=0)){
        s.innerHTML = 366;
    }
    else{
        s.innerHTML = 365;
    }

}

//4
function know4(){
    var n, s
    n = document.getElementById('num4').value;
    s = document.getElementById('result4');
    n = parseInt(n);
    if(n==0){
        s.innerHTML = 'нулевое число';
    }
    else if (n>0 && (n%2)==0){
        s.innerHTML = 'положительное четное число';
    }
    else if (n>0 && (n%2)!=0){
        s.innerHTML = 'положительное нечетное число';
    }
    else if (n<0 && (n%2)==0){
        s.innerHTML = 'отрицательное четное число';
    }
    else if (n<0 && (n%2)!=0){
        s.innerHTML = 'отрицательное нечетное число';
    }
}


//xx
function know5(){
    var a, s
    a = document.getElementById('num5').value;
    s = document.getElementById('result5');
    a = parseInt(a);
    if(a / 100 > 0 && a / 100 < 10 && (a%2)==0){
        s.innerHTML = 'трехзначное четное число';
    }
    else if (a / 100 > 0 && a / 100 < 10 && (a%2)!=0){
        s.innerHTML = 'трехзначное нечетное число';
    }
    else if (a / 10 > 0 && a / 10 < 10 && (a%2)==0){
        s.innerHTML = 'двузначное четное число';
    }
    else if (a / 10 > 0 && a / 10 < 10 && (a%2)!=0){
        s.innerHTML = 'двузначное нечетное число';
    }
    else if (a / 10 == 0 && (a%2)==0){
        s.innerHTML = 'однозначное четное число';
    }
    else if (a / 10 == 0 && (a%2)!=0){
        s.innerHTML = 'однозначное нечетное число';
    }
}



//6
function know6(){
    var y, s
    y = document.getElementById('num6').value;
    s = document.getElementById('result6');
    y = parseInt(y);
    switch (y/10) {
        case 2:
            s.innerHTML ='двадцать ';
            break;
        case 3:
            s.innerHTML ='тридцать ';
            break;
        case 4:
            s.innerHTML ='сорок ';
            break;
        case 5:
            s.innerHTML ='пятдесят';
            break;
        case 6:
            s.innerHTML ='шестьдесят';
            break;
    }
    switch (y%10) {
        case 1:
            s.innerHTML ='один';
            break;
        case 2:
            s.innerHTML ='два';
            break;
        case 3:
            s.innerHTML ='три';
            break;
        case 4:
            s.innerHTML ='четыре';
            break;
        case 5:
            s.innerHTML ='пять';
            break;
        case 6:
            s.innerHTML ='шесть';
            break;
        case 7:
            s.innerHTML ='семь';
            break;
        case 8:
            s.innerHTML ='восемь';
            break;
        case 9:
            s.innerHTML ='девять';
            break;
    }

    switch (y%10) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            s.innerHTML =y+'лет';
            break;
        case 1:
            s.innerHTML =y+'год';
            break;
        case 2:
        case 3:
        case 4:
            s.innerHTML =y+' '+'года';
            break;
    }
}

//7
function know7(){
    var n, s
    n = document.getElementById('num7').value;
    s = document.getElementById('result7');
    n = parseInt(n);

    if (n / 10 == 1)
        switch (n) {
            case 10:
                s.innerHTML ="десять учебных заданий.";
                break;
            case 11:
                s.innerHTML ="одинадцать учебных заданий.";
                break;
            case 12:
                s.innerHTML = "двенадцать учебных заданий.";
                break;
            case 13:
                s.innerHTML = "тринадцать учебных заданий.";
                break;
            case 14:
                s.innerHTML ="четырнадцать учебных заданий.";
                break;
            case 15:
                s.innerHTML ="пятнадцать учебных заданий.";
                break;
            case 16:
                s.innerHTML ="шестнадцать учебных заданий.";
                break;
            case 17:
                s.innerHTML ="семнадцать учебных заданий.";
                break;
            case 18:
                s.innerHTML ="восемнадцать учебных заданий.";
                break;
            case 19:
                s.innerHTML ="девятнадцать учебных заданий.";
                break;
        }
    else {
        switch (n / 10) {
            case 2:
                s.innerHTML ="двадцать ";
                break;
            case 3:
                s.innerHTML ="тридцать ";
                break;
            case 4:
                s.innerHTML ="сорок ";
                break;
        }

        switch (n % 10) {
            case 1:
                s.innerHTML ="одно ";
                break;
            case 2:
                s.innerHTML ="два ";
                break;
            case 3:
                s.innerHTML ="три ";
                break;
            case 4:
                s.innerHTML ="четыре ";
                break;
            case 5:
                s.innerHTML ="пять ";
                break;
            case 6:
                s.innerHTML ="шесть ";
                break;
            case 7:
                s.innerHTML = "семь ";
                break;
            case 8:
                s.innerHTML ="восемь ";
                break;
            case 9:
                s.innerHTML ="девять ";
                break;
        }

        switch (n % 10) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                s.innerHTML ="учебных заданий.";
                break;
            case 1:
                s.innerHTML ="учебное задание.";
                break;
            case 2:
            case 3:
            case 4:
                s.innerHTML ="учебных задания.";
                break;
        }
    }
    return 0;
}


//8 xx
function know8(){
    var n, s
    n = document.getElementById('num8').value;
    s = document.getElementById('result8');
    n = parseInt(n);
    switch (n / 100) {
        case 1:
            s.innerHTML ="сто ";
            break;
        case 2:
            s.innerHTML = "двести ";
            break;
        case 3:
            s.innerHTML = "триста ";
            break;
        case 4:
            s.innerHTML ="четыреста ";
            break;
        case 5:
            s.innerHTML = "пятьсот ";
            break;
        case 6:
            s.innerHTML ="шестьсот ";
            break;
        case 7:
            s.innerHTML = "семьсот ";
            break;
        case 8:
            s.innerHTML = "восемьсот  ";
            break;
        case 9:
            s.innerHTML = "девятьсот  ";
            break;
    }

    if ((n % 100) / 10 == 1)
        switch (n % 100) {
            case 10:
                s.innerHTML = "десять";
                break;
            case 11:
                s.innerHTML = "одинадцать";
                break;
            case 12:
                s.innerHTML = "двенадцать";
                break;
            case 13:
                s.innerHTML = "тринадцать";
                break;
            case 14:
                s.innerHTML = "четырнадцать";
                break;
            case 15:
                s.innerHTML ="пятнадцать";
                break;
            case 16:
                s.innerHTML = "шестнадцать";
                break;
            case 17:
                s.innerHTML = "семнадцать";
                break;
            case 18:
                s.innerHTML = "восемнадцать";
                break;
            case 19:
                s.innerHTML = "девятнадцать";
                break;
        }
    else {
        switch ((n % 100) / 10) {
            case 2:
                s.innerHTML ="двадцать ";
                break;
            case 3:
                s.innerHTML ="тридцать ";
                break;
            case 4:
                s.innerHTML ="сорок ";
                break;
            case 5:
                s.innerHTML ="пятьдесят ";
                break;
            case 6:
                s.innerHTML ="шестьдесят ";
                break;
            case 7:
                s.innerHTML = "семьдесят ";
                break;
            case 8:
                s.innerHTML = "восемьдесят ";
                break;
            case 9:
                s.innerHTML = "девяносто ";
                break;
        }

        switch (n % 10) {
            case 1:
                s.innerHTML = "один";
                break;
            case 2:
                s.innerHTML = "два";
                break;
            case 3:
                s.innerHTML = "три";
                break;
            case 4:
                s.innerHTML = "четыре";
                break;
            case 5:
                s.innerHTML = "пять";
                break;
            case 6:
                s.innerHTML = "шесть";
                break;
            case 7:
                s.innerHTML = "семь";
                break;
            case 8:
                s.innerHTML = "восемь";
                break;
            case 9:
                s.innerHTML ="девять";
                break;
        }
    }
    return 0;

}


//9 xx
function know9() {
    var x, s
    x = document.getElementById('num9').value;
    s = document.getElementById('result9');
    x = parseInt(x);
    switch (x%1984%60/12)
    {
        case 0:
            s.innerHTML ="год зелен";
            break;
        case 1:s.innerHTML = "год красн ";
            break;
        case 2:s.innerHTML = "год желт ";
            break;
        case 3:s.innerHTML = "год бел ";
            break;
        case 4:s.innerHTML = "год черн ";
            break;
    }

    switch (x%1984%60%12)
    {
        case 0:s.innerHTML = "ой крысы";
            break;
        case 1:s.innerHTML = "ой коровы";
            break;
        case 2:s.innerHTML = "ого тигра";
            break;
        case 3:s.innerHTML = "ого зайца";
            break;
        case 4:s.innerHTML = "ого дракона";
            break;
        case 5:s.innerHTML = "ой змеи";
            break;
        case 6:s.innerHTML = "ой лошади";
            break;
        case 7:s.innerHTML = "ой овцы";
            break;
        case 8:s.innerHTML = "ой обезьяны";
            break;
        case 9:s.innerHTML = "ой курицы";
            break;
        case 10:s.innerHTML = "ой собаки";
            break;
        case 11:s.innerHTML = "ой овцы";
            break;
    }

}





//10
function know10() {
    var d,m, s
    d = document.getElementById('num10').value;
    m = document.getElementById('num11').value;
    s = document.getElementById('result10');
    d = parseInt(d);
    m = parseInt(m);
    switch (m) {
        case 1:
            if (d > 19)
                s.innerHTML = "Водолей";
            else
                s.innerHTML = "Козерог";
            break;
        case 2:
            if (d > 18)
                s.innerHTML = "Рыбы";
            else
                s.innerHTML = "Водолей";
            break;
        case 3:
            if (d > 20)
                s.innerHTML = "Овен";
            else
                s.innerHTML = "Рыбы";
            break;
        case 4:
            if (d > 19)
                s.innerHTML ="Телец";
            else
                s.innerHTML ="Овен";
            break;
        case 5:
            if (d > 20)
                s.innerHTML ="Близнецы";
            else
                s.innerHTML = "Телец";
            break;
        case 6:
            if (d > 21)
                s.innerHTML = "Рак";
            else
                s.innerHTML ="Близнецы";
            break;
        case 7:
            if (d > 22)
                s.innerHTML = "Лев";
            else
                s.innerHTML = "Рак";
            break;
        case 8:
            if (d > 22)
                s.innerHTML = "Дева";
            else
                s.innerHTML = "Лев";
            break;
        case 9:
            if (d > 22)
                s.innerHTML = "Весы";
            else
                s.innerHTML = "Дева";
            break;
        case 10:
            if (d > 22)
                s.innerHTML = "Скорпион";
            else
                s.innerHTML ="Весы";
            break;
        case 11:
            if (d > 22)
                s.innerHTML ="Стрелец";
            else
                s.innerHTML = "Скорпион";
            break;
        case 12:
            if (d > 21)
                s.innerHTML ="Козерог";
            else
                s.innerHTML = "Стрелец";
            break;
    }
    return 0;
}


//11xx?
function know111() {
    var n, s
    n = document.getElementById('num111').value;
    s = document.getElementById('result111');
    n = parseInt(n);
    var A = 2;
    for (var i = 1; i <=n; ++i) {
        A = 2+1/A;
        s.innerHTML = A + " ";
    }
    system ("pause");
    return 0;

}

//12 for ?
function know12() {
    var n, s
    n = document.getElementById('num12').value;
    s = document.getElementById('result12');
    n = parseInt(n);
    var i, i2;
    var rez = 0, ni;
    for (i = 1; i <= n; ++i) {
        ni = i;
        for (i2 = 1; i2 <= i; ++i2) ni *= i;
        rez += ni;
    }
    s.innerHTML =  rez;

    return 0;

}

//13 for
function know13() {
    var n, s
    n = document.getElementById('num13').value;
    s = document.getElementById('result13');
    n = parseInt(n);

    var i, i2;
    var rez = 0, ni;
    for (i = 1; i <= n; ++i) {
        ni = i;
        for (i2 = 1; i2 <= n - i; ++i2) ni *= i;
        rez += ni;
    }
    s.innerHTML =rez;

    return 0;
}



//14 for ?
function know14() {
    var a, b, s
    a = document.getElementById('num14').value;

    s = document.getElementById('result14');
    a = parseInt(a);
    b = document.getElementById('num15').value;
    b = parseInt(b);

    var i, i2;
    for (i = a; i <= b; ++i) {
        for (i2 = 1; i2 <= i; ++i2)
            s.innerHTML =i + " ";
    }

    return 0;

}


//15 for ?
function know155() {
    var a, b, s
    a = document.getElementById('num155').value;

    s = document.getElementById('result155');
    a = parseInt(a);
    b = document.getElementById('num156').value;
    b = parseInt(b);


    var i, i2;
    for (i = 1; i <= b - a + 1; ++i) {
        for (i2 = 1; i2 <= i; ++i2)
            s.innerHTML = a + i - 1 + " ";
    }

    return 0;
}

//16 while
function know16() {
    var n, s
    n = document.getElementById('num16').value;
    s = document.getElementById('result16');
    n = parseInt(n);

    var f1 = 1, f2 = 1, f = 0;

    while (f < n) {
        f = f2 + f1;
        f2 = f1;
        f1 = f;
    }
    s.innerHTML = "F_k - 1 =" + f2 + " "+"F_k+1=" + (f1) + (f2);
    return 0;
}

//17 while
function know17() {
    var n, s
    n = document.getElementById('num17').value;
    s = document.getElementById('result17');
    n = parseInt(n);


    var f1 = 1, f2 = 1, f = 0, k = 2;
    while (f < n) {
        ++k;
        f = f2 + f1;
        f2 = f1;
        f1 = f;
    }
    s.innerHTML ="k:" + k;
    return 0;
}

//18 while ????
function know18() {
    var n, s
    n = document.getElementById('num18').value;
    s = document.getElementById('result18');
    n = parseInt(n);

    var ak1=0,ak=2;
    var k=1;
    while ((abs(ak-ak1))>=n) {
        ++k;
        ak1=ak;
        ak=2+1/ak1;
    }
    s.innerHTML = "K= " + k + ", A(k-1)=" + ak1 + ", A(k)=" + ak;
    return 0;
}

//19 while ????
function know19() {
    var n, s
    n = document.getElementById('num19').value;
    s = document.getElementById('result19');
    n = parseInt(n);

    var ak1 = 1, ak = 2, ak2;
    var k = 2;
    while ((abs(ak - ak1)) >= n) {
        ak2 = ak1;
        ak1 = ak;
        ak = (ak2 + 2 * ak1) / 3;
        ++k;
    }
    s.innerHTML = "k:" + k + ' '+ "A(k-1):" + ak1 + ' ' + "Ak:" + ak;

    return 0;
}


//20 while ????
function know20() {
    var a,b,c, s
    a = document.getElementById('num20').value;
    b = document.getElementById('num21').value;
    c = document.getElementById('num22').value;
    s = document.getElementById('result20');
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    var k = 0;
    var temp;
    while ((a - c) >= 0) {
        a -= c;
        temp = b;
        while (temp - c >= 0) {
            temp -= c;
            ++k;
        }
    }
    s.innerHTML = "K:"+ k;
    return 0;


}

//4
function know25(){
    let n;
    let s;
    n = document.getElementById('num25').value;
    n = parseInt(n);

    if(n>=95 && n<100){
        s = 'A+';
    }
    if(n>=90 && n<95){
        s = 'A-';
    }
    if(n>=85 && n<90){
        s = 'B+';
    }
    if(n>=80 && n<85){
        s = 'B';
    }
    if(n>=75 && n<80){
        s = 'B-';
    }
    if(n>=70 && n<75){
        s = 'C+';
    }
    if(n>=65 && n<70){
        s = 'C';
    }
    if(n>=60 && n<65){
        s = 'C-';
    }
    if(n>=55 && n<60){
        s = 'D+';
    }
    if(n>=50 && n<55){
        s = 'D';
    }
    if(n>=25 && n<50){
        s = 'FX';
    }
    if(n>=0 && n<25){
        s = 'F';
    }

    document.getElementById('result25').innerHTML = s;


}