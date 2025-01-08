// old way to combine array

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const array3=arr1.concat(arr2);
// console.log(array3);

// old way  add element in  new array

//  const arr1 = [1, 2, 3];

// const updatedArray = arr1.concat([7, 8]);

//  console.log(updatedArray);

// use spread operator

//  combine 2 array

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
//    const array3= [...arr1,...arr2];
//    console.log(array3);

//    const arr1 = [1, 2, 3];
//    console.log(arr1);

// const updatedArray = [...arr1, 7, 8,10,15];
//  console.log(updatedArray);

//   spread operators with object

//  const student={
//      roll:'20',
//      name:'arif',

//  }
//  const studentData={
//      age:'12',
//      class:'10'
// }

//  const combineStudent = {...student,  ...studentData};
//   console.log(combineStudent );

//   add in object

//  const obj1={
//     name:"hasan",
//     age:"28"
//  }
//   const newObj={
//     ...obj1 , city:"dhaka", homeTown:"khagrachari"
//   }
//   console.log(newObj);

// Destructuring

// const person = { name: "Karim", age: 30, profession: "Teacher" };

//  old way

// const name1 = person.name;
// const age = person.age;
// const profession = person.profession;

// console.log(name1, age, profession);

// use Destructuring

// const person = { name: "Karim", age: 30, profession: "Teacher" };
//  const {name, age, } = person;
//  console.log( 'name:'+ name +  ' '+'age:'+ age )
 

//  const numbers = [10, 20, 30,50];

// const [hello,  , , second] = numbers;
// console.log(second);
