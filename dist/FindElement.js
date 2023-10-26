
function findAllChatHisElements() {
    return document.querySelectorAll('div[class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]');
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



function findNewChatElement() {

    let targetDiv = document.querySelector('.mb-1.flex.flex-row.gap-2');
    return targetDiv;
}

function addContainerAfterNewChat(targetDiv) {
    if (targetDiv) {
        targetDiv.insertAdjacentHTML('afterend', '<div style="background-color: lightgray;"><div style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 27px; padding: 2px 10px 2px 5px; margin-top: 1px; margin-bottom: 1px; border-radius: 3px; font-weight: 600; background: rgba(0, 0, 0, 0.04); color: rgb(55, 53, 47);"><div style="flex-shrink: 0; flex-grow: 0; border-radius: 3px; color: rgba(55, 53, 47, 0.65); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; margin-right: 0px;"><div role="button" tabindex="0" aria-describedby=":rh:" aria-expanded="false" aria-label="Open" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; position: relative; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 3px;"><svg role="graphics-symbol" viewBox="0 0 12 12" class="chevronDownRoundedThick" style="width: 12px; height: 12px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; transition: transform 200ms ease-out 0s; transform: rotateZ(-90deg); opacity: 1;"><path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"></path></svg></div></div><div style="display: flex; align-items: center; justify-content: center; flex-shrink: 0; flex-grow: 0; width: 22px; height: 18px; margin-left: -3px; margin-right: 4px; position: relative;"><div role="button" tabindex="0" class="notion-record-icon notranslate" aria-label="Change page icon" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; height: 20px; width: 20px; border-radius: 0.25em; flex-shrink: 0;"><span role="img"><svg role="graphics-symbol" viewBox="0 0 16 16" class="page" style="width: 18px; height: 18px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"></path></svg></span></div></div><div style="flex: 1 1 auto; white-space: nowrap; min-width: 0px; overflow: hidden; text-overflow: clip; display: flex; align-items: center;"><div id=":rh:" class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Domains for sell</div></div><div style="display: flex; align-items: center; justify-content: center; flex-shrink: 0; flex-grow: 0; height: 100%;"><div style="display: block; padding-left: 3px; position: absolute; overflow: hidden; clip: rect(1px, 1px, 1px, 1px); white-space: nowrap; height: 1px; width: 1px;"><div role="button" tabindex="0" aria-label="Delete, duplicate, and more…" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 3px; margin-left: 4px;"><svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="width: 14px; height: 100%; display: block; fill: rgba(25, 23, 17, 0.6); flex-shrink: 0;"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg></div><div role="button" tabindex="0" aria-label="Quickly add a page inside" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 3px; margin-left: 4px;"><svg role="graphics-symbol" viewBox="0 0 14 14" class="plusThick" style="width: 14px; height: 100%; display: block; fill: rgba(25, 23, 17, 0.6); flex-shrink: 0;"><path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path></svg></div></div></div></div></div>');
    }
}







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
    path.setAttribute("d", "M0.75 6a.375.375 0 0 1 .375-.375h8.845l-3.86-3.859a.375.375 0 0 1 .531-.531l4.5 4.5a.375.375 0 0 1 0 .531l-4.5 4.5a.375.375 0 0 1-.531-.531L9.97 6.375H1.125A.375.375 0 0 1 0.75 6z");
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
