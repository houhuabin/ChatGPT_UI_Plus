

console.log("Test init.............................");


var observer = new MutationObserver(function (mutations) {


  var allChatHisElements = findAllChatHisElements();


  if (allChatHisElements.length) {
    //console.log(elements.length);
    var todayElement = findTodayElement();
    addArrowIcon(todayElement);
    allChatHisElements.forEach(function (element) {
      var textContent = element.childNodes[0].nodeValue.trim();
    });
    observer.disconnect(); // 如果不再需要观察，断开连接
  }
});

observer.observe(document.body, {
  childList: true, // 观察直接子节点的更改
  subtree: true,   // 观察所有后代节点的更改
  attributes: false
});

var newChatElement = findNewChatElement();

insertFold(newChatElement);

addContainerAfterNewChat(newChatElement);


