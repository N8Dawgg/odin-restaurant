import PizzaImage from './images/Pizza.jpg'
import {createElementWithClassAndId} from './helper-functions.js'

const PAGE = createElementWithClassAndId('div',['page-panel']);
const CONTENT = document.querySelector('#content');
const HEADER_TAB = createElementWithClassAndId('div','header-tab');
const TITLE_BLOCK = createElementWithClassAndId('div','title-block');
document.body.insertBefore(TITLE_BLOCK,CONTENT);
document.body.insertBefore(HEADER_TAB,CONTENT);
CONTENT.append(PAGE);



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

export {CONTENT, PAGE}