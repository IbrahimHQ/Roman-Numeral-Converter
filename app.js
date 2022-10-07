function convertToRoman(num) {
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let result = '' //converted string, begins empty
  for (var i = 0; i < roman.length; i++) { //checks largest arabic num and its place in array
    while (num >= arabic[i]) {
      result = result + roman[i] //adds corresponding roman num to string
      num = num - arabic[i] //subtracts added arabic num from remaining iterations
    }
  }
  return result;
}

//tests
//1. convertToRoman(2) should return the string II.
//2. convertToRoman(3) should return the string III.
//3. convertToRoman(4) should return the string IV.
//4. convertToRoman(5) should return the string V.
//5. convertToRoman(9) should return the string IX.
//6. convertToRoman(12) should return the string XII.
//7. convertToRoman(16) should return the string XVI.
//8. convertToRoman(29) should return the string XXIX.
//9. convertToRoman(44) should return the string XLIV.
//10. convertToRoman(45) should return the string XLV.
//11. convertToRoman(68) should return the string LXVIII
//12. convertToRoman(83) should return the string LXXXIII
//13. convertToRoman(97) should return the string XCVII
//14. convertToRoman(99) should return the string XCIX
//15. convertToRoman(400) should return the string CD
//16. convertToRoman(500) should return the string D
//17. convertToRoman(501) should return the string DI
//18. convertToRoman(649) should return the string DCXLIX
//19. convertToRoman(798) should return the string DCCXCVIII
//20. convertToRoman(891) should return the string DCCCXCI
//21. convertToRoman(1000) should return the string M
//22. convertToRoman(1004) should return the string MIV
//23. convertToRoman(1006) should return the string MVI
//24. convertToRoman(1023) should return the string MXXIII
//25. convertToRoman(2014) should return the string MMXIV
//26. convertToRoman(3999) should return the string MMMCMXCIX
