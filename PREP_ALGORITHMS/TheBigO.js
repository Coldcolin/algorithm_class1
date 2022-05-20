//An Example of an O(n) algorithm is printing numbers from ) to n-1.

function exampleLinear(n){
    for(let i = 0; i < n; i++ ){
        console.log("Lin "+i)
    }
}
// exampleLinear(5)

// Similarly, O(n^2) is quadratic time, and O(n^3) is cubic time. Examples:

function exampleQuadratic(n){
    for(let i = 0; i < n; i++){
        console.log("Quad "+i);
        for(let j = i; j < n; j++){
            console.log(j)
        }
    }
}
// exampleQuadratic(5)

function exampleCubic(n){
    for(let i = 0; i < n; i++ ){
        console.log("cub "+i);
        for(let j = i; j < n; j++){
            console.log(j);
            for(let k = j; k < n; k++){
                console.log(k);
            }
        }
    }
}
// exampleCubic(5)
//Finally, an example algorithm of logarithmic time complexity is printing elements that are a power of 2 between 2 and n. For example, exampleLogarithmic(10)

function exampleLogarithmic(n){
    for(let i = 2; i <= n; i = i*2){
        console.log("log " + i)
    }
}
// exampleLogarithmic(5)

//Coefficient Rule: "Get Rid of Constants"
//Example of a code block with time complexity of O(n);

function a(n){
    let count = 0;
    for (let i = 0; i < n; i++){
        count += 1;
        // console.log(count)
    }
    return count;
}
// a(5)

//The above block of code has f(n) = n because it adds to count n times, therefore, this function is O(n) in time complexity.

function b(n){
    let count = 0;
    for(let i = 0; i < 5*n; i++){
        count += 1;
        // console.log(count)
    }
    return count;
}
// b(5)

//The above block has f(n) = 5n, because it runs from 0 to 5n. But the Big-O notation is still O(n).

//The following code block demonstrates another function with a linear time complexity but with an additional operation on the 6th line:

function c(n){
    let count = 0;
    for (let i = 0; i < n; i++){
        count += 1;
    }
    count +=3;
    return count;
}
// c(n)

//The above block of code has f(n) = n+1. There is +1 from the last operation (count+=3). This still has a Big-O notation of O(n). This is because that 1 operation is not dependent on the input n. As n approaches infinity, it will become negligible.

//Sum Rule: "Add Big-Os Up"
//It is important to remember to add the coefficient rul after applying this rule

//The following code block demonstrates a function with two main loops whose time complexities must be considered independently and then summed:

function d(n){
    let count = 0;
    for (let i = 0; i < n; i++){
        count += 1;
        // console.log("before" + count)
    }
    for (let i = 0; i < 5*n; i++){
        count += 1;
        // console.log("after" + count)
    }
    return count;
}
// d(5)
//In the above example, line 4 has f(n) = n, and line 7 has f(n) = 5n. This results in 6n. However, when applying the coefficient rule, the final result is O(n) = n.

//The Product Rule: "Multiply Big-Os"

//The following code block demonstrates a function with two nested for loops for which the product rule is applied:

function e(n){
    let count = 0;
    for (let i = 0; i < n; i++){
        count += 1;
        for (let i = 0; i < 5*n; i++){
            count += 1;
        }
    }
    return count;
}
//In this example, f(n) = 5n*n because line 7 runs 5n times for a total of n iterations. Therefore, this results in a total of 5n^2 operations. Applying the coefficient rule, the result is that O(n)=n^2.

//Polynomial Rule: "Big-O to the power k"

//The following code block has only one for loop with quadratic time complexity:

function f(n){
    let count= 0;
    for (let i = 0; i < n*n; i++){
        count += 1;
    }
    return count;
}

//In the above example, f(n) = nˆ2 because line 4 runs n*n iterations. Therefore the Big-O notation is O(n^2)

//Exercise 
// Calculate the time complexities for each of the following

//Exercise 1
function firstFunction(n){
    for( let i=0; i < n; i++){
        for( let j= 0; j< n*20; j++){
            console.log(i+ j)
        }
    }
}

//Exercise 2
function secondFunction(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                for(let l = 0; l < 10; l++){
                    console.log( i + j + k + l)
                }
            }
        }
    }
}

//Exercise 4
function thirdFunction(n){
    for( let i = 0; i < n*10; i++){
        console.log(n)
    }
}

//Exercise 5
function fourthFunction(n){
    for(let i = 0; i < n; i*2){
        console.log(n)
    }
}















//Answers
// 1. O(n*2)
// 2. O(n*3)
// 4. O(n)
// 5. O(log2 n)