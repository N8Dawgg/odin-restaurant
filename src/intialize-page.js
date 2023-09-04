import PizzaImage from './images/Pizza.jpg'

const CONTENT = document.querySelector('#content');
const HEADER_TAB = createElementWithClassAndId('div','header-tab');
const TITLE_BLOCK = createElementWithClassAndId('div','title-block');
document.body.insertBefore(TITLE_BLOCK,CONTENT);
document.body.insertBefore(HEADER_TAB,CONTENT);


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

const HeaderButton = {
    HOME_BTN : createElementWithClassAndId('button', ['header-button'],'home'),
    MENU_BTN : createElementWithClassAndId('button', ['header-button'],'menu'),
    CONTACT_BTN : createElementWithClassAndId('button', ['header-button'],'contact')
}


function initializeHeaderTab() {
    HEADER_TAB.append(HeaderButton.HOME_BTN);
    HeaderButton.HOME_BTN.textContent = 'Home';
    HEADER_TAB.append(HeaderButton.MENU_BTN);
    HeaderButton.MENU_BTN.textContent = 'Menu';
    HEADER_TAB.append(HeaderButton.CONTACT_BTN);
    HeaderButton.CONTACT_BTN.textContent = 'Contact';
    let headerImage = createElementWithClassAndId('img', ['header-image']);
    headerImage.src = PizzaImage;
    HEADER_TAB.append(headerImage)
}



function initializeTitleBlock() {
    TITLE_BLOCK.textContent = "BEEBA'S PIZZA"
};

initializeHeaderTab();
initializeTitleBlock();

