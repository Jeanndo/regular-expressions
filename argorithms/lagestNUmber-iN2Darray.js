function largestOfFour(arr) {
    let arrwithMaxNUm = [];
    for(let i=0;i<arr.length;i++){
      let lagestArr= arr[i][0];
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>lagestArr){
          lagestArr = arr[i][j];
        }
      }
      arrwithMaxNUm[i] = lagestArr;
    }
    return arrwithMaxNUm;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
  //output =[25, 7, 34, 48]