'use strict';

function rot13(str) {
  let newStr = ""
  str.split("").forEach((c) => newStr += (/[A-Z]/).test(c) ? String.fromCharCode((c.charCodeAt() - 65 + 13) % 26 + 65) : c)
  return newStr;
}

rot13("SERR PBQR PNZC");