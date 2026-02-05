function cart(object){
    let total = 0;
    for(const item of object){
        console.log(item.price);
        total += item.price
    }
    return {total: total};

}
const output = cart([
  { name: "pen", price: 10 },
  { name: "book", price: 40 },
  { name: "bag", price: 200 }
]);
console.log(output);