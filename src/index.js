module.exports = function check(str, bracketsConfig) {
  let sum = 0;
  let up = [];
  let down = [];
  let squance = [];
  let oper = false;
  for (type of bracketsConfig){
    up.push(type[0]);
    down.push(type[1]);
  };

  for (let i = 0; i < str.length; i++){
    oper = false;
    if (up.indexOf(str[i]) !== -1) {
      if (up[up.indexOf(str[i])] === down[up.indexOf(str[i])]){
        if (squance[squance.length - 1] === str[i]){
        oper = false;
        }else{
        oper = true;
        squance.push(down[up.indexOf(str[i])]);
        sum++;   
        };
      } else{
      squance.push(down[up.indexOf(str[i])]);
      sum++;
      }
    }
    if (down.indexOf(str[i]) !== -1 && !oper){
      sum--;
      if (sum < 0) {
        return false;
      }
      if (squance[squance.length - 1] === str[i]) {
        squance.splice(squance.length - 1, 1);
      }else{
        return false;
      }

    }
    
    
  }
  return (sum === 0)? true: false;
}
