process.on("message", message => {
        process.send(calculateDouble(message.number));
        console.log('Child process exiting');
        process.exit();
    });

calculateDouble = (number)  => {
    return {
        "number": number,
        "double": number * 2
    };
};