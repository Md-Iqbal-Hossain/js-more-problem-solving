function largestWord(str){
    let words = str.split(" ");
    let max = words[0];
    for(const word of words){
        if(max.length < word.length){
            max = word;
        }
    }
    return {largest_word: max,
            characters: max.length};

}
const output = largestWord("I love learning JavaScript and also Python");
console.log(output);