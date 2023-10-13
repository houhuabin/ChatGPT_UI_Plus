function insertFold(targetDiv) {

    if (targetDiv) {
        var folder = creatFold();
        targetDiv.insertAdjacentElement('afterend', folder);
        const newDiv = document.querySelector('div[data-block-id="1_fold_1"]');

        if (newDiv) {
            // 你现在可以对newDiv进行操作
            console.log(newDiv);
        }
    }

}


function creatFold() {
    var container = createContainer("1_fold_1", "Prompts");

    return container;

}



function createContainer(container_id, taskTitle) {
    const container = document.createElement('div');
    container.style.backgroundColor = 'lightgray';
    container.id = container_id;
    container.className = 'ui_container';


    var taskDiv = createTaskDiv(taskTitle);
    container.appendChild(taskDiv);
    return container;
}

function createTaskDiv(taskTitle) {

    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.width = '100%';
    div.style.fontSize = '14px';
    div.style.minHeight = '27px';
    div.style.padding = '2px 10px 2px 5px';
    div.style.marginTop = '1px';
    div.style.marginBottom = '1px';
    div.style.borderRadius = '3px';
    div.style.fontWeight = '600';
    div.style.background = 'rgba(0, 0, 0, 0.04)';
    div.style.color = 'rgb(55, 53, 47)';

    var leftSVG = createLeftSVG();
    div.appendChild(leftSVG);

    var taskIcon = createTaskIcon();
    div.appendChild(taskIcon);

    var taskTitle = createTaskTitle(taskTitle);
    div.appendChild(taskTitle);

    var rightMenu = createRightTaskMenu();
    div.appendChild(rightMenu);

    return div;
}



function createLeftSVG() {
    // Outer div
    const outerDiv = document.createElement('div');
    outerDiv.style.cssText = "flex-shrink: 0; flex-grow: 0; border-radius: 3px;  width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; margin-right: 0px;";

    // Inner div
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('role', 'button');
    innerDiv.setAttribute('tabindex', '0');
    innerDiv.setAttribute('aria-expanded', 'false');
    innerDiv.setAttribute('aria-label', 'Open');
    innerDiv.style.cssText = "user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; position: relative; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 3px;";

    // SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('role', 'graphics-symbol');
    svg.setAttribute('viewBox', '0 0 12 12');
    svg.style.cssText = "width: 12px; height: 12px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; transition: transform 200ms ease-out 0s; transform: rotateZ(-90deg); opacity: 1;";

    // Path for SVG
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M9,2 L5,6 L9,10');
    // path.setAttribute('d', 'M2,3 L6,9 L10,3');
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "rgb(119, 119, 119)");
    path.setAttribute("stroke-width", "2");

    // Append path to SVG
    svg.appendChild(path);

    // Append SVG to inner div
    innerDiv.appendChild(svg);

    // Append inner div to outer div
    outerDiv.appendChild(innerDiv);

    return outerDiv;
}

function createTaskIcon() {
    // Outer div
    const outerDiv = document.createElement('div');
    outerDiv.style.cssText = "display: flex; align-items: center; justify-content: center; flex-shrink: 0; flex-grow: 0; width: 22px; height: 18px; margin-left: -3px; margin-right: 4px; position: relative;";

    // Inner div
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('role', 'button');
    innerDiv.setAttribute('tabindex', '0');
    innerDiv.className = 'notion-record-icon notranslate';
    innerDiv.setAttribute('aria-label', 'Change page icon');
    innerDiv.style.cssText = "user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; height: 20px; width: 20px; border-radius: 0.25em; flex-shrink: 0;";

    // Span for SVG
    const span = document.createElement('span');
    span.setAttribute('role', 'img');

    // SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('role', 'graphics-symbol');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.className = 'page';
    svg.style.cssText = "width: 18px; height: 18px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;";

    // Path for SVG
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M2 2 L4 2 L4 4 L14 4 L14 14 L2 14 Z M2 0 L4 0 L6 2 L14 2 L16 4 L16 14 L2 14 Z');

    // Append path to SVG
    svg.appendChild(path);

    // Append SVG to span
    span.appendChild(svg);

    // Append span to inner div
    innerDiv.appendChild(span);

    // Append inner div to outer div
    outerDiv.appendChild(innerDiv);

    return outerDiv;
}


function createTaskTitle(title) {
    // Outer div
    const outerDiv = document.createElement('div');
    outerDiv.style.cssText = "flex: 1 1 auto; white-space: nowrap; min-width: 0px; overflow: hidden; text-overflow: clip; display: flex; align-items: center;";

    // Inner div
    const innerDiv = document.createElement('div');
    innerDiv.id = ":rh:";
    innerDiv.className = 'notranslate';
    innerDiv.style.cssText = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";
    innerDiv.textContent = title;

    // Append inner div to outer div
    outerDiv.appendChild(innerDiv);

    return outerDiv;
}



function createRightTaskMenu() {
    // Outermost div
    const outerDiv = document.createElement('div');
    outerDiv.style.cssText = "display: flex; align-items: center; justify-content: center; flex-shrink: 0; flex-grow: 0; height: 100%;";

    // Middle div
    const middleDiv = document.createElement('div');
    // middleDiv.style.cssText = "padding-left: 3px; position: absolute; overflow: hidden; clip: rect(1px, 1px, 1px, 1px); white-space: nowrap; height: 1px; width: 1px;";

    // Innermost div
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('role', 'button');
    innerDiv.setAttribute('tabindex', '0');
    innerDiv.setAttribute('aria-label', 'Delete, duplicate, and more…');
    innerDiv.style.cssText = "user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 3px; margin-left: 4px;";

    // SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('role', 'graphics-symbol');
    svg.setAttribute('viewBox', '0 0 13 3');
    svg.className = 'dots';
    svg.style.cssText = "width: 14px; height: 100%; display: block; fill: rgba(25, 23, 17, 0.6); flex-shrink: 0;";

    // Paths for SVG
    const pathsData = [
        "M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z",
        "M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z",
        "M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"
    ];

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    for (const pathData of pathsData) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        g.appendChild(path);
    }
    svg.appendChild(g);

    // Appending elements
    innerDiv.appendChild(svg);
    middleDiv.appendChild(innerDiv);
    outerDiv.appendChild(middleDiv);

    return outerDiv;
}



