
let isValidPassword = function (password){
    //2nd Method 
    return password.length > 8 && password.includes('password')

    // if (password.length > 8 && password.includes('password'))
   // { 
       // return true
    //}
    //else {
      //  return false
    //}
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('Rahul@1234'))
console.log(isValidPassword('password@123'))
