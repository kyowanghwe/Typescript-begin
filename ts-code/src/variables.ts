// Variables and Data Types
var n1: number = 10;
console.log(n1);

var s1: string = "string test";
var s2: string = `string test2`;
console.log(s1);
console.log(s2);

var b1: boolean = true;
var b2: boolean = false;
console.log(b1);
console.log(b2);

var a1: any = {
    productId: 1,
    productName: "abc"
}
a1.productName = "xyz";
console.log("a1: " + a1);
a1 = 5;
console.log("a1: " + a1);

var array1:Array<String> = ["AngularJS", "NodeJS", "ReactJS"];
console.log(array1);
console.log(array1[0]);