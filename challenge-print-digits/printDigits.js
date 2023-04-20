

let printDigits = (num) => {
    while(num > 0){
        let digit = num % 10 
        console.log(digit)
        num = (num - digit) / 10 
    }
}

printDigits(548)