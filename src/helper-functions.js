function createElementWithClassAndId(elementTag, cssClassList=[], cssID=undefined) {
    let new_div = document.createElement(elementTag);
    if (typeof cssClassList === "string") {
        cssID = cssClassList;
    } else {
        cssClassList.forEach((cssClass) => {new_div.classList.add(cssClass)});
    }
    if (cssID != undefined) {
        new_div.id = cssID;
    }
    return new_div;
}


export {createElementWithClassAndId}