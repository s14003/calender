function converCalender(year) {

}

function convertWarekiToSeireki(year) {
  //if (year > 0 && year < 28) {
  //  return (1988 + year) + "年";
  //} //else {
  //  return;
  //}

  var value = year + 1988;
  return value + "年";
}

function convertSeirekiToWareki(year) {

 // if (year > 1988) {
 //  return "平成" + (year - 1988) + "年";
 // } //else if (year > 1925) {
 //   return "昭和" + (year - 1925) + "年";
 // } else if (year > 1912) {
 //   return "大正" + (year - 1912) + "年";
 // } else {
 //   return;
 // }

  var value = year - 1988;
  return "平成"  + value + "年";
}


console.log(convertWarekiToSeireki(27));//2015年
console.log(convertSeirekiToWareki(2015));//平成27年
