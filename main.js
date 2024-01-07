// String , number , boolean , array , object
// 1) String
let firstname = "Krittanon";
const idcard = "B5814921";
console.log("My name is",firstname);

// 2) Number
let number = 20;
let height = 170.5;

// 3) Boolean
let isHandsome = true;

firstname = "Tom";
console.log("My name is",firstname);
console.log("Number is",number);

/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ
*/

 let num1 = 15;
 let num2 = 3;
 let result = num1 % num2;
 console.log("Result is",result);


// condition
/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าหรือเท่ากับ
< น้อยกว่า
<= น้อยกว่าหรือเท่ากับ
*/
let num3 = 10;
let num4 = 5;

let condition = num3 != num4; // boolean (true/false)
console.log("Num is",condition);

// if - else condition
if(num3 != num4){
    console.log("Yes");
}
else if(num3 == num4){
    console.log("this is elseif")
}
else{
    console.log("this is else")
}

/*
Grade
>= 80 = A
>= 70 = B
>= 60 = C
>= 50 = D
*/

// let score = prompt("Enter your score"); // รับค่าจากผู้ใช้
let score = 65;
console.log("have score",score);

// if - else condition

if(score >= 80){
    console.log("You are A")
}
else if(score >= 70){
    console.log("You are B")
}
else if(score >= 60){
    console.log("You are C")
}
else if(score >= 50){
    console.log("You are D")
}
else{
    console.log("You are F")
}

/*
&& และ
|| หรือ
! not หรือ ไม่
*/

let num5 = 5;
let num6 = 8;

let condition2 = num5 >= 3 && num6 >= 5;
console.log("Result of condition",condition2);

let condition3 = num5 >= 3 || num6 >= 10;
console.log("Result of condition",condition3);

let age = 30;
let gender = "male";
if(age >= 20 && gender == "male"){
    console.log("You are male")
}

let Number7 = 20;
if((Number7 % 2 == 0)){
    console.log("You are even number")
}

// loop
/*
while
for
*/

let counter = 0;
console.log("Hello world");

while(counter < 10){
    console.log("Hello world");
    counter = counter + 1;
}
// ผลลัพธ์เมื่อกัน
for(let counter = 0 ; counter < 10 ; counter = counter + 1){
    console.log("Hello world");
}

// 4) Array
let age1 = 20;
let age2 = 25;
let age3 = 30;
let age4 = 35;
let age5 = 40;
let ages = [20,25,30,35,40];