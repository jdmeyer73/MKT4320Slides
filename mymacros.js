remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.imgwh = function (number1, number2) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + number1 + 'px; height: ' + number2 + 'px;" />';
};

remark.macros.imgul = function (number1, number2) {
  var url = this;
  return '<img src="' + url + '" style="position: absolute; top: ' + number1 + 'px; left: ' + number2 + 'px;" />';
};

remark.macros.imgup = function (number1) {
  var url = this;
  return '<img src="' + url + '" style="position: absolute; top: ' + number1 + 'px;" />';
};

remark.macros.txtul = function (number1, number2, number3) {
var txt = this;
  return '<p style="position: absolute; top: ' + number1 + 'px; left: ' + number2 + 'px; font-size: ' + number3 + '%;">' + txt + '</p>';
};