//11th program Sum of even numbers in an array
                                            //   let a;
                                            //   function myArray(a){
                                            //       let sum=0;
                                            //         for(let i=0;i<a.length;i++){
                                            //           if(a[i]%2==0){
                                            //               sum+=a[i];
                                            //           }
                                            //          }  
                                            //       return sum;          
                                            //           }                 
                                            //     console.log(myArray([89,23,54,12,65,34,87,76,12,86,21,78]));                       

//12th program celsius to Faranheit conversion
                                            //   let c;
                                            //   function conversion(c){
                                            //    let f=(c*(9/5))+32;
                                            //    return f;
                                            //  }
                                            //  console.log(conversion(20));

//13th program simple interest
                                            //   let p;
                                            //   let r;
                                            //   let t;
                                            //       function sI(p,r,t){
                                            //            let s=(p*r*t)/100;
                                            //              return s;
                                            //       }          
                                            //   console.log(sI(2,3,4))     
                                              
//14th program square
                                                // let a;
                                                // function square(a){
                                                //      let s=a*a;
                                                //          return s;
                                                //  }
                                                // console.log(square(12));

//15th program count of array
                                            //   let a;
                                            //   let count=0;
                                            //      function myArray(a){
                                            //          for(let i=0;i<a.length;i++){
                                            //                count++;
                                            //             }
                                            //         return count;
                                            //      }                        
                                            //   console.log(myArray([23,12,54,35,65,67,87,35,97]));       
                                              
//16th program count of vowels
                                            //    let a;
                                            // let count=0;
                                            //  function demo(a){
                                            //  for(let i=0;i<a.length;i++){
                                            //     let s=a.charAt(i);
                                            //   value=s.toLowerCase();
                                            //         if(value=='a'||value=='e'||value=='i'||value=='o'||value=='u'){
                                            //       count++;
                                            //          }
                                            //              }
                                            //    return count;
                                            //     }                        
                                            //   console.log(demo("AbejhsdjkKjlkdsjli"))    

// 17th program table

                                            //  let n;
                                            // function table(n){
                                            //  let i=0;
                                            //  for(i=0;i<=10;i++){
                                            //     let p=n*i;
                                            //     console.log(n+"*"+i+"="+p);
                                            //  }
                                            // }
                                            // table(9);

//18th program cubes of natural numbers

// let a;
// let sum=0;
// function cube(a){
//   for(let i=0;i<=a;i++){
//    sum=sum+(i*i*i);
//   }
//   return sum;
// }
// console.log(cube(9));

//19th program reverse of a number

// let num;
// let rev=0;
// let digit=0;
// function reverse(num){
// while(num!=0){
//     digit=num%10;
//     rev=(rev*10)+digit;
//     num=Math.floor(num/10);
// }
// return rev;
// }
// console.log(reverse(1234));

  
//20th program factorial

// let a;
// function factorial(a){
//  let fact=1;
//  let start=1;
//  while(start<=a){
//    fact*=start;
//    start++;
//  }
//  return fact;
// }
// console.log(factorial(4));

//21st program prime number

// let a;
// let count=0;
// function primeNumber(a){
// for(let i=1;i<=a;i++){
//    if(a%i==0){
//         count++;  
//    }
// }
// if(count==2){
//    return "prime number";
// }
// else{
//    return "composite number";
// }
// }
// console.log(primeNumber(9));

 

//22nd program armstrong number

// let sum=0;
// let n=153;
// let temp=n;
// while(temp>0){
//    let r=temp%10;
//    sum+=r*r*r;
//    temp=parseInt(temp/10);
// }
// if(sum==n){
//    console.log("armstrong number");
// }
// else{
//    console.log("not an armstrong number");
// }

//23rd program palindrome of number

// let num=1234;
// let rev;
// let digit=0;
//           while(num!=0){
//                digit=num%10;
//                rev=(rev*10)+digit;
//                num=Math.floor(num/10);
//             }
//             if(num==rev){
//               console.log("palindrome");
//             }
//             else{
//                console.log("not a palindrome");
//             }
 
