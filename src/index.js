module.exports = function reverse (n) {
  var i = Math.abs(n);
    var result = 0;
    while(i>0)
    {
        result = result*10 + i%10;
        i = (i - i%10)/10;
    }
  
    return result;
}
