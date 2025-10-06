const removeFromArray = function(arr, ...args) {
    let newArr = arr;
    for(let i = 0; i < arr.length; i++){
        if(args.includes(arr[i])){
            newArr.splice(i, 1);
            i--;
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
