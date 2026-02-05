function countVowels(str){
    let newStr = str.toLowerCase().trim();
    let count = 0;
    for(const char of newStr){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        }
    }
    return {vowels: count}
}
const output = countVowels('Education ');
console.log(output);
