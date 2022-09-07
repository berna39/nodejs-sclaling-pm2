exports.isPrime = (number) => {

    startTime = new Date();
    endTime = new Date();
    isPrime = true;

    for(let i = 3; i < number; i++){
        console.log(i); // expensive :(
        if(number % i === 0){
            endTime = new Date();
            isPrime = false;
            break;
        }
    }

    if(isPrime) endTime = new Date();

    return {
        "number": number,
        "time": endTime.getTime() - startTime.getTime(),
        "isPrime": isPrime
    };

}