function findPAli(str) {
    if (str.length === 1) {
      return true;
    }
  
    if (str[0] === str[str.length - 1]) {
      return findPAli(str.substring(1, str.length - 1));
    }
  
    return false;
  }
  
  let str = "malayalam";
  console.log(findPAli(str));
  