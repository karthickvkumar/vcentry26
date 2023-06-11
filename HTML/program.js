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
  fathersName: "wer"
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
  { name : "abc", age : 24},
  { name : "bcd", age : 21},
  { name : "efg", age : 23},
  { name : "hij", age : 22}
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

function welcomeMessage(){
  var message = "Hello! Welcome to this page";
  alert(message);
}

Operators
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
! false = true 