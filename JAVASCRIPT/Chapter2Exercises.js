let newHash = [];
for(let counter = 0; counter <= 7; counter ++){
    newHash.push("#");
    console.log(newHash.join(" "));
}
//FIZZBUZZ

for(let number = 1; number <= 100; number ++){
    if(number%3 == 0 && number%5 == 0){
        console.log("FizzBuzz");
    }else if(number%3 == 0 && number%5 !== 0){
        console.log("Fizz");
    }else if(number%5 == 0 && number%3 !== 0){
        console.log("Buzz");
    }else{
        console.log(number);
    }
}

for(let count = 1; count <=4; count ++){
    let chess = []
    let space = " ";
    let long = 8
    let hash = "#"
    for(let i = 1; i<= long; i ++){
        if(i%2 == 0){
            chess.push(hash)
        }else{
            chess.push(space)
        }
    }
    console.log(space + chess.join(" ") + space)
    console.log(chess.join(" "))
}