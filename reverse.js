function reverse(arr){
    let newArr = [];
    for(const val of arr){
        newArr.unshift(val)
    }
    return newArr;
}
const output = reverse([1,2,3]);
console.log(output);