const palindromes = function (str) {
    let replaced = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(replaced);
    return replaced === replaced.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
