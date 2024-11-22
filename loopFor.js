// let = 0;
// for (i=5; i>=1; i--) {
//     console.log("hello!", i); //it's name is Block
// }   

//exercise1:
//manai angi 5 huuhedtei dundaj age-iig oloh.
// let age1 = 20; age2 = 35; age3 = 40; age4 = 21; age5 = 64;

// let totalAge = age1 + age2 + age3 + age4 + age5;
// let total = 5;

// let averageAge = totalAge / total;

// console.log(averageAge);

// const ages = [20, 32, 50, 64];
// console.log(ages);
// ages[2] = 40; 

// 1. favoriteColors гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав дахь өнгийг өөрчилж, шинэчилсэн array-ыг хэвлэ.
// let favoriteColors = ["red, purple, black, pink, yellow"];
// favoriteColors[3] = ["gray"]
// console.log(favoriteColors) 

// 2. levelsCompleted гэсэн array үүсгээд  boolean утгууд оруул. Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч,  шинэчилсэн array-ыг хэвлэ.
// let levelsCompleted = [true, false]
// levelsCompleted.pop(true)
// console.log(levelsCompleted)

// 3. destinations array үүсгээд очихыг хүссэн 5 газрыг бич. Эхний газрыг устгаад шинэчилсэн array-ыг хэвлэ. 
//Дараа нь хамгийн эхэнд нь “New York” гэсэн элемент нэмээд  шинэчилсэн array-ыг хэвлэ.
// let destinations = ["milan", "paris", "shanghai", "brazil", "california"];
// destinations.shift(0);
// destinations.unshift("New-York");
// console.log(destinations);   

// 4. ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, гэсэн утгуудыг оноож 
//тус array-д байгаа бүх тоог 5-аар нэмэгдүүл. шинэчилсэн array-ыг хэвлэ.
// let ages = [18, 21, 22, 20, 23, 36, 79];
// operation = ages.map(x => x += 5)
// console.log(operation) 

// 5. numbers гэсэн array зарлаад 15ш тоо оруул.
// Дээрх array доторх тоонуудын нийлбэрийг ол.
// Дээрх аrray - ийн хамгийн их тоог ол.
// Дээрх аrray - ийн хамгийн бага тоог ол.
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.
// Дээрх олсон утгуудаа хэвлэж харуулаарай.
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 
// let sum = 0;
// for(let i = 0; i<numbers.length; i++) {
//     sum+=numbers[i] //sum + numbers = numbers ?
// }
// console.log(sum);

// numbers.sort((a,b) => b-a);
// let max = numbers [0]
// let min = numbers [14]
// console.log(max);
// console.log(min);

// numbers.unshift(100);
// console.log(numbers) 

// numbers.push(100)
// console.log(numbers)

// let odd = 0;
// let even = 0;
// for(let i=0; i<numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         even++;
//     } else {
//         odd++
//     }      
// }   
// console.log(odd, even) 
 
// nemelt exercises ODTOI**
// let pattern ='';
// let i=0;
// while(i<=10){
  // i+=1;
  // pattern =  pattern +"*"; //teacher-s tailbar awsan!
  // console.log(pattern);
// } 

// let model = '';
// for(i=0; i<5; i++) { // i+=1; i+1=i; i++; it's all the same
//     model+=" *"; // oilgoloo ==> ene model gdg n dr default utga n bi ugtsun bgaa, tgheer for dotor utgiig n dahij ugjiinu gsn ug (* negeer nemegdd ywna geed) 
//     console.log(model); //eniig ingeed gadaanan gargahaar loop n uilchlehgui baih n bna only 5 sh * garj irne (dawtamj gdg for command n ajilahgui gsn ug)
// } 
// const n=5;
// for(let i = 0; i < n; i++) {
//     let stars = ""
//     for(let a = 0; a < n; a++) {
//         stars+=" *"
//     }
//     console.log(stars)
// }    

// const s=5;
// let i=0;
// while(i<s) {
//     i+=1;
//     let star = "";
//     let k=0;  
//     while(k<s) {
//         k+=1;
//         star+=" *"
//     }
//     console.log(star)
// }  


// let star = '';
// let i=1;
// while(i<=5) {
//     i+=1;
//     star+=" *"
//     console.log(star)
// }   


// * 
// * * 
// * * * 
// * * * * 





