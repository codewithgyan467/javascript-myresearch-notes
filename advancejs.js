// //Event propagation
// const parentId="Gyandeep";
// const ChildId="Duwarah"
// const parentCall=()=>
// {
//     alert('Parent div Call');
// }
// const childCall=()=>
//     {
//         alert('Child div Call');
//     }
//     parentId.addEventlistener('click',parentCall,true);
//     ChildId.addEventlistener('click',childCall,true);
const add=(a,b)=>{
    return a+b;
}
console.log(add(5,2));
const subs=(a,b)=>{
    return Math.abs(a-b);
}
const mult=(a,b)=>{
    return a*b;
}
const calculator=(num1,num2,operator)=>{
    return operator(num1,num2);
}

console.log(calculator(5,2,mult));//higher order function
//hoisting is avoided in es6 where console.log(value) is first declared then variable is made for eg:-
// console.log(value) ;
//let value=20;
//lexical values and scxopping
let x='hello guys';
const first=()=>{
    let y='How are you';
    const second=()=>{
        let z='My Name is Gyandeep';
        console.log(x+y+z);
    }
    second();
}
first();
//closures in javascript
const outerFun=(a) =>{
    let b = 10;
    const innerFun = ()=>{
        let sum = a+b;
        console.log(`sum is ${sum}`);
    }
    return innerFun;//stores a vlue in the closure somewhere in the memory
    }
    let checkclosure=outerFun(5);
    checkclosure(5);
    
    
    //asyncronous programming
    const fun2=()=>{
setTimeout(()=>{
    console.log('Function 2 called');
},2000);
    }
    const fun1=()=>{
        console.log('function 1 is called');
        fun2();
        console.log('Function 1 is called Again');
    }
    fun1();
//Event loop
function sum(num1){return function(num2){return function(num3){//const sum=(num1)=>(num2)=>(num3)=> console.log(num1,num2,num3);
            console.log(num1,num2,num3);
        }
    }
}
sum(5)(3)(7);
//eventloop using set time(call back hell)
setTimeout(()=> {
    console.log('1st work is Done');
    setTimeout(()=> {
        console.log('2nd work is Done');
        setTimeout(()=> {
            console.log('3rd work is Done');
            setTimeout(()=> {
                console.log('4th work is Done');
                setTimeout(()=> {
                    console.log('5th work is Done');
                    setTimeout(()=> {
                        console.log('6th work is Done');
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
//api visulization in js
//beforebegin<>afterbegin,beforeend</>afterend
//conversion of json 
var my_object={key_1:"abcd",key_2:true,key_3:5};
var my_object_as_string = JSON.stringify(my_object);//converts into json api
typeof(my_object_as_string);
console.log(my_object_as_string);
//json to object
var object_as_string_as_object=JSON.parse(my_object_as_string);//.parse is used to convert json into object
console.log(object_as_string_as_object);

// //changing html to json
// const setHeader={
//     headers:{
//         Accept:"application/json"
//     }
// }
// fetch('https://',setHeader)
// .then(res)=>
// {
//     console.log(res.JSON);
// }).catch((error)=>{
//     console.log(error);
// })


//api using async-
//const generateJokes= async() => {  //using async
// const setHeader={
//     headers:{
//         Accept:"application/json"
//     }
// }
//const res = await fetch('https://',setHeader);
//const data = await res.json();
//anime.innerhtml=data.name;//anime name and other details
//}.catch(err)=>
// {
//     console.log(`the error is ${err}`);
















































































































