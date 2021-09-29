"use strict";
const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  console.log("got to convert String")
  debugger;
  //loop through the string array
  let nums = [];
  for (let strNum of strNums){
    if(isNaN(Number(strNum))){
        throw new BadRequestError();
    } else {
      nums.push(Number(strNum));
    }
  }
  return nums;
}


module.exports = { convertStrNums };