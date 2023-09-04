import {createElementWithClassAndId} from './helper-functions.js'
import {CONTENT, PAGE} from './intialize-page.js'



let HomePageSection = {
    DESCRIPTION : createElementWithClassAndId('div',['page-section']),
    HOURS : createElementWithClassAndId('div',['page-section']),
    LOCATION : createElementWithClassAndId('div',['page-section'])
}

function setPageToHomePage() {
    PAGE.append(HomePageSection.DESCRIPTION);
    PAGE.append(HomePageSection.HOURS);
    PAGE.append(HomePageSection.LOCATION);
}








export {setPageToHomePage}