function noDuplicate(arr){
    const newArr = [];
    for(const item of arr){
        if(newArr.includes(item) != true){
            newArr.push(item);
        }
    }
    return newArr;

}
const output = noDuplicate(['abul', 'cabul', 'babul', 'cabul', 'abul', 'abul']);
console.log(output);
const output2 = noDuplicate([2,4,3,2,5,4,7,8,8]);
console.log(output2);