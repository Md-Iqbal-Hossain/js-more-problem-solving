// function isRepeat(arr, find){
//     let count = 0;
//     for(const item of arr){

//         if(find == item){
//             count++;
//         }
//     }
//     return `output: ${count}`;
// }
// const output = isRepeat([5,6,11,12,98, 5], 20);
// console.log(output);

function isRepeat(arr){
    let unique = [];
    let result = [];
    for(const item of arr){
        if(!unique.includes(item)){
            unique.push(item);
        }
    }
    // console.log(unique);

    for(const item of unique){
        let count = 0;
        for(const num of arr){
            if(item === num){
                count++;
            }
        }
        result.push([item, count]);
    }
    return result;
}   
const output = isRepeat([5, 6, 11, 12, 11, 98, 5]);
console.log(output);