function countZero(numbers){
    let count = 0;
    for(const num of numbers){
        if(num == '0'){
            count++;
        }
    }
    return count;
}
const output = countZero('01100110');
console.log(`total numbers of zero: ${output}`);