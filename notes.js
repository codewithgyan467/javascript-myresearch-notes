var name="Gyandeep";
var age=26;
var myPhoneNumber=9127155033;//if wrong then nan
var x=6;
var y=6;


console.log("hello world");
console.log(name);
console.log(age);
console.log(10+"20");
console.log(10+20);
console.log(10-"20");//its a bug
console.log("java"+"script");
console.log("java"-"script");
console.log(true+true);
console.log(true+false);


//phone number validation
console.log(isNaN(myPhoneNumber))
//if phone number wrong for validation:-
if(isNaN(myPhoneNumber)){
    console.log("please Enter a valid phone number")
}



//operators:-
console.log(x==y);
console.log(x==y);
console.log(x/y);
console.log(x++);
console.log(++x);
console.log(x--);
console.log(--x);
console.log(x>y);
console.log(x<y);
console.log(x=y);
console.log(x<=y);
console.log(x===y);
console.log(x==y);
console.log('name'===y);



//if else
var tomr="Rain";
if(tomr=="Rain"){
    console.log('take a raincoat');
}else{
    console.log('No need Raincoat');
}
//leap year
var year=2024;
debugger;
if(year % 4===0){
    if(year%100===0){
if(year % 400=== 0){
    console.log("This is a leap year");
}
    }
else{
    console.log("Its is leap year");
}
}else{
    console.log("not a leap year");
}


//conditioinal
var age=17;
console.log((age>=18) ? "you can Vote" : "you can't vote"
);

//multiplication table
for(let num=1;num<=10;num++){
    let tableOf=12;
    console.log(`${tableOf} * ${num} =${tableOf * num}`);
}
const sum = () =>{
   let a=2;b=3;
  
    return `The sum is ${a+b} and the sub of ${(c=7)-(d=6)}`;
  
}
console.log(sum());



//array
var friend = ['bikrom','gautam','himadri','anuska'];
console.log(friend[friend.length]);
for (var i=0;i<friend.length;i++){
    console.log(friend[i]);
}
//for in loop(total number of elements in array)
for(let elements in friend){
    console.log(elements);
}
//for off loop(name of the elements)
for(let elements of friend){
    console.log(elements);
}
//for each loop(both to show index number and array elements)
friend.forEach(function(element,index,array){
    console.log(element+" "+index+" "+array);
});
//add data at last in an array push() 
friend.push('Himangshu');
console.log(friend);
//add data at the begining in the array unshift
friend.unshift('Rittick');
console.log(friend);
//remove elements from array pop()
console.log(friend);
console.log(friend.pop());
console.log(friend);
//remove first element from array shift()
console.log(friend);
console.log(friend.shift());
console.log(friend);
//add new element in array splice()
friend.splice(friend.length,0,"Rittick");
console.log(friend);
//updating to capital letter
friend.splice(1,1,'Gautam');
console.log(friend);
//updating elements without knowing index but automatically finding index 
const indexOfFriend=friend.indexOf('anuska');{

    if(indexOfFriend != -1){
const updateFriend = friend.splice(indexOfFriend,1,'Anuska');
console.log(friend);
    }else{
        console.log('No such Data Found');
    }

}

//deleting element from and array
const indexOfFriend1=friend.indexOf('himadri');{

    if(indexOfFriend != -1){
const updateFriend = friend.splice(indexOfFriend1,1);
console.log(friend);
    }else{
        console.log('No such Data Found');
    }

}

//data can also be deleted from an entire row just by using friend.splice(indexOfFriend1,infinity);but i will not do this coz i need the elements
//map method 
friend.map(( curElm,index,arr )=>{
    
    return `index no =${index} and the value is${curElm} belong to ${arr}`;

}
)
console.log(friend);

//square root finding
let arr=[25,36,49,64,81];
let arrSqr=arr.map((curElm)=>{
         return Math.sqrt(curElm);
})
console.log(arrSqr);
let arrSqr2=arr.map((curElm)=>
 curElm*2).filter((curElm)=> curElm >10);

console.log(arrSqr2);
//reduce methode
let sum2 =arr.reduce((accumulator,curElm,index,arr)=>{
    return accumulator+=curElm;
 
})
console.log(sum2);
// map filter and reduce mixed-
let arrsqr3 = arr.map((curElm)=>curElm*2).filter((curElm)=> curElm>10).reduce((accumulator,curElm)=>
{
    return accumulator+=curElm;
});
    console.log(arrsqr3);
//converting 2d and 3d array into one dimensional
const arr2= [
['zone_1','zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6']
];

let flatArr= arr2.reduce((accumulator,currVal)=>{
    return accumulator.concat(currVal);
})
console.log(flatArr);
//escape character for writting  " "
let anysentence ="i am Gyandeeep \"javascript user\" from ASSAM.";
console.log(anysentence);
//alrternatice methods
let anysentence2 ='i am Gyandeeep "javascript user" from ASSAM.';
console.log(anysentence2);
//index number finding from left to right
console.log(anysentence.indexOf("e"));
//index number finding from backwards
console.log(anysentence.lastIndexOf("e"));
//searching for a string position in a string
let sData=anysentence.search("ASSAM");
console.log(anysentence);
console.log(`The word "ASSAM" is found in the position ${sData}`);
var str="Apple,Bananna,kiwi";
let res = str.slice(0,4);
console.log(res);//output is appl because the splice doesnot include last end argument
let res2 = str.slice(7,-2);//-2just removes last two digits
console.log(res2);
//display only 280 characters(this algorithm used in twitter or X)
let myTweets="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a nam ad recusandae optio praesentium velit. Libero nulla sapiente, exercitationem quos doloremque, necessitatibus, voluptate excepturi magni velit iure modi accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a nam ad recusandae optio praesentium velit. Libero nulla sapiente, exercitationem quos doloremque, necessitatibus, voluptate excepturi magni velit iure modi accusantium.";
let myActualTweet = myTweets.slice(0.280)
console.log(myActualTweet);
//displaying elements in string
let res3 = str.substring(0,4);//same as str.slice but it dosent accept negative indexes for eg(0,-4)
console.log(res3);
//how to replace a string in a string
let replaceData=str.replace('kiwi','Guava');//str="Apple,Bananna,kiwi";
console.log(replaceData);
//how to find which character is at the specific position
let game="HELLOW I AM GYANDEEP";
console.log(game.charAt(9));//it returns specific character 
console.log(game.charCodeAt(9));//but this returns the character unique number or unicode(returns UTF-16 code range from 0-65535)
let lastGameNum=game.length - 1;//-1 because .length always reservs a free space at last 
console.log(game.charCodeAt(lastGameNum));
//now displaying character on the specific index or position
console.log(game[4]);//let game="HELLOW I AM GYANDEEP",ans:- O;
//to capital or small letter
let letter="gyanBhai";
console.log(letter.toUpperCase());//capital
console.log(letter.toLowerCase());//small
//joining two string variables
let fLetter="Gyan";
let lLetter="Bhai";
console.log(fLetter.concat(lLetter));
console.log(fLetter + lLetter);
console.log(`${fLetter}         ${lLetter}`);//also counts space but not the avove methods gives space
//using trim basically used in contact us or feedback for sorting or reducing the user reviews notes
let review="           Hi I AM GYANDEEP                          ";
console.log(review);
console.log(review.trim());//remove the useless spaces from first and last
// splitting values 
var txt="g,y,a,n,d,e,e,p | is great";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split(" | "));
//Date and time in javascript(7 specific formats year,month,day,hour,minute,second,millisecond)
var d = new Date("october 9,2024 11:13:00");
console.log(d.toDateString());
var da= new Date(1728453965512);
console.log(da.toDateString());
var da2= new Date(1728453965512*2);
console.log(da2.toDateString());
//destructuring dates
const curDate=new Date;
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());
//milliconds return cince january 1,1970
console.log(curDate.getTime());
console.log(curDate.getHours());
console.log(curDate.getMinutes());
console.log(curDate.getSeconds());
console.log(curDate.getMilliseconds());
//how to set indivual time
console.log(curDate.setTime());
console.log(curDate.setHours());
console.log(curDate.setMinutes());
console.log(curDate.setSeconds());
console.log(curDate.setMilliseconds());
//math pi
console.log(Math.PI);
//round off
let num=10.69;
console.log(Math.round(num));
//power
console.log(Math.pow(69,69));
//square root
console.log(Math.sqrt(25));
//only to return positive integer
console.log(Math.abs(-55));
//returns round up or increment directly to its nearest integer not like round()which returns values checking.5 and .4
console.log(Math.ceil(5.5));
//returns the value in its original form
console.log(Math.floor(4,7));
//check the minimum number
console.log(Math.min(0,150,40,-8,-780));
//checks the maximum number
console.log(Math.max(0,150,40,-8,-780));
//randomnumbers
console.log(Math.random()*100)
console.log(Math.floor(Math.random()*100))//roundoff number
//returns the integer part of a number
console.log(Math.trunc(4.5));
//$0.style.color="pink"
//document.vody.style.background="pink";
//alert

//dom
//document.body.child
//document.body.firstElementChild
//child.style.color="red"

//OOPS in javascript 
//creating object
let bioData={
    nyName:"Gyandeep Duwarah",
    myAge:"25",
    getData:function(){           //using munction(methods)in oops
console.log(`My name is ${bioData.nyName}and my age is ${bioData.myAge}`);
    }
}
console.log(bioData.nyName);
//using this comand in objects
const obj ={
    myAge:21,
    myName(){
        console.log(this.myAge);
    }

}
obj.myName();//useless in fat arrow function because of es6javascript
const obj2={
    myName:{
        realName:"Gyandeep",
        surname:"Duwarah",

    },

    myAge:21,
    getData(){
        console.log(`My name is ${this.myName.realName}and my surname is ${this.myName.surname} and my age is ${this.myAge}`);
        
    }
}
obj2.getData();
//array destructuring
const myBiodata=['Gyandeep',21,'Duwarah']
let [myFname,myAge,myLname,myDegree="Bsc IT"]= myBiodata;
console.log(myFname);
console.log(myDegree);//dynamic value included
//objec destructuring
// let {myFname,myLname,myAge,myDegree}=myBiodata;
// console.log(myAge);
//how to get a dynamic value or key in object
let myName= "Gyandeep";
let myAge1=21;
const myBio={
    [myName] : "Hello how are you",
    [18+3] : "Is my age",//allows us to do mathematical operations
    myAge1,
    myName

}
console.log(myBio);
//spread operator add more values
const color = ['red','green','blue','white'];
const myFavColor =[...color,'yellow','black'];
console.log(myFavColor);
console.log(color.includes('green'));//es7 features
console.log(color.includes('purple'));//es7features

//expo operator **
console.log(2**3);
//ES8 Features
let name1= "Gyandeep".padStart(12);//padding like css from end it uses padEnd()
console.log(name1);
//convereting arrays
const person={
    name:"Gyandeep",
    age:21,

}
console.log(Object.entries(person));
//ES8 2018 
const person1={name:'Gyandeep',age:21};
const sperson={...person1}//person also get the value of the person1
console.log(person1);
console.log(sperson);
// as we say .reduce method can only make arrays into single array but not nested array but here using.flat we can overcome this
console.log(arr2.flat());//even nested or dual arrays are converted into single but only till one level 
