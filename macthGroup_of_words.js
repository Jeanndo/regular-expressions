let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/g;
let result = myRegex.test(myString);
 
//check if Eleanor|Franklin Roosevelt are included in a string 