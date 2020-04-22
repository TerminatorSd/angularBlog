// 翻页时间间隔
var INTERVAL = 3000;
lastLen = 0;
runIt();


function runIt() {
  var intId = setInterval(function() {
    var geekCardArr = document.getElementsByClassName('geek-info-card');
    var geekCardLen = geekCardArr.length;
    // console.log(geekCardLen, lastLen)
    if(geekCardLen > lastLen) {
      console.log('翻页' + lastLen / 15 + '次，' + '数据条数：' + geekCardLen);
      scrollToLastCard(geekCardArr[geekCardLen - 1]);
      lastLen = geekCardLen;
    } else {
      console.log('到底了~')
      clearInterval(intId);
    }
  }, INTERVAL);
}

function getElementTop(element) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}

function scrollToLastCard(card) {
  var lastCardTop = getElementTop(card);
  window.scrollTo(0, lastCardTop - 200);
  // console.log(lastCardTop);
}
