// Number -> Any Numerical value from Positive, Negative, Fractional, Deciaml

// String -> Any Text value which is typed inside '' and ""

// Boolean -> Either true or false

// Varaible Creation (Temporary storage)
// syntax
// var vaiable_name = value;

// var -> Inbuild keyword
// vaiable_name -> Any valid text, it should contain a-z, A-Z, 0-9, _, $
// value -> Any type of data

var user_emailid = "testuser@demo.in";
var user_rollnumber = 7555;
var result = true;

// null -> Data non exist

// undefined -> A variable without any value (A variable has been declated but its value will not be defined)

var future_result;

console.log(future_result);
console.log(user_emailid);

var student_firstName = "mr.abc";
var student_lastName = "xyz";
var student_age = 20;
var student_rollNumber = "457AO855";
var student_fathersName = "cde";

/*
Object -> It is a collection of key value pair 
syntax 
var variable_name = {
  key : value,
  key : value
}

key -> similar to variable_name, it should contain a-z, A-Z, 0-9, _, $
value -> Any type of data
*/

var studentInfo = {
  firstName: "mr.abc",
  lastName: "cde",
  age: 20,
  rollNumber: "4745QSWS",
  fathersName: "wer",
};

console.log(studentInfo);

/*
Array -> It is a List of Data, it should have similar data type
syntax
var vaiable_name = [];  // empty array 
var vaiable_name = [value1, value2, value3,..., valueN];
value -> Any type of data 
*/

var numberList = [10, 45, 58, 78, 36, 87];

var stringList = ["abc", "cde", "edf", "zyx"];

var studentList = [
  { name: "abc", age: 24 },
  { name: "bcd", age: 21 },
  { name: "efg", age: 23 },
  { name: "hij", age: 22 },
];

console.log(studentList);
console.log(stringList);

/*
Function -> It is a Block of code 

To create a function 
syntax: Function Definition 

function function_name(){
  -- coding block
}
function -> inbuild keyword 
function_name -> Same as variable

To run a function 
syntax : Function Execution / Function Invocation 

function_name();
*/

function welcomeMessage() {
  var message = "Hello! Welcome to this page";
  alert(message);
}

function loggout() {
  var message = "Im logging out from this page!";
  alert(message);
}

/*Operators
1. Arithmetic Operator +, -, *, /, %, ++, -- 
2. Assingment Operator =
3. Comparision Operator < (less than), > (greater than), <=, >=, !=, ==, !==, ===
4. Logical Operator && (AND) || (OR) ! (NOT)

AND - &&
true && true = true 
true && false = false 
false && true = false 
false && false = false 

OR - ||
true || true = true
true || false = true 
false || true = true 
false || false = false

NOT -!
! true = false 
! false = true */

/*
If - Else Condition 
syntax:
 if(Condition){
    -- coding scenario 1
 }
 else{
    -- coding scenario 2
 }

 if, else - Keyword
 Condition - Mathematical expression -> Boolen
 */

/*
Problem: Find Whether a person can vote ?
Solution:
1. We need to provide user age as input to my program (function) 
2. We need to create a vaiable and pass Number value (age)
3. If the give value (age) is greater then or equal to 18 - The person is eligible for Vote 
4. If the given value (age) is less then 18 - The person is Not eligible for Vote 
*/

function check_voting() {
  var age = prompt("Enter the person age");
  if (age >= 18) {
    alert("The person is eligible for Vote");
  } else {
    alert("The person is Not eligible for Vote");
  }
}

/*
Multiple If Else Condition 
syntax
if(Condition){
  -- coding scenario 1
}
else if(Condition){
  -- coding scenario 2
}
else{
  -- coding scenario 3
}

Problem : Find the person age catergory ?
Rule for age catergory
1. Age less than 5 - Child 
2. Age greater then 5 and leas then 60 - Adult 
3. Age greater then or equal to 60 - Senior Citizen 

Solution: 
1. To give a person age as Input 
2. TO find whether the give age is less than 5 - Its a Child, so Free Ticket
3. To find whether the give age is greater then or equal to 5 and less than 60 - Its a Adult, No consetion in Ticket
4. To find whether the give age is greater then or equal to 60 - Its a Senior Citizen, so 25% consetion in Ticket
*/

function check_age_catergory() {
  var age = prompt("Enter the person age");
  if (age < 5) {
    alert("It's a Child, so Free Ticket");
  } else if (age >= 5 && age < 60) {
    alert("It's a Adult, No consetion in Ticket");
  } else {
    alert("It's a Senior Citizen, so 25% consetion in Ticket");
  }
}

/*
for Loop - Syntax 

for(initialization; condition;  increment/decrement){
  -- coding 
}

initialization - Starting point (Count) for the Loop 
Condition - To stop the Loop at certain point (Count)
increment/decrement - To increase  or decrease the loop count 
*/

for(var count = 1; count < 10; count++){
 console.log("Count", count)
}

/*
Problem : Find even numbers for the given Nth number 
solution: 
1. To get provide the Nth number (Last Number) to the function
2. Logic for finding Even number Number % 2 == 0
  a. If the Output is 0 - Even Number 
  b. If not equal to 0 - Not a Even Number 
3. To put the even number logic inside a Loop 
*/

function find_even_numbers(){
  var lastNumber = prompt("Enter the last number to find Even numbers");
  for(var count = 0; count <= lastNumber; count++){
    if(count % 2 === 0){
      console.log(count, "is a Even Number");
    }
  }
}
/*
Switch Case 
syntax 
switch(expression){
  case value :
    coding scenario 1
    break;
  case value : 
    coding scenario 2
    break;
  default :
    coding scenario 3
}

expression - Direct value 
*/
/*
Problem : Find the Weekday
Input : 0 - 6 (starting from Sunday end to Saturday)
*/

function find_weekDay(){
  try{
    var value = prompt("Enter a number from 0 to 6");
    var date = parseInt(value);
    switch(date){ // expression
      case 0: 
        alert("Today is Sunday");
        break;
      case 1 :
        alert("Today is Monday");
        break;
      case 2 :
        alert("Today is Tuesday");
        break;
      case 3 :
        alert("Today is Wednesday");
        break;
      case 4 :
        alert("Today is Thursday");
        break;
      case 5 :
        alert("Today is Friday");
        break;
      case 6 :
        alert("Today is Saturday");
        break;
      default:
        alert("Invalid Input");
    }
  }
  catch(exception){
    alert("Something went wrong, pls try again later");
    console.error(exception);
  }
  
}
/*
Errors 
1. Syntax Error 
2. Run Time Error 
3. Logical Error 
*/

// Exception Handling 
// syntax 
// try{

// }
// catch(exception){

// }
/*
Scope - The way how program access the Variable

1. Local Scope - Defining a variable iniside a Function  
   Accessbility - It can be used with in the Function 

2. Global Scope - Defining a variable outside a Function 
   Accessbility - It can be use inside any Function

3. Automatic Global Scope - Defining a variable outside a Function but its value will be assinged inside a Function
*/

var main_welcome_message = "Hello, This is main message";
var future_value;

function displayMessage(){
  var message = "Hello everyone!"; // Local Scope
  // alert(message);
  // alert(main_welcome_message)
  future_value = "This is a Future Value";
  alert(future_value);
}


function printMessage(){
  // alert(message);
  // alert(main_welcome_message)
  alert(future_value);
}

/*
Timers 
setTimeout - It is used to delay the code execution 
syntax
setTimeout(function(){
  coding scenario 
}, time_millisecond);

1000 millisecond = 1 second

function(){  -- Callback / Annonymonus Function 
  
}
*/

function loadAfterTime(){
  alert("It's going to load...");

  setTimeout(function(){
    alert("This will run after 5 seconds");
  }, 5000);
}

/*
setInterval - It is used to run a code in the given time interval 
syntax 
setInterval(function(){
  coding scenarios
}, time_millisecond);
*/
var timeId;

function runAfterTimeInterval(){
  timeId = setInterval(function(){
   alert("This message will display after every 5 second"); 
  }, 5000);
}

// clearInterval(timerId) -- To stop set interval 

function stopSetInterval(){
  clearInterval(timeId);
}

/*
Storage -> It is used to store minimal information in browser based on Domain URL
Capacity (Space) -> 5 MB to 13 MB (depends on browser)
Types of Storage 
  1. Local Storage -> Permanent Storage in browser
  2. Session Storage -> Temporay Storage in browser (Stored value will cleared once browser tab is closed)
*/

/*
Local Storage : 

There a 4 types of Actions in local storage -> Insert value, Read value, Edit value, Delete value

Insert value to Local Storage :
syntax :
localStorage.setItem("key", value);
key -> similar to variable name, its should contains only a-z, A-Z, 0-9, _, $

*/

localStorage.setItem("email_id", "karthick@live.in");

/*
Read value to Local Storage :
syntax :
localStorage.getItem("key");
*/

localStorage.getItem("email_id");

/*
Delete value from Local storage:
 1. Delete a particular value 
 2. Delete the entire local storage 
 

Delete a particular value
syntax:
localStorage.removeItem("key");

Delete the entire local storage
syntax:
localStorage.clear();
*/
/*
Session Storage : 

There a 4 types of Actions in session storage -> Insert value, Read value, Edit value, Delete value

Insert value to session Storage :
syntax :
sessionStorage.setItem("key", value);
key -> similar to variable name, its should contains only a-z, A-Z, 0-9, _, $

Read value to Session Storage :
syntax :
sessionStorage.getItem("key");

Delete value from Session storage:
 1. Delete a particular value 
 2. Delete the entire session storage 
 

Delete a particular value
syntax:
sessionStorage.removeItem("key");

Delete the entire local storage
syntax:
sessionStorage.clear();
*/

var studentDetail = {name: 'mr.abc', age: 24, roll_no: 12455};
localStorage.setItem("student", JSON.stringify(studentDetails));

JSON.parse(localStorage.getItem("student"));
/*
JSON
{
  "name" : "abc",
  "age" : 14
}
*/

// Major Version . Minor Version . Patch Version 

/*

Insall Node JS

Windows - https://nodejs.org/en/download

Linux 
sudo apt update

sudo apt install curl dirmngr apt-transport-https lsb-release ca-certificates

curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt install -y nodejs

*/

/*
Run 2nd Command

npm install -g npx

*/