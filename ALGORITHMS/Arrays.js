let names = ["David", "Isaac", "Cynthia", "Raymond"]
let namestr = names.toString()
let namestry = names.join()
console.log(namestr,"and", namestry)

let cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
let dmpDept = ["Raymond", "Cynthia", "Bryan"];
let itDiv = cisDept.concat(dmpDept);
console.log(itDiv);

let etDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
let fmpDept = etDiv.splice(3,3);
let disDept = etDiv;
console.log(fmpDept); 
console.log(disDept);

let nums = [2,3,4,5];
console.log(nums); // 2,3,4,5
let newnum = 1;
nums.unshift(newnum);
console.log(nums); // 1,2,3,4,5
nums = [3,4,5];
nums.unshift(newnum,1,2);
console.log(nums); // 1, 1,2,3,4,5
nums.pop()
console.log(nums)//1, 1, 2, 3, 4
nums.shift()
console.log(nums)//1, 2, 3, 4
nums.splice(3, 0, [4,5,6])
console.log(nums)//1, 2, 3, [4, 5, 6], 4
nums.splice(3, 0, 4, 5, 6)
console.log(nums)//1, 2, 3, 4, 5, 6, [4, 5, 6], 4
nums.splice(3, 3)
console.log(nums)
nums.reverse()
console.log(nums)
nums.sort()
console.log(nums)

function compare(num1, num2){
    return num1 - num2
}

let see = [3, 1, 2, 200, 4, 200]
see.sort(compare)
console.log(see)

//Iterator functions
