function grade(student){
// console.log(student[0].marks);
let newArr = [];
for(const item of student){
    if(item.marks >= 80){
        newArr.push({name: item.name, marks: item.marks, grade: 'A'});
    }
    else if(item.marks >= 60){
        newArr.push({name: item.name, marks: item.marks, grade: 'B'});
    }
    else{
        newArr.push({name: item.name, marks: item.marks, grade: 'F'});
    }
}
return newArr;
}
const output = grade([
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 45 },
  { name: "Salma", marks: 70 }
]);
console.log(output);