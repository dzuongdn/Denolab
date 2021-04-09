// tuple
let x:[string,number,boolean?] = ["hi",10,true];

// enum
enum Status {C = "a",P="b",F=300};
let stat: Status = Status.C;

// any assertion ep kieu
let a:any = "hello";
console.log((<string>a).length);

// interface obj
interface CourseInterface {
    name: string,
    time: number,
    free?: boolean
};
let obj1:CourseInterface;
obj1 = {
    name:"ES6",
    time:10
};
let obj2: CourseInterface = {
    name:"TS",
    time:6,
    free:true
};

console.log(obj1);
console.log(obj2);
console.log(`obj1: ${obj1.free}--- obj2: ${obj2.free}`)

// Interface Array

interface CourseList {
    [index:number]: string;
}

let course: CourseList = ["Java","Javascript","TypeScript"];
console.log(course);

// param return function

function userinfo(name:string = "John", age?:number){
    if (age) return `My name is ${name}, I am ${age} years old.`;
    if (name === null) return `My name is Dzung`;
    return `My name is ${name}.`;
};
console.log(userinfo());
console.log(userinfo("Dz"));
console.log(userinfo("Dzuong",40));
console.log(userinfo(null,30));

// Param 2
function totallenght(x:(string | any[]), y:(string[] | string)): number{
    return x.length + y.length;
}

console.log(totallenght('abc',['123']));  //4
console.log(totallenght([1,"abc","def"],['123',"xyz"])); // 5
console.log(totallenght([1,"abc","qwer"],"123")); //6

// rest param

function showStudentInfo(name:string, ...course:string[]):string{
    console.log(name + " study " + course);
    return name + " study " + course.join(" and ");
}

console.log(showStudentInfo("Dzuong","Typescript"));
console.log(showStudentInfo("Dzung","ES6","JavaScript","C++"))

// cac loai function

function userInfo1(name:string,age:number):string{
    return `My name is ${name}, ${age} years old`;
}

let userInfo2 = function(name:string,age:number):string{
    return `My name is ${name}, ${age} years old`;
}

let userInfo3: (name:string,age:number) => string = 
    function(pname, page){
        return `My name is ${pname}, ${page} years old`;
    }

    console.log(userInfo1("Dz",23));
    console.log(userInfo2("Dz",23));
    console.log(userInfo3("Dz",23));

    // => function

    let f1 = function(i:number):number{return i*i};
    let f2 = function(i:number){return i*i};
    let f3 = (i:number):number => {return i*i};
    let f4 = (i:number)=>{return i*i};
    let f5 = (i:number)=>i*i;

    // Overload
    
    /* code sau se err
    function func1(x: string):number{
        return 100;
    }
    function func1(x:number):string{
        return "abc";
    }
    */
    function func1(x: string):number;
    function func1(x: number):string;
    function func1(x: boolean):boolean;
    function func1(x: any) : any{
        if (typeof x == "number"){
            return 100;
        }
        if (typeof x == "string"){
            return "abc";
        }
        return true;
    }

    console.log(func1(123));
    console.log(func1("123"));
    console.log(func1(false));
