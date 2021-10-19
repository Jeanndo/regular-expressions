let repeatNum = "600 600 600";
let reRegex = /^(\d+)(\s)\1\2\1$/; 
let result = reRegex.test(repeatNum);