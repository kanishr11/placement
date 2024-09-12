// console.log("Batter Tomorrow..")

// const n = "kanish";
// // name = "kavin";

// let fname = "kanish";
// fname = "kavin";

// var lname = "kanish";
// lname = "kavin";

// console.log(n);
// console.log(fname);
// console.log(lname);

// foo(); // "Hello, world!"

// function foo() {
//   console.log("Hello, world!");
// }

// function Change(){
   
// }

// var change = document.querySelector('h1');
// console.log(change.innerHTML);

// const btn = document.getElementById("clk");
// btn.addEventListener("click",function(){
//     btn.textContent = "Stop"
//     btn.classList.add("sty")
//     console.log(change.textContent)
// })

// console.log(2*true)

// function add(a){
//     a()
// }

// function Hello(){
//     console.log("Hello")
// }

// add(Hello)
// console.log("-----------------------------")
// //Normal Method
// const arr = [10,20,30];

// arr.map(d=>console.log(d))
// console.log("-----------------------------")
// console.log(arr.splice(1,1));

// print=()=>{
//   arr.map((d)=>{
//     console.log(d)
//   })
// }
// print();
// console.log("-----------------------------")
// var arr1 = [1,2,3,4,5,6,7,8,9]
// console.log(arr1.slice(1,2))
    
// arr.shift();
// console.log(arr);
// var object={
//     name:"kanish",
//     age:20
// }
// object.place="Coimbatore";

// for(var key in object){
//     console.log(object[key])
// }


// const age = [12,23,45,75,30,26]

// var result = age.find((age)=>{
//     return age>=30
// })

// console.log(age.sort())
// console.log(result)

// var timers = fun1 = ()=>{
//     alert('Example of a SetInterval(),which will run every ')
// }

// setInterval(fun1,3000)

// timer = setInterval(()=>{console.log("Error")},5000)

// setTimeout(()=>{
//     clearInterval(timer)
// },4000)

// var isRunning = false;
//     seconds = 0;
//     minutes = 0;
//     hours = 0;

//     function start(){
//         if(!isRunning){
//             interval = setInterval(()=>{
//                 seconds +=1;
//                 if(seconds >= 60){
//                     minutes +=1;
//                     seconds = 0;
//                     if(minutes >= 60){
//                         hours +=1;
//                         minutes = 0;
//                     }
//                 }
//                 isRunning = true;
//                 document.getElementById('start').innerHTML = "Stop";
//                 let formatted = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
//                 document.querySelector('.stopwatch').innerHTML = formatted;
//             },1000)
//         }else{
//             isRunning = false;
//             clearInterval(interval);
//             document.getElementById('start').innerHTML = "Start";
//         }
//     }
//      function reset(){
//         clearInterval(interval);
//         seconds = 0;
//         minutes = 0;
//         hours = 0;
//         document.getElementById('start').innerHTML = "Start";
//                 let formatted = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
//                 document.querySelector('.stopwatch').innerHTML = formatted;

//      }


const arr1 = ['A','C','F','Y'];
const arr2 = ['Z','V','R','Q'];

const result = [...arr1,'B',...arr2]
console.log(result);
console.log(result.sort())


