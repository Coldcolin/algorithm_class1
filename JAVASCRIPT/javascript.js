// const space = (n) =>{
//     let string = n.split('')
//     let sees =[]
//     for(let i=0; i<= string.length -1; i++){
//         let see = string[i].toUpperCase()
//         sees.push(see)
//         if(n[i] === sees[i]){
//             let show = n[i].replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/gi, " ")
//             sees[i] = show + sees[i]
//         }
//     }
//     let fast = sees.join('')
//     let dog = fast.toLowerCase()
//     return dog
// }
// // space("changeName")
// console.log(space("camelCasingStartsHere"))

function Checking(amount){
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount){
    this.balance += amount;
}
function withdraw(amount){
    if(amount <= this.balance){
        this.balance -= amount
    }else if(amount > this.balance){
        console.log("insufficient funds")
    }
}

function toString(){
    return "Balance:" + this.balance
}

const account = new Checking(500)
console.log(account.toString())
account.deposit(1000)
console.log(account.toString())
account.withdraw(750)
account.withdraw(3000)

