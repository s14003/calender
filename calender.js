function converCalender(year) {

}
function convertWarekiToSeireki(year) {
  if (year > 0 &&  ) {//heisei
    return (1988 + year) + "年";
  } else if (year > 0 && ) { //syouwa
    return (1925 + year) + "年";
  } else if (year > 0 && ) {//taisyou
    return (1912 + year) + "年";
  } else {
    return;
  }
}

function convertSeirekiToWareki(year) {
  if (year > 1988) {
    return "平成" + (year - 1988) + "年";
  } else if (year > 1925) {
    return "昭和" + (year - 1925) + "年";
  } else if (year > 1912) {
    return "大正" + (year - 1912) + "年";
  } else {
    return;
  }
}

console.log(convertSeirekiToWareki(1988));//平成27年
//console.log(convertWarekiToSeireki(27));//2015年
