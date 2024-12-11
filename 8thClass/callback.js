// console.log("tumar nam bolbo ..");


// setTimeout(()=>{
//     console.log("ami  kawsar");

// },3000);

// console.log("ekto wait koro...");





// let count = 1;

// const countInterval = setInterval(() => {
// console.log(`${count} সেকেন্ড পার হয়ে গেছে, তুমি কি এখনো অপেক্ষা করছ?`);
//     if (count === 5) {
//        console.log("এবার আমি ক্লান্ত, বন্ধ করলাম!");

//         clearInterval(funnyInterval);
//     }
    
//     count++;
// }, 1000);
 
//  const counter= setInterval(()=>{
//     console.log(`${count} সেকেন্ড পার হয়ে গেছে, তুমি কি এখনো অপেক্ষা করছ?`);
//     if (count === 5) {
//               console.log("এবার আমি ক্লান্ত, বন্ধ করলাম!")
//                clearInterval(funnyInterval);
//            }
            

//  })
  

// let count = 1;

// const countInterval=  setInterval(()=>{
//     console.log(count++);

//     if (count === 5) {
//         // console.log(count);
        
//         clearInterval(countInterval)  
//     }

    

// // },1000)


// //   callback






// function myDisplayer(Hello) {
//     console.log(Hello);
    
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   function myThird() {
//     myDisplayer("hello");
//   }
//   myFirst();
//   mySecond();
//   myThird()

//example 2

// function brideAndGroom(callback) {


//     console.log("Groom: 'Find me a bride!' 🤵");
//     setTimeout(() => {
//         console.log("A bride has been found! 👰");
//         callback();
//     }, 2000);
// }

// function weddingCeremony() {

//     console.log("The wedding ceremony has begun! Everyone is saying 'I do! I do!' 💒");
// }

// brideAndGroom(weddingCeremony);


//  const  chakhabo =(cb)=>{

//     console.log('mama cha daw');

//     setTimeout(()=>{
//         console.log('ai now tumar cha');

//         cb();
//     },2000)
    
//  }



//  const thanks=()=>{
//     console.log("thank you mama  cha valo hoice");
//   }

//   chakhabo(thanks)

// const sum =(a,b)=>{
// return a+b
  
// }

// console.log(sum(10, 50));




function prepareFood(callback) {

    console.log("cooking...");

    setTimeout(() => {
        console.log("khabar ready ");
        callback();
    }, 3000);
}

function eatFood(callback) {
    console.log(" khabar suro start! 🍽️");
    setTimeout(() => {
        console.log("  khabar sesh 😋");
        callback();
    }, 2000);
}

function sayThankYou() {
    console.log("thanks!  food is very well! 🙏");
}

// পুরো খাবার খাওয়ার ধাপ:
prepareFood(() => {
    eatFood(() => {
        sayThankYou();
    });
});




