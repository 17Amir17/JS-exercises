'use strict';

function rot13(str) {
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rot13ABC = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let newStr = ""
  str.split("").forEach((c) => newStr += abc.indexOf(c) === -1 ? c : rot13ABC[abc.indexOf(c)])
  return newStr;
}

rot13("SERR PBQR PNZC");
