import { useDispatch } from 'react-redux';

console.log("Test init.............................");

function addArrowIcon(todayElement) {
    const divElement = document.querySelector('div[data-projection-id="4"]');
    divElement.style.display = 'flex';
    divElement.style.alignItems = 'center';

    if (!todayElement) {
        console.log("Today element not found.");
        return;
    }

    // 创建箭头图标元素
    var arrowIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrowIcon.setAttribute("width", "16");
    arrowIcon.setAttribute("height", "16");
    arrowIcon.setAttribute("fill", "currentColor");
    arrowIcon.setAttribute("viewBox", "0 0 16 16");
    arrowIcon.classList.add("bi", "bi-arrow-right");

    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-5.147-5.146a.5.5 0 0 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z");
    arrowIcon.appendChild(path);

    // 在Today元素的前面插入箭头图标
    todayElement.parentNode.insertBefore(arrowIcon, todayElement);

    // 在Today元素的前面插入箭头图标
    todayElement.parentNode.insertBefore(arrowIcon, todayElement);

    // 为箭头添加点击事件监听器
    arrowIcon.addEventListener('click', function () {
        var list = document.querySelector('.today-list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
            this.className = 'fas fa-arrow-right'; // Change to right arrow
        } else {
            list.style.display = 'none';
            this.className = 'fas fa-arrow-down'; // Change to down arrow
        }
    });
}


function findTodayElement() {
    var h3Elements = document.querySelectorAll('h3.h-9.pb-2.pt-3.px-3.gizmo\\:px-2.text-xs.text-gray-500.font-medium.text-ellipsis.overflow-hidden.break-all.bg-gray-50.gizmo\\:bg-white.dark\\:bg-gray-900.gizmo\\:dark\\:bg-gray-800');

    for (var i = 0; i < h3Elements.length; i++) {
        if (h3Elements[i].textContent.trim() === "Today") {
            return h3Elements[i]; // Return the desired <h3> element with text "Today"
        }
    }

    return null; // Return null if no matching element is found
}




var observer = new MutationObserver(function (mutations) {
    // 检查是否存在所需的元素或内容
    var elements = document.querySelectorAll('div[class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]');
    if (elements.length) {
        // 执行你的代码

        console.log(elements.length);
        // 使用函数
        var todayElement = findTodayElement();
        if (todayElement) {
            console.log(todayElement);
        } else {
            console.log("Today element not found.");
        }

        addArrowIcon(todayElement);

        elements.forEach(function (element) {
            // 打印每个元素的内部HTML内容

            // 获取div元素的直接文本内容
            var textContent = element.childNodes[0].nodeValue.trim();

            console.log(textContent);

            // 或者，如果您只想打印文本内容，可以使用：
            // console.log(element.innerText);
        });
        observer.disconnect(); // 如果不再需要观察，断开连接
    }
});

observer.observe(document.body, {
    childList: true, // 观察直接子节点的更改
    subtree: true,   // 观察所有后代节点的更改
    attributes: false
});


