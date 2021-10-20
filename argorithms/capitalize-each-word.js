function titleCase(str) {
    // let capitalizedStr = "";
    // let separatedStr = str.split(" ");
    //   for(let i =0;i<separatedStr.length;i++){
    //     capitalizedStr+= separatedStr[i].charAt(0).       toUpperCase()+separatedStr[i].slice(1).toLowerCase()+" "
    //   }
    //  console.log(capitalizedStr)
    //   return capitalizedStr.join;
    
    let SplitedStr = str.toLowerCase().split(" ");
     let captilized = SplitedStr.map((word)=>{
       return word.replace(word.charAt(0),word.charAt(0).toUpperCase());
     })
     return captilized.join(" ");
    }
    
    titleCase("I'm a little tea pot");