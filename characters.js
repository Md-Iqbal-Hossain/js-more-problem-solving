function countChar(str){
    let count = 0;
    for(const char of str){
        count++;
    }
    return count;
    
}
const output = countChar("Hello world!");
console.log(output);