 
//24th program positive or negative

// let a;
// function positive(a){
//     if(a>0){
//         return "positive";
//     }
//     else{
//         return "negative";
//     }
// }
// console.log(positive(20));



//25th program arithemetic operation

// let a=10;
// let b=60;
// let c;
// function arithemetic(n){
// switch(n){
//     case 1:c=a+b;
//             return c;
//             break;
//     case 2:c=a-b;
// 	        return c;
//             break;
//     case 3:c=a*b;
// 	        return c;
//             break;
//     case 4:c=a/b;
// 	          return c;
//             break;
//     default: return "invalid";
//                break;                             
// }
// }
// console.log(arithemetic(2));

//26th program even count and odd count

// let digit=0;
// let evencount=0;
// let oddcount=0;
// let num=10;
// for(let i=1;i<=num;i++){
//     if(i%2==0){
//         evencount++;
//     }
//     else{
//         oddcount++;
//     }
// }
// console.log(evencount);
// console.log(oddcount);

//27th program fibonacci series

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// for (let i = 0; i < 10; i++) {
//     console.log(fibonacci(i));
// }


//28th program distance between 2 points

// let a;
// let b;
// let c;
// let d;
// let e;
// function distance(a,b,c,d){
// e=Math.sqrt((b-a)*(b-a)+(d-c)*(d-c));
// return e;
// }
// console.log(distance(10,20,30,40));
 
//29th program electricity bill

// let units;
// let doublepay;
// function electricity(units,doublepay){
// if(units<100){
//     return (units*1.20);
// }
// else if(units<300){
//     return (100*1.20+(units-100)*2);
// }
// else if(units>300){
//     return (100*1.20+200*2+(units-300)*3);
// }
// }
// console.log(electricity(280,0));

//30th program perfect square
// function square(num) {
//     return Math.sqrt(num);
// }

// let result = square(25);
// console.log(result);  

	

//31st program calculate discount

// let dis=25;
// let amount;
// let markedprice=1000;
// let s;
// function discount(dis,markedprice){
// s=100-dis;
// amount=(s*markedprice)/100;
// return amount;
// }
// console.log(discount(25,1000));

//32nd program reverse of a string

// let a;
// function string(a){
// let res=" ";                    
// for(let i=a.length-1;i>=0;i--){  
//     res=res+a.charAt(i);  
// }
// return res;     
// }
// console.log(string("wooooooow"));  

 
//33rd program compound interest

// let amount;
// let principle;
// let rate;
// let time;
// let c;
// function compoundInterest(principle,rate,time){
// 	amount=principle*((1+rate/100)*(1+rate/100)*(1+rate/100));
//      c=amount-principle;
// 	 return c;
// }
// console.log(compoundInterest(1000,3,3))

//34th program calculate cgpa

// let n=5;
// let m=[];
 
//      let g=[];
 
//      let cgpa,sum=0;
//  m=[95,85,75,80,95]
 
 
//      for(let i=0;i<n;i++)
//      {
//        g[i]=(m[i]/10);
//      }
//      for(let i=0;i<n;i++)
//      {
//         sum+=g[i];
//      }
//      cgpa=sum/n;
//      console.log(cgpa);

 

//35th program swap two numbers

// let a=2;
// let b=3;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

//36th program random number generation

// function randomNumber(min, max) {
// 	return Math.random() * (max - min) + min;
// }
// console.log( randomNumber(1, 5) );

//37th program power

// let n = 5 
// let power = 3 
// let num = 1; 
// for (let i = 0; i < power; ++i) { 
// 	num = num * n; 
// } 
// console.log(num);

//38th program quadratic
// function findRoots(a, b, c) { 
// 	if (a == 0) { 
// 		console.log("Invalid"); 
// 		return; 
// 	} 

// 	let d = (b * b )- 4 * a * c; 
// 	let sqrtval = Math.sqrt(Math.abs(d)); 

// 	if (d > 0) { 
// 		console.log("real and different"); 

// 		console.log( 
// 			(-b + sqrtval) / (2 * a)  
// 			(-b - sqrtval) / (2 * a) 
// 		); 
// 	} 
// 	else if (d == 0) { 
// 		console.log(" real and same"); 

// 		console.log(-b / (2 * a) 
// 			-b / (2 * a)); 
// 	} 
// 	else { 
// 		console.log("complex"); 

// 		console.log(-b / (2 * a)  sqrtval / (2 * a) -b / (2 * a) + " - i" + sqrtval) / (2 * a); 
// 	} 
// }  
// let a = 1, b = -7, c = 12;  
// findRoots(a, b, c);

//39th program convert m/hr to km/hr

// function kmphTOmph(kmph) 
// {   
//     return (0.6214 * kmph); 
// } 
 
// function mphTOkmph(mph) 
// {  
//     return (1.60934 * mph) ; 
// } 
// console.log(kmphTOmph(90));
// console.log(mphTOkmph(90));

//40th program reverse array

// function revArray(arr) {
// 	return arr.reverse();
//   }

//   let originalArray = [1, 2, 3, 4, 5];
//   let reversedArray = revArray(originalArray);

//   console.log(reversedArray);
  
 
//41st program area of isoceles triangle

// let a;
// let b;
// let z;
// function area(a,b){
//     z=(b/4)*Math.sqrt((4*a*a)-(b*b));
//     return z;
// }
// console.log(area(20,20));

//42nd program hcf of two numbers

// let a=10;
// let b=20;
// let temp;
// while(b>0){
//     temp=b;
//     b=a%b;
//     a=temp;
// }
// console.log(a);

//43rd program linear search

//  let i;
//  let key=30;
// let a=[10,60,30,70];
// for(i=0;i<a.length;i++){
//     if(a[i]=key){
//         console.log("Key found");
//         break;
//     }
//     else{
//         console.log("Key not found");
//         break;
//     }
// } 

//44th program BMI

// let w=60;
// let h=20;
// let BMI=w/(h*h);
// console.log(BMI);

//45nd program lcm

// function gcd(a, b) {
//     while (b !== 0) {
//         var temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// function lcm(a, b) {
//     if (a === 0 || b === 0) {
//         return 0;
//     }
//     return Math.abs(a * b) / gcd(a, b);
// }

// var num1 = 12;
// var num2 = 18;

// var result = lcm(num1, num2);
// console.log(result);

//46th program date

// var today=new Date();
// var dd = today.getDate();
// console.log(today);
// console.log(dd);

//47th program to check wether a number is a multiple of 3 or 7

// function test(x) {
// 	if (x % 3 == 0 || x % 7 == 0) {
// 	  return true;
// 	} 
// 	else {
// 	  return false;
// 	}
//   }
//   console.log(test(12));
//   console.log(test(14));
//   console.log(test(10));

//48th program empty an array

// program to empty an array

// function emptyArray(arr) {
//     arr = [];
    
//     return arr;
// }

// const array = [1, 2 ,3];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);

//49th program first half of even string

// function half(str) {
//     if (str.length % 2 == 0) {
//         return str.slice(0, str.length / 2);
//     }
//     return str;
// }
// console.log(half("Python"));      
// console.log(half("JavaScript"));    
// console.log(half("PHP"));        

  
//50th program to find angles

//  function angleType(angle) {
// 	if(angle < 90) {
// 	  return "Acute angle"; 
// 	}
// 	if(angle === 90) {
// 	  return "Right angle";  
// 	}
// 	if(angle < 180) {
// 	  return "Obtuse angle";  
// 	}
// 	return "Straight angle";   
//   }

//   console.log(angleType(47));  
//   console.log(angleType(90));    
//   console.log(angleType(145));  
//   console.log(angleType(180));  

//51st program sum of n+n/2+n/4+n/8+..........

// function sum(num) {
//     var sum = 0; 
//     while (num > 0) { 
//         sum += num; 
//         num = Math.floor(num / 2); 
//     }
//     return sum; 
// }

// console.log(sum(8));  
// console.log(sum(9));  
// console.log(sum(26)); 

//52nd program a number is in given range

// function  inrange(x, y, z) 
// {
//     return (y >= x && y <= z);  
// }

// console.log(inrange(1,2,3));   
// console.log(inrange(1,2,-3));  
// console.log(inrange(1.1,1.2,1.3));  

//53rd program patterns

// var x, y, chr;
// for (x = 1; x <= 6; x++) {
//     for (y = 1; y < x; y++) {
//         chr = chr + ("*");
//     }
//     console.log(chr);
// } 

//54th program area of parallelogram

// let b;
// let h;
// let a;
// function area(b,h){
// 	a=h*b;
// 	return a;
// }
// console.log(area(23,78));

//55th program area of rectangle

// let l;
// let b;
// let a;
// function area(l,b){
// 	a=l*b;
// 	return a;
// }
// console.log(area(23,67));

//56th program volume of cylinder

// const p=3.14;
// let r;
// let h;
// let a;
// function area(r,h){
//      a=p*r*h;
// 	 return a;
// }
// console.log(area(3,2));

//57th program sum of 3 and 5 multiples under 1000

// var sum = 0;
// for (var x = 0; x < 1000; x++) {
//     if (x % 3 === 0 || x % 5 === 0) {
//         sum += x;
//     }
// }
// console.log(sum); 

 

//58th program display alphabets

// function alphabets() {
// 	for (let i = 65; i <= 90; i++) {
// 	  let a = String.fromCharCode(i);
// 	  console.log(a);
// 	}
//   }
//   alphabets();
  

//59th program replace 

// const str = 'Welcome to javascript';
// const replStr = 'hello';
// const newStr = 'hii';

// const updatedStr = str.replace(replStr, newStr);

// console.log(updatedStr);

//60th program average

// let a;
// let b;
// let c;
// let d;
// function average(a,b,c){
//            d=(a+b+c)/3;
// 		   return d;
// }
// console.log(average(2,3,4));

 



// write a program to find fibonacci sequence till n

// let n;
//     function fibonacci(n) 
//     { 
         
//          let n1 = 0; 
//         let n2 = 1; 
//         let n3=0;
//         let  a=[];
//         a.push(n1,n2);
//         for (let i = 2; i <= n; i++)  
//         { 
//             n3 = n1 + n2; 
//             a.push(n3);
//             n1 = n2; 
//             n2 = n3; 
//         } 
//         return a; 
//     } 
//     console.log(fibonacci(10));


    // function fibonacci(n) {
    //     let a1=[0,1];
    //     for(let i=2;i<n;i++) {
    //     a1[i]= a1[i-1]+a1[i-2];
    //     }
    //     return a1;
    //     }
    //     console.log(fibonacci(10));


    // write a program for finding factorial using while loop

//     let n;
//     function facto(n){
//     let fact=1;
//     let start=1
//     while(start<=n){
//         fact*=start;
//         start++;
//     }
//     return fact;
// }
//     console.log(facto(4));

//reverse of a number

// let num;
// let rev=0;
// function reverse(num){
//     let digit=0;
//     while(num!=0){
//     digit=num%10;
//     rev=(rev*10)+digit;
//     num=Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(reverse(1234));

//sum of elements in a given array

// function array(a){
//     let sum=0;
//           for(let i=0;i<a.length;i++){
//               sum+=a[i];
//           }  
//           return sum;
// }
// console.log(array([23,54,67,12,67,97]));



// problems using while loop

//1st program sum of array

// function sumOfArray(a){
//     let sum=0;
//     let i=0;
//     while(i<a.length){
//         sum+=a[i];
//         i++;
//     }
//     return sum;
// }
// console.log(sumOfArray([23,56,12,76,45,97,57]));

//2nd program table program

// function tablePrinter(n){
//              let i=0;
//              while(i<=10){
//                let  z=n*i;
//                console.log(n+"*"+i+"="+z); 
//                i++; 
//             }
// }
// (tablePrinter(9));

//3rd program palindromic checker

// function reverseOfString(num){
//     let num1=num;
//     let digit=0;
//      let rev=0;
//      let i=0;
//      while(num!=0){
//         digit=num%10;
//         rev=(rev*10)+digit;
//         num=Math.floor(num/10);
//      }
//      if(num1==rev){
//         return "Palindrome";
//      }
//      else{
//         return "Not a palindrome";
//      }
// }
// console.log(reverseOfString(121));

//4th program factorial of a number

// function factorial(n){
//     let fact=1;
//     let start=1;
//      while(start<=n){
//         fact*=start; 
//         start++; 
//      }
//      return fact;
// }
// console.log(factorial(9));

//5th program square root
