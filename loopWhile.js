// bodlogo1: Hello! 10 udaa



//bodlogo2: 1ees 10 hurtelh too 

// let number = 1
// while(number<11) {
//     console.log(number)
//     number = number+1 
// } 



//bodlogo3: 1ees 20 hurtelh toonii niilber

// let a=0; b=0;
// while (a<22) {
//     console.log(b) // 0
//     b = b + a++ // b = 0 + 0 --> 0; garsan hariu n b; while bol dawtamj!; 
// } 



//bodlogo4: 1ees 20 hurtelh sondgoi toonuud 

// let a=1;
// while (a < 21) {
//     console.log(a)
//     a +=2 // --> a = a+2 
// }    



//bodlogo5: duriin too ugugdhud tuhain toonii factorial oloh

// let n = 4;
// let f = 1;
// while(n>0) {
//     f *= n; 
//     n--;  
// }
// console.log(f)   


//friday js
//Bonus exercise

// Create a while loop that runs from 1-100
// Every 10 loops, print out: Checkpoint! and the loop number
// On loop 50 print out ONLY: Half way there!
// On the final loop (100) print out ONLY: You made it!
// AFTER the loop is done, print out: All, done!
//   You should see this printed out when run:

/** 
 * start: 1;
 * end: 100;
 * conditions: 10; 50; 100;
 * action: Print
 * i ==> 1-100  
 */

// let i = 1;
// while(i<= 100) {
//     if(i%100 === 0) {
//         console.log("You made it!")
//     }
//     if(i%50 == 0) {
//         console.log("Half way long!")
//     } else if(i%10 ===0) {
//         console.log("Checkpoint!", i);
//     }
//     i++;
//     } 
//     console.log("All, done!")


//exercise 1:
// 1. Төсвийн хянагч (Budget Tracker)

/**
 * Та өдөр тутмын зардлаа хянахыг хүсч байна. Таны төсөв буюу зарцуулах боломжтой мөнгөний хэмжээ $100 байна.
   Ажлын өдрүүдэд (Даваа - Баасан) зардал $5 байх болно.
   Амралтын өдрүүдэд (Бямба, Ням) зардал $20 байх болно.
   Хэрэв  нийт зардал $80-аас илүү, гэхдээ $100-аас бага болвол "Таны нийт зардал 100$ руу ойртож байна шүү" гэж хэвлэ.
   Хэрэв  нийт зардал $100 буюу төсвийн хязгаарт хүрсэн бол: "Та зардлын хязгаарт хүрлээ!" гэж хэвлээд давталтыг зогсоо.
 
 * budget => 100;
   day => 
   totalExpense => 
        
        
*/ 

// const budget = 100;
// let day = 1;
// let totalExpense = 0;

// while(totalExpense <= budget) {
//     let dayExpense 
//     if(day <= 5) {
//         totalExpense = totalExpense + 5;
//     } else if(day>=5 && day<=7) {
//         totalExpense = totalExpense + 10;
//     } 

//     if (totalExpense >=80 && totalExpense <=100 ){
//         console.log("Таны нийт зардал 100$ руу ойртож байна шүү")
//     }
//     if(totalExpense > 99) {
//         console.log("Та зардлын хязгаарт хүрлээ!")
//     }
//     if(day>7) {
//         day=1;
//     } else {
//         day++;
//     }
// }


 
/**
 * Кофе шоп урамшууллын карттай бөгөөд 10 аяга кофе авсны дараа үнэгүй кофе авах боломжтой.
    1. Худалдан авсан кофены тоогоор ажиллах давталт     үүсгээрэй.
    2. Худалдан авалт бүрт “Та … дахь кофегоо худалдан авлаа”  гэж хэвлэ.
    3. 3 дахь удаагийн худалдан авалт бүрийн дараа  "Танд үнэгүй бялуу бэлэглэж байна” гэж хэвлэ.
    4. 10 дахь худалдан авалтанд "Баяр хүргэе! Та үнэгүй кофе авлаа!" гэж хэвлэ.
    5. Давталт дууссаны дараа: "Урамшууллын карт дууслаа!" гэж хэвлэ.
* budget >= 10 
  start = 0
  end = 10 cup coffee
  conditions = global condition while; 
               hu/awalt tus burt print hiine; 
               3 dahi udaagiin hu/awalt bur dr print hiine; 
               10 dahi hu/awalt dr punch card printleh; 
               after end ==> duuslaa gh 
 */

// let coffee = 0;

// while(coffee<=9) {
    // coffee++
    // {console.log("Та " , coffee , " дахь кофегоо худалдан авлаа!")
    // }
    // if(coffee % 3 == 0) {
        // console.log("Танд үнэгүй бялуу бэлэглэж байна!")
    // }
    // if(coffee === 10)
        // console.log("Баяр хүргэе! Та үнэгүй кофе авлаа!" )
// }
// console.log("Урамшууллын карт дууслаа!") 
// 
// 
//bodlogo14: 4 tooni iheese 2dahi 
// let a=20; b=12; c=14; d=16;
// 
// if(a>b && a>c && a>d) {    
    // if(b>c && b>d) {
        // console.log(b)
    // }
    // if(c>b && c>d) {
        // console.log(c)
    // }
    // if(d>b && d>c) {
        // console.log(d)
    // }    
// } 

// if(b>a && b>c && b>d) {
    // if(a>c && a>d) {
        // console.log(a)
    // }
    // if(c>a && c>d)
        // console.log(c)
    // if(d>a && d>c)
        // console.log(d)
// } 

// if(c>a && c>b && c>d) {
    // if(a>b && a>d) {
        // console.log(a)
    // }
    // if(b>a && b>d) {
        // console.log(b)
    // }
    // if(d>a && d>b) {
        // console.log(d)
    // }
// }

// if(d>a && d>b && d>c) {
    // if(a>b && a>c) {
        // console.log(a)
    // }
    // if(b>a && b>c) {
        // console.log(b)
    // }
    // if(c>a && c>d) {
        // console.log(c)
    // }
// } 
// 

// 21. 3-37 хүртэлх тоонуудаас 5д хуваагддаг тоонуудыг дарааллуулан хэвлэ
// let i = 0;
// while(i<37) {
//   i++
//   if (i % 5 == 0) {
//     console.log("21", i);
//   } 
// } 
// 
// 23. Өгөгдсөн эерэг тооны тэгш цифрүүдийн үржвэрийг олно уу
// Жишээ нь 4019 үед 4 * 0 == 0

// let a = 1; b = 9; c = 8; d = 4;
// multiple = 1;
// if(a % 2 == 0) {
//   multiple*=a
// }
// if(b % 2 == 0) {
//   multiple*=b
// }
// if(c % 2 == 0) {
//   multiple*=c
// }
// if(d % 2 == 0) {
//   multiple*=d
// }
// console.log(multiple) 

// 26. N тоо өгөгдөнө, Хэрэв N тоо тэгш бол 2-т хуваа эсвэл сондгой бол 3 аар үржиж 1 ийг нэм. 
// Дээрх үйлдлийг N нь 1 тэй тэнцүү болох хүртэл хэдэн удаа давтах вэ.
// let n =  2,  a = 0

// while(n != 1) {
//   if(n % 2 == 0) {
//     n = n/2;
//     a++;
//   } else{
//     n = ((n*3)+1)
//     a++;
//   }
// }
// console.log(a) 

// 27. Өгөгдсөн эерэг тооны тэгш цифрүүдийн үржвэр болон сондгой цифрүүдийн нийлбэрийн зөрүүг олоорой.//







