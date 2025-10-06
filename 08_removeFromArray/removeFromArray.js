const removeFromArray = function(arr,num1, num2) {
    let newArr = arr;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num1 || arr[i] === num2){
            newArr.splice(i, 1);
            i--;
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
