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

let score = prompt("Enter your score");
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