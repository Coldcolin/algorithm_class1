//An algorithm for a particular task can be defined as "a finite sequence of instructions, each of which has a clear meaning and can be performed with a finite amount of effort in a finite length of time".
//As such, an Algorithm must be precise enough to be understood by human beings, However, in order to be executed by a computer, we will generally need a program that is written in rigorous formal language.
//Given an Algorithm to solve a particular problem, we are naturally led to ask:
//1. What is it supposed to do? Does it really do what it is supposed to do? How efficiently does it do it?
//2. The technical terms used are for these are Specification, verification, Performance analysis


//Functions to to reverse a string

const reverseString1 =(str)=>{
    const word = str.split("")
    const reverse = word.reverse()
    const show = reverse.join("")
    console.log(show)
    return show
}
// reverseString1("word")

const reverseString2 = (str) =>{
    return str.split("").reverse().join("")
}
// console.log(reverseString2("Sing"))

const reverseString3 = (str) =>{
    let word = ""
    for (let i = 0; i < str.length; i++){
        const char = str[i]
        console.log(word)
        word = char + word
    }
    console.log(word.fontcolor("yellow"))
    console.log(word)
    return word
}

// reverseString3("Great")

const reverseString4 = (str) =>{
    return str.split("").reduce((output, char)=>{
        output = char + output;
        return output
    })
}
// console.log(reverseString4("Colin"))

class linkedList{
    //Initializing the class
    constructor(){
        this.head = null;
        this.tail = null;
    }
    //Adding Nodes to the List
    Append(value){
        let Node = {value: value, next: null}
        if(this.tail){
            this.tail.next = Node
        }
        this.tail = Node
        if(!this.head){
            this.head = Node
        }
    }

    Print(){
        let content = []
        let Code = this.head
        while(Code){
            content.push(Code)
            Code = Code.next
        }
        return content;
    };
};

const linked_list = new linkedList()

/*linked_list.Append("First");
linked_list.Append("Second");
linked_list.Append("Third");
linked_list.Append("Fourth");

console.log(linked_list.Print());*/

//Stack Algorithm
//To get check for a Palindrome

const palindrome = (string) =>{
    let letters = [] //Our stack
    let word = string
    let rword = "";
    // put letters of word into our stack
    for(let i = 0; i < word.length; i++){
        letters.push(word[i]);
    }
    //pop off the stack in reverse order
    for(let i = 0; i < word.length; i++){
        rword += letters.pop();
    }
    //Check for Palindrome
    if (rword === word){
        console.log(word + " is a palindrome.");
    }else{
        console.log(word + " is not a palindrome.")
    }
}

/*palindrome("racecar")*/

//Create a Stack
class Stack {
    constructor(){
        this.count = 0;
        this.storage = [];
    }
    //Adds a value onto the end of the stack
    push(value){
        this.storage[this.count] = value;
        this.count++
        return this.storage
    }
    //Removes and returns the value at the end of the Stack
    pop(){
        if(this.count === 0){
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return this.storage;
    }
    //Checks the size of the stack
    size(){
        return this.count;
    }
    //Returns the value at the end of the Stack
    peek(){
        return this.storage[this.count -1];
    }
}

const stack = new Stack()

/*console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.push("Colin"))
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())*/

//Set Data Structure

class mySet {
    //the collection will hold the set
    constructor(){
        this.collection = [];
    }
    //this method will check for the presence of an element and return true or false
    has(value){
        return (this.collection.indexOf(value) !== -1);
    }
    //this method will return all the values in the set
    values(){
        return this.collection
    }
    //this method will add an element to the set
    add(value){
        if(!(this.collection.indexOf(value) !== -1)){
            this.collection.push(value);
            return true;
        }
        return false;
    }
    //This method will remove an element from a list
    remove(value){
        if(this.collection.indexOf(value) !== -1){
            let index = this.collection.indexOf(value)
            this.collection.splice(index, 1);
            return true
        }
        return false
    }
    //This method will return the size of the collection
    size(){
        return this.collection.length
    }
    //This method will return the union of two sets
    union(otherSet){
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach((e)=>{unionSet.add(e)});
        secondSet.forEach((e)=>{unionSet.add(e)})
    }
    intersection(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.collection;
        firstSet.forEach((e)=>{
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return this.collection
    }
    //This method will return the difference of two sets as a new set
    difference(otherSet){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach((e)=>{
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet;
    }
    //This method will test if the set is a subset of a different set
    subSet(otherSet){
        let firstSet = this.values();
        return firstSet.every((value)=>{
            return otherSet.has(value)
        })
    }
}

let setA = new mySet()
let setB = new mySet()
setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")
console.log(setA.subSet(setB))
console.log(setA.intersection(setB))
console.log(setB.has("a"))
console.log(setB.remove("a"))
console.log(setB.has("a"))
