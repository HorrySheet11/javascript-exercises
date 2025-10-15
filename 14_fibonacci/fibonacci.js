const fibonacci = function(num) {
    let integer = num;
    if(typeof num === 'string') {
        integer = parseInt(num.replace(/[^0-9]/g, ''));
    }

    if (integer < 0) {
        return "OOPS";
    } else if (integer === 0) {
        return 0;
    } else if (integer === 1) {
        return 1;
    } else {
        let a = 0;
        let b = 1;
        for (let i = 2; i <= integer; i++) {
            let temp = a+b;
            a = b;
            b = temp;
        }return b;
    }    
};

// Do not edit below this line
module.exports = fibonacci;
