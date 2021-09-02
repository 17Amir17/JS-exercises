'use strict';

function rot13(str) {
  let newStr = ""
  str.split("").forEach((c) => newStr += !(/[a-zA-Z]/).test(c) ? c : String.fromCharCode((c.charCodeAt() - 65 + 13) % 65 % 26 + 65))
  console.log(newStr)
  return newStr;
}

rot13("SERR PBQR PNZC");
