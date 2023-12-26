// var giveMePizza = function () {
//     return new Promise(function (resolve, reject) {
//         if (false) {
//             resolve("This is true"); // then() will be called 
//             console.log("Whats up")
//         } else {
//             reject("This is false"); // catch() will be called 
//             console.log("Am error")
//         }
//     })
// }

// giveMePizza()
//     .then(data => console.log(data))
//     .catch(err => console.error(err));// Asychn

// console.log('I will run immediately after calling giveMePizza() and before any result arrives');// Synch

// let promise = new Promise(function(resolve, reject){
//     // this will run immediately after the Promise constructor is called
//     setTimeout(() => resolve('Done'), 1000);
// });
// // console.log(promise.then(data => console.log(data)));

// const promise = new Promise((resolve, reject) => {
//     console.log(`Promise starts`)//Synch --- this will be first 
//     resolve(`Promise result`)// asynch
//     console.log(`Promise ends`)//synch  -- second 
// })
// console.log(`Code starts`)//synch  -- third
// promise.then(res => console.log(res)) // -- fifth
// console.log(`Code ends`)//synch  -- fourth

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('Promise results') }, 0); // resolve after 1 second
// });
// console.log('Code starts');
// promise.then(console.log) // After one second 
// console.log('I love JS'); 

// let promise = new Promise(function (resolve, reject) {
//     const random = Math.random();
//     console.log('random: ', random);

//     if (random > 0.5) {
//         setTimeout(() => resolve(" done!"), 1000);
//     } else {
//         setTimeout(() => reject(new Error(" Whoops!")), 1000)
//     }
// });
// promise.then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Promise ready!")); 

// console.log('start');
// async function f() {
//     return 1;
// }
// f().then(console.log);
// console.log('end');

// console.log('start'); 
// async function foo() {
//  return 'Done';
// }
// async function bar() {
// console.log('inside bar - start'); 
// let result = await foo();      
// console.log(result); // " do n e ! "  
// console.log('inside bar - end');
// }
// bar();
// console.log('end'); 

// console.log('start'); 
// process.nextTick(() => { 
//     console.log("this is process.nextTick 1"); 
//     setTimeout(() => console.log("this is setTimeout 1"), 0); 
// }); 
// process.nextTick(() => console.log("this is process.nextTick 2")); 
// setImmediate(() => console.log("this is setImmediate")); 
// setTimeout(() => console.log("this is setTimeout 2"), 0); 
// console.log('end'); 
console.log('start');
process.nextTick(()=>console.log('process1'));
setTimeout(()=>console.log('timeout1'));
process.nextTick(()=>console.log('process2'));
setImmediate(()=>console.log('immediate1'));
setTimeout(()=>console.log('timeout2'));
process.nextTick(()=>{
    setTimeout(()=>console.log('process3 with timeout'), 0);
});
let promise= new Promise((resolve, reject)=>{
    console.log('executor');
    resolve('ok');
})
promise.then((result)=> console.log('Resolve =>' + result));
console.log('end');