const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tableTD = document.getElementsByTagName(tbody);
console.log(tableTD);


function sodokoSolver(data) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == '.') {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = `${k}`;
            if (sodokoSolver(data)) {
             return true;
            } else {
             data[i][j] = '.';
            }
           }
         }
         return false;
       }
     }
   }
   return true;
  }