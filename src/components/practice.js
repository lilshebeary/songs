

// function twoNumberSum(array, targetSum) {
//     array.sort((a, b) => {
//       return a - b;
//     });

//     left = array[0]
//     right = array.length - 1

//     while (left < right) {
//       currentSum = left + right
//       if(currentSum === targetSum){
//         return [right, left];
//       }
//       else if(currentSum < targetSum) {
//         left += 1;
//       }
//         else if (currentSum > targetSum){
//           right -= 1
//         }
          
//     }
                
//   }
// function twoNumberSum(array, targetSum) {
//     for (let i = 0; i < array.length - 1; i++) {
//       let firstNum = array[i]
//       for (let j = i + 1; j < array.length; j++)  {
//         console.log(j)
//        let secondNum = array[j]
//         if(i + j === targetSum){
//           return [firstNum, secondNum]
//         } 
//       }
//     }
//     return [];
  
//   }