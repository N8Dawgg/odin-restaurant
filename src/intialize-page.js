const CONTENT = document.querySelector('#content')

function createDivWithClassAndId(cssClassList=[], cssID=undefined) {
    let new_div = document.createElement('div')
    cssClassList.forEach((cssClass) => {new_div.classList.add(cssClass)})
    if (cssID != undefined) {
        new_div.id = cssID
    }
    return new_div
}

CONTENT.append(createDivWithClassAndId([],'test'));