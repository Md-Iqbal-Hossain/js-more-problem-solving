function findAveragePhonePrice(arr){
    let total = 0;
    for(const item of arr){
        total += item.price;
    }
    let avg = total / arr.length;
    return avg;


}
const output = findAveragePhonePrice([
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ]);
    console.log(output);