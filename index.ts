
primeCheck(10);

function primeCheck(limit:number):void {
    for (let number: number = 2; number <= limit; number++)
    if (factorCheck(number)) console.log(number);
}

function factorCheck(number:number):boolean {
    let isPrime:boolean = true;
    for (let factor: number = 2; factor < number; factor++)
        if (number % factor === 0) return false;
    return isPrime;
}