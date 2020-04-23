// 翻页时间间隔
var INTERVAL = 2000;
var RANDOM_START = 2000;
var RANDOM_GAP = 2000;
var lastLen = 0;
// 当前卡片数量
var geekCardArr = document.getElementsByClassName('geek-info-card');

randomTimeScroll();

function randomTimeScroll() {
  var geekCardLen = geekCardArr.length;
  if(geekCardLen > lastLen) {
    var randomTime = RANDOM_START + parseInt(Math.random() * RANDOM_GAP);
    console.log(randomTime + 'ms后第' + parseInt(lastLen / 15 + 2) + '次翻页，' + '当前数据条数：' + geekCardLen);
    scrollToLastCard(geekCardArr[geekCardLen - 1]);
    lastLen = geekCardLen;
    setTimeout(randomTimeScroll, randomTime);
  } else {
    console.log('到底了~')
  }
}

// function runIt() {
//   var intId = setInterval(function() {
//     var geekCardArr = document.getElementsByClassName('geek-info-card');
//     var geekCardLen = geekCardArr.length;
//     // console.log(geekCardLen, lastLen)
//     if(geekCardLen > lastLen) {
//       console.log('翻页' + lastLen / 15 + '次，' + '数据条数：' + geekCardLen);
//       scrollToLastCard(geekCardArr[geekCardLen - 1]);
//       lastLen = geekCardLen;
//     } else {
//       console.log('到底了~')
//       clearInterval(intId);
//     }
//   }, INTERVAL);
// }

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
  window.scrollTo({
    top: lastCardTop - 200,
    behavior: 'smooth'
  });
  // console.log(lastCardTop);
}
