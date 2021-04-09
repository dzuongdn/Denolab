// tuple
var x = ["hi", 10, true];
// enum
var Status;
(function (Status) {
    Status["C"] = "a";
    Status["P"] = "b";
    Status[Status["F"] = 300] = "F";
})(Status || (Status = {}));
;
var stat = Status.C;
// any assertion ep kieu
var a = "hello";
console.log(a.length);
;
var obj1;
obj1 = {
    name: "ES6",
    time: 10
};
var obj2 = {
    name: "TS",
    time: 6,
    free: true
};
console.log(obj1);
console.log(obj2);
console.log("obj1: " + obj1.free + "--- obj2: " + obj2.free);
var course = ["Java", "Javascript", "TypeScript"];
console.log(course);
// param return function
function userinfo(name, age) {
    if (name === void 0) { name = "John"; }
    if (age)
        return "My name is " + name + ", I am " + age + " years old.";
    if (name === null)
        return "My name is Dzung";
    return "My name is " + name + ".";
}
;
console.log(userinfo());
console.log(userinfo("Dz"));
console.log(userinfo("Dzuong", 40));
console.log(userinfo(null, 30));
// Param 2
function totallenght(x, y) {
    return x.length + y.length;
}
console.log(totallenght('abc', ['123'])); //4
console.log(totallenght([1, "abc", "def"], ['123', "xyz"])); // 5
console.log(totallenght([1, "abc", "qwer"], "123")); //6
// rest param
function showStudentInfo(name) {
    var course = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        course[_i - 1] = arguments[_i];
    }
    console.log(name + " study " + course);
    return name + " study " + course.join(" and ");
}
console.log(showStudentInfo("Dzuong", "Typescript"));
console.log(showStudentInfo("Dzung", "ES6", "JavaScript", "C++"));
// cac loai function
function userInfo1(name, age) {
    return "My name is " + name + ", " + age + " years old";
}
var userInfo2 = function (name, age) {
    return "My name is " + name + ", " + age + " years old";
};
var userInfo3 = function (pname, page) {
    return "My name is " + pname + ", " + page + " years old";
};
console.log(userInfo1("Dz", 23));
console.log(userInfo2("Dz", 23));
console.log(userInfo3("Dz", 23));
// => function
var f1 = function (i) { return i * i; };
var f2 = function (i) { return i * i; };
var f3 = function (i) { return i * i; };
var f4 = function (i) { return i * i; };
var f5 = function (i) { return i * i; };
function func1(x) {
    if (typeof x == "number") {
        return 100;
    }
    if (typeof x == "string") {
        return "abc";
    }
    return true;
}
console.log(func1(123));
console.log(func1("123"));
console.log(func1(false));
