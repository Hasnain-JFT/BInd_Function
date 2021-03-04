let name1={
    firstName: 'Hasnain',
    lastName: 'Abidi'
}
// console.log(name1);
let printName=function (hometown , state , country) {
    console.log(this.firstName +" "+ this.lastName +", You are right on time , "+  "I am from " + hometown + " , " + state+" , "+country);
}

let printMyName=printName.bind(name1, "Allahabad" , "Uttar Pradesh");
printMyName("Hindustan");


Function.prototype.myBind=function(...args){
    let obj=this;
    let params=args.slice(1);
    return function(...args1){
        obj.apply(args[0],[...params,...args1]);
        
    }
}

printMyName2=printName.myBind(name1 , "Allahabad" , "Uttar Pradesh");
printMyName2("India");