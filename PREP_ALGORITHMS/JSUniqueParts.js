//Global Declaration: Global Scope

//Declaration with var: Functional Scope
//In JavaScript, var is one keyword used to declare variables. These variable declarations “float” all the way to the top. This is known as variable hoisting. Variables declared at the bottom of the script will not be the last thing executed in a JavaScript program during runtime.
function a(){
    console.log(float)
}
var float = "This is a variable declared with var"
// a()

function scope1(){
    var top = "top";
    bottom = "bottom";
    console.log(bottom);

    var bottom;
}
// scope1()

//The above code block is the same thing as :

function scope1(){
    var top = "top";
    var bottom;
    bottom = "bottom"
    console.log(bottom)
}
// scope1()

//The bottom variable declaration, which was at the last line in the function, is floated to the top, and logging the variable works.The key thing to note about the var keyword is that the scope of the variable is the closest function scope. What does this mean?In the following code, the scope2 function is the function scope closest to the print variable:

function scope2(print){
    if(print){
        var insideIf= "12"
    }
    console.log(insideIf);
}
// scope2(true)

function scope2(print){
    var insideIf;
    if(print){
        insideIf = '12';
    } 
    console.log(insideIf);
} 
// scope2(true);

var a = 1;
function four(){
    if (true){
        var a = 4;
    }
    console.log(a)
}
// four()

//Declaration with let: Block Scope
//Another keyword that can be used to declare a variable is let. Any variables declared this way are in the closest block scope (meaning within the {} they were declared in).

function scope3(print){
    if(print){
        let insideIf = '12';
    }
    console.log(insideIf)
}
// scope3(true)

function scope3(print){
    let insideIf;
    if(print){
        insideIf = '12';
    } 
    console.log(insideIf);
} 
// scope3(true)

let b = 1;
function five(){
    if (true){
        let b = 4;
    }
    console.log(b)
}
// five()

//Equality and Types
//JavaScript has different data types than in traditional languages such as Java. Let’s explore how this impacts things such as equality comparison.
//Variable Types
//In JavaScript, there are seven primitive data types: boolean, number, string, undefined, object, function, and symbol (symbol won’t be discussed). One thing that stands out here is that undefined is a primitive value that is assigned to a variable that has just been declared. typeof is the primitive operator used to return the type of a variable.

var is20 = false; // boolean
console.log(typeof is20);

var age = 19;
console.log(typeof age);

var lastName = "Bae";
console.log(typeof lastName);

var fruits = ["Apple", "Banana", "Kiwi"];
console.log(typeof fruits);

var me = {firstName:"Sammie", lastName:"Bae"};
console.log(typeof me);

var nullVar = null;
console.log(typeof nullVar);

let function1 = function(){
    console.log(1);
}
console.log(typeof function1)

let blank;
console.log(typeof blank)