// console.log(x);
// var x = 10;

// hello()
// function hello(){
//     console.log(10+20);
    
//     return  
// }

//  console.log(sum());
 
// const sum = function(){
   
    
//     return 10+20 
// }



// function greet() {
//     var name = "Tuhin";

//     console.log(this.name);
    
// }

// greet();

// const w=88

//  a()
// function a (){
//     const z=10
//     console.log(w+z);
    
   
    
    
//     function b(){
//        console.log(z);
       
//     }
    
//     b()
// }





//  a()
// function a (){
   
//     console.log(w);
    
//     function b(){
//        const w=40
       
//     }
    
//     b()
// }



//  scop 



// console.log(a); 
// var a = 10;

// console.log(b); // ReferenceError
// const b = 10; 


// function outer() {
   
//   function inner() {
//         console.log(outerVar); // Lexical Scope
//     }

//     let outerVar = "I am outer";
//     inner();
  
//     console.log(" hello world");
// }
// outer(); // Output: "I am outer"


function a(){
     let x=10
    function b(){
        var y=25
        
        function c() {
         let  z=32
         console.log(x+y+z);
         console.log(this);
         
         
        }
        c()
       
       
    }
    b();

    
    
}
a()


