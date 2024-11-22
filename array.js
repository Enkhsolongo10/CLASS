//MAP --> array.map
let array1 = [-20, -10, 0, 40, 90, 80];

//function-1
function myMap1(a, b, c) {
    // console.log({a, b, c});
}
array1.map(myMap1);

//function-2
function myMap2(currentValue, index, originalArray) {
    // console.log({currentValue, index, originalArray})
} 
array1.map(myMap2);

//function-3
function myMap3(currentValue, index, originalArray) {
    return currentValue;
}  
const newArray = array1.map(myMap3);
// console.log(newArray);

//function-4 --> eniig consoledhoor undefined holildoj garch ireed bsn n map uchraas buh zuiliig hewleh ystoi
function myMap4(currentValue, index, originalArray) {
    if(currentValue>=0) {
        return(currentValue);
    }
};
const newArray2 = array1.map(myMap4);
// console.log(newArray2);

//array with object
let arrayWithObj = [
    {name:"бялуу", price:"5000"},
    {name:"сүү", price:"4500"},
    {name:"тараг", price:"7000"},
   
];
//function-1
function mapWithObj1(currentValue, index, originalArray) {
    // console.log({currentValue, index, originalArray});
};
arrayWithObj.map(mapWithObj1);

//function-2 
function mapWithObj2(currentValue, index, originalArray) {
    return {currentValue};
};
const newArray3 = arrayWithObj.map(mapWithObj2);
// console.log(newArray3);

//EXERCISE - MAP
// 1.Array дахь тоонуудыг квадрат болгоод шинэ array-д хадгалах:
let number = [2, 4, 6, 8, 10];
let squaredNumbers = number.map(function(num) {
    return num * num;});
console.log(squaredNumbers);

// 2.Гар утасны дугаарууд хадгалсан array байна.
// Зөвхөн эхний 4 орон хадгалсан шинэ array үүсгэх
let phoneNumbers = ["1234567890", "0987654321", "1122334455"];
let firstFourDigits = phoneNumbers.map(num => num.slice(0, 4));
console.log(firstFourDigits);



//FILTER --> array.filter
let array2 = [-20, -10, 0, 10, 20];

//function-1
function myFilter1(currentValue, index, originalArray) {
    return currentValue > 0;
};
const arrayWithFilter1 = array2.filter(myFilter1);
// console.log(arrayWithFilter1);

//function-2
function myFilter2(currentValue, index, originalArray) {
    if(currentValue>=0) {
        return {currentValue};
    };
};
const arrayWithFilter2 = array2.filter(myFilter2);
// console.log(arrayWithFilter2); 

//array with object
let arrayObject = [
    {name:"iphone13", price:"700$"},
    {name:"iphone14", price:"990$"},
    {name:"iphone15", price:"930$"},
    {name:"iphone16", price:"990$"},
];
function filterWithObj(currentValue, index, originalArray) {
    if(arrayObject.price === "990$") {
        return arrayObject.price;
    };
};
const newArray5 = arrayObject.filter(filterWithObj);
// console.log(newArray5);












