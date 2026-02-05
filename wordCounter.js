function countWords(string){
    let words = string.split(' ');
    let result = {};
    for(const word of words){
        if(result[word]){
            result[word]++;
        }
        else{
            result[word] = 1;
        }
    }
    return result;
}
const output = countWords("I love JS and I love coding");
console.log(output);