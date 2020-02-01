GetMiddle.prototype.getLetter = function(str) {

  var middle = Math.floor(str.length / 2)
  if(str.length % 2 === 0) {
    return str.charAt(middle -1) + str.charAt(middle)
  } else {
    return str.charAt(middle)
  }
}