const getPairFromArray = (char, bracketsConfig) => {
  return bracketsConfig.find(bracketsArr => bracketsArr.includes(char));
}

module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const pair = getPairFromArray(str[i], bracketsConfig);
    if (pair == null) return false;
    if (pair.includes(str[i]) && pair[0] === pair[1]) {
      pair.includes(stack[stack.length - 1])
        ? stack.pop()
        : stack.push(str[i]);
  
    } else if (str[i] === pair[0]) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === pair[0]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

